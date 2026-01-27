"use client"
import React, { useState, useEffect, useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,

} from "framer-motion";
import { Card, CardContent } from "./card";
import { Calendar } from "lucide-react";

export interface TimelineEvent {
    id?: string;
    year: string;
    title: string;
    subtitle?: string;
    description: string;
    icon?: React.ReactNode;
    color?: string;
}

export interface ScrollTimelineProps {
    events: TimelineEvent[];
    title?: string;
    subtitle?: string;
    animationOrder?: "sequential" | "staggered" | "simultaneous";
    cardAlignment?: "alternating" | "left" | "right";
    lineColor?: string;
    activeColor?: string;
    progressIndicator?: boolean;
    cardVariant?: "default" | "elevated" | "outlined" | "filled";
    cardEffect?: "none" | "glow" | "shadow" | "bounce";
    parallaxIntensity?: number;
    progressLineWidth?: number;
    progressLineCap?: "round" | "square";
    dateFormat?: "text" | "badge";
    className?: string;
    revealAnimation?: "fade" | "slide" | "scale" | "flip" | "none";
    connectorStyle?: "dots" | "line" | "dashed";
    perspective?: boolean;
    darkMode?: boolean;
    smoothScroll?: boolean;
}

// Default timeline data reflecting 7+ years of professional experience with AI expertise
const DEFAULT_EVENTS: TimelineEvent[] = [
    {
        id: "1",
        year: "2024",
        title: "AI Expert & Senior Full Stack Developer",
        subtitle: "Enterprise Solutions Inc.",
        description:
            "Leading AI initiatives and a team of 8 developers in building next-generation AI-powered applications. Architected RAG systems, AI agents, and voice-enabled chatbots. Built microservices handling 10M+ daily requests with AI capabilities. Reduced infrastructure costs by 35% through optimization.",
    },
    {
        id: "2",
        year: "2022 - 2023",
        title: "Senior AI Engineer & Full Stack Developer",
        subtitle: "Tech Innovation Labs",
        description:
            "Designed and implemented AI-powered backend systems using Python, LLMs, and vector databases. Built intelligent chatbots and voice agents for customer service. Improved API response times by 60% and database query performance by 45%. Developed RAG systems for enhanced knowledge retrieval. Mentored 5 junior developers in AI technologies.",
    },
    {
        id: "3",
        year: "2020 - 2021",
        title: "Full Stack Developer & AI Specialist",
        subtitle: "Digital Solutions Agency",
        description:
            "Developed 20+ production applications with AI capabilities for clients across healthcare, finance, and e-commerce. Built intelligent chatbots and conversational AI interfaces. Created React/Next.js frontends and Python/Django backends with AI integrations. Achieved 99.9% uptime for critical systems.",
    },
    {
        id: "4",
        year: "2018 - 2019",
        title: "Software Engineer",
        subtitle: "StartupHub Technologies",
        description:
            "Built MVP products from scratch using modern JavaScript frameworks. Implemented CI/CD pipelines and cloud infrastructure on AWS. Contributed to open-source projects with 500+ GitHub stars.",
    },
    {
        id: "5",
        year: "2017",
        title: "Junior Developer",
        subtitle: "WebDev Solutions",
        description:
            "Started professional journey building responsive web applications. Gained expertise in React, Node.js, and Python. Delivered 15+ client projects in first year with 100% client satisfaction.",
    },
    {
        id: "6",
        year: "2016",
        title: "Computer Science Degree",
        subtitle: "University of Technology",
        description:
            "Graduated Magna Cum Laude with specialization in Software Engineering and Distributed Systems. Completed capstone project on scalable microservices architecture. Active in coding competitions and hackathons.",
    },
];

export const ScrollTimeline = ({
    events = DEFAULT_EVENTS,
    title = "Timeline",
    subtitle = "Scroll to explore the journey",
    animationOrder = "sequential",
    cardAlignment = "alternating",
    progressIndicator = true,
    cardVariant = "default",
    cardEffect = "none",
    parallaxIntensity = 0.2,
    progressLineWidth = 2,
    progressLineCap = "round",
    dateFormat = "badge",
    revealAnimation = "fade",
    className = "",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    connectorStyle = "line", // Reserved for future connector style variations
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    perspective = false, // Reserved for future 3D perspective effects
    darkMode = false,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    smoothScroll = true, // Reserved for future smooth scroll behavior
}: ScrollTimelineProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(-1);
    const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

    const yOffset = useTransform(
        smoothProgress,
        [0, 1],
        [parallaxIntensity * 100, -parallaxIntensity * 100]
    );

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((v) => {
            const newIndex = Math.floor(v * events.length);
            if (
                newIndex !== activeIndex &&
                newIndex >= 0 &&
                newIndex < events.length
            ) {
                setActiveIndex(newIndex);
            }
        });
        return () => unsubscribe();
    }, [scrollYProgress, events.length, activeIndex]);

    const getCardVariants = (index: number) => {
        const baseDelay =
            animationOrder === "simultaneous"
                ? 0
                : animationOrder === "staggered"
                    ? index * 0.2
                    : index * 0.3;

        const initialStates = {
            fade: { opacity: 0, y: 20 },
            slide: {
                x:
                    cardAlignment === "left"
                        ? -100
                        : cardAlignment === "right"
                            ? 100
                            : index % 2 === 0
                                ? -100
                                : 100,
                opacity: 0,
            },
            scale: { scale: 0.8, opacity: 0 },
            flip: { rotateY: 90, opacity: 0 },
            none: { opacity: 1 },
        };

        return {
            initial: initialStates[revealAnimation],
            whileInView: {
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
                rotateY: 0,
                transition: {
                    duration: 0.7,
                    delay: baseDelay,
                    ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
                },
            },
            viewport: { once: false, margin: "-100px" },
        };
    };


    const getCardClasses = () => {
        const baseClasses = "relative z-30 rounded-lg transition-all duration-300";
        const variantClasses = {
            default: " shadow-sm",
            elevated: " ",
            outlined: " backdrop-blur border-2 ",
            filled: " border ",
        };
        const effectClasses = {
            none: "",
            glow: "hover:shadow-[0_0_15px_rgba(var(--primary-rgb))]",
            shadow: "hover:shadow-lg hover:-translate-y-1",
            bounce: "hover:scale-[1.03] hover:shadow-md active:scale-[5.1]",
        };
        return `
                ${baseClasses} ${variantClasses[cardVariant]} ${effectClasses[cardEffect]} w-full`
            ;

    };

    return (
        <div
            ref={scrollRef}
            className={className}
        >
            <div className="text-center py-12 px-4">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    {title}
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
                    {subtitle}
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 pb-24">
                <div className="relative mx-auto">
                    {/* Background timeline line */}
                    <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 h-full z-10"
                        style={{
                            width: `${progressLineWidth}px`,
                            background: darkMode
                                ? "linear-gradient(to bottom, rgba(75, 85, 99, 0.3), rgba(75, 85, 99, 0.5))"
                                : "linear-gradient(to bottom, rgba(229, 231, 235, 0.5), rgba(209, 213, 219, 0.8))",
                            borderRadius: progressLineCap === "round" ? "9999px" : "0px",
                        }}
                    />

                    {/* Enhanced Progress Indicator with Traveling Glow */}
                    {progressIndicator && (
                        <>
                            {/* The main filled progress line */}
                            <motion.div
                                className="absolute top-0 z-10"
                                style={{
                                    height: progressHeight,
                                    width: progressLineWidth,
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    borderRadius:
                                        progressLineCap === "round" ? "9999px" : "0px",
                                    background: `linear-gradient(to bottom, #22d3ee, #6366f1, #a855f7)`,
                                    boxShadow: `
                        0 0 15px rgba(99,102,241,0.5),
                        0 0 25px rgba(168,85,247,0.3)
                    `,
                                }}
                            />
                            {/* The traveling glow "comet" at the head of the line */}
                            <motion.div
                                className="absolute z-20"
                                style={{
                                    top: progressHeight,
                                    left: "50%",
                                    translateX: "-50%",
                                    translateY: "-50%",
                                }}
                            >
                                <motion.div
                                    className="w-20 h-20 rounded-full"
                                    style={{
                                        background:
                                            "radial-gradient(circle, rgba(168,85,247,0.8) 0%, rgba(99,102,241,0.5) 40%, rgba(34,211,238,0) 70%)",
                                        boxShadow: `
                        0 0 15px 4px rgba(168, 85, 247, 0.6),
                        0 0 25px 8px rgba(99, 102, 241, 0.4),
                        0 0 40px 15px rgba(34, 211, 238, 0.2)
                        `,
                                    }}
                                    animate={{
                                        scale: [1, 1.3, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                            </motion.div>
                        </>
                    )}

                    <div className="relative z-20">
                        {events.map((event, index) => {
                            const isLeft = cardAlignment === "left" ||
                                (cardAlignment === "alternating" && index % 2 === 0);

                            return (
                                <div
                                    key={event.id || index}
                                    className="relative flex items-center min-h-[200px] mb-8 lg:mb-16"
                                    ref={(el) => {
                                        timelineRefs.current[index] = el;
                                    }}
                                >
                                    {/* Timeline marker/connector */}
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                                        <motion.div
                                            className={`w-6 h-6 rounded-full border-4 ${activeIndex === index
                                                ? "border-indigo-500 bg-indigo-500"
                                                : "border-gray-300 bg-white"
                                                } flex items-center justify-center transition-all duration-300`}
                                            animate={{
                                                scale: activeIndex === index ? 1.2 : 1,
                                            }}
                                        >
                                            {activeIndex === index && (
                                                <motion.div
                                                    className="w-3 h-3 rounded-full bg-white"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ duration: 0.2 }}
                                                />
                                            )}
                                        </motion.div>
                                    </div>

                                    {/* Left side card (for alternating or left alignment) */}
                                    {isLeft ? (
                                        <motion.div
                                            className={`${getCardClasses()} lg:w-[45%] lg:mr-auto lg:pr-8 mt-12 lg:mt-0`}
                                            variants={getCardVariants(index)}
                                            initial="initial"
                                            whileInView="whileInView"
                                            viewport={{ once: false, margin: "-100px" }}
                                            style={parallaxIntensity > 0 ? { y: yOffset } : undefined}
                                        >
                                            <Card className="border p-5 backdrop-blur-sm hover:bg-white transition-colors">
                                                <CardContent className="p-6">
                                                    {dateFormat === "badge" ? (
                                                        <div className="flex items-center gap-2 mb-3">
                                                            {event.icon || <Calendar className="h-4 w-4 text-indigo-600" />}
                                                            <span className="text-sm font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                                                                {event.year}
                                                            </span>
                                                        </div>
                                                    ) : (
                                                        <p className="text-lg font-bold mb-2 text-gray-700">{event.year}</p>
                                                    )}
                                                    <h3 className="text-xl font-bold mb-1 text-gray-900">{event.title}</h3>
                                                    {event.subtitle && (
                                                        <p className="text-sm font-medium mb-3 text-gray-600">{event.subtitle}</p>
                                                    )}
                                                    <p className="text-gray-700 leading-relaxed">{event.description}</p>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ) : (
                                        <div className="hidden lg:block lg:w-[45%]" />
                                    )}

                                    {/* Right side card (for alternating or right alignment) */}
                                    {!isLeft ? (
                                        <motion.div
                                            className={`${getCardClasses()} lg:w-[45%] lg:ml-auto lg:pl-8 mt-12 lg:mt-0`}
                                            variants={getCardVariants(index)}
                                            initial="initial"
                                            whileInView="whileInView"
                                            viewport={{ once: false, margin: "-100px" }}
                                            style={parallaxIntensity > 0 ? { y: yOffset } : undefined}
                                        >
                                            <Card className="border p-5 bg-white/80 backdrop-blur-sm hover:bg-white transition-colors">
                                                <CardContent className="p-6">
                                                    {dateFormat === "badge" ? (
                                                        <div className="flex items-center gap-2 mb-3">
                                                            {event.icon || <Calendar className="h-4 w-4 text-indigo-600" />}
                                                            <span className="text-sm font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                                                                {event.year}
                                                            </span>
                                                        </div>
                                                    ) : (
                                                        <p className="text-lg font-bold mb-2 text-gray-700">{event.year}</p>
                                                    )}
                                                    <h3 className="text-xl font-bold mb-1 text-gray-900">{event.title}</h3>
                                                    {event.subtitle && (
                                                        <p className="text-sm font-medium mb-3 text-gray-600">{event.subtitle}</p>
                                                    )}
                                                    <p className="text-gray-700 leading-relaxed">{event.description}</p>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ) : (
                                        <div className="hidden lg:block lg:w-[45%]" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
