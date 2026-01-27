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

const DEFAULT_EVENTS: TimelineEvent[] = [
    {
        year: "2023",
        title: "Major Achievement",
        subtitle: "Organization Name",
        description:
            "Description of the achievement or milestone reached during this time period.",
    },
    {
        year: "2022",
        title: "Important Milestone",
        subtitle: "Organization Name",
        description: "Details about this significant milestone and its impact.",
    },
    {
        year: "2021",
        title: "Key Event",
        subtitle: "Organization Name",
        description: "Information about this key event in the timeline.",
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
    connectorStyle = "line",
    perspective = false,
    darkMode = false,
    smoothScroll = true,
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


    const getCardClasses = (index: number) => {
        const baseClasses = "relative z-30 rounded-lg transition-all duration-300";
        const variantClasses = {
            default: " shadow-sm",
            elevated: " border border-border/40 shadow-md",
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
        >
            <div className="text-center py-16 px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
                <p className="text-lg  max-w-2xl mx-auto">
                    {subtitle}
                </p>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 pb-24">
                <div className="relative mx-auto">
                    <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 h-full z-10"
                        style={{
                            width: `${progressLineWidth}px`,
                        }}
                    ></div>

                    {/* === MODIFICATION START === */}
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
                                    // Enhanced shadow for a constant glow effect along the path
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
                                    translateY: "-50%", // Center the comet on the line's end point
                                }}
                            >
                                <motion.div
                                    className="w-20 h-20 rounded-full " // Size of the comet core
                                    style={{
                                        background:
                                            "radial-gradient(circle, rgba(168,85,247,0.8) 0%, rgba(99,102,241,0.5) 40%, rgba(34,211,238,0) 70%)",
                                        // Intense, layered glow effect for the comet
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
                    {/* === MODIFICATION END === */}

                    <div className="relative z-20">
                        {events.map((event, index) => {

                            return (
                        
<div
  key={event.id || index}
  className={`
  `}
>
    <h1 >hello</h1>
  {/* Timeline ball */}
  {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
    <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center">
      <motion.div
        className="w-12 h-12 rounded-full shadow-md bg-red-500"
        animate={{ scale: 1.5 }}
      />
    </div>
  </div> */}

  {cardAlignment === "alternating" && index % 2 === 0 ? (
    <div className="hidden lg:block" />
  ) : 
  (
    <>
    <h1>Hi</h1>
    </>
  )
//   (
//     <motion.div
//       className={getCardClasses(index) + " mt-12 lg:mt-0"}
//       variants={getCardVariants(index)}
//       initial="initial"
//       whileInView="whileInView"
//       viewport={{ once: false, margin: "-100px" }}
//       style={parallaxIntensity > 0 ? { y: yOffset } : undefined}
//     >
//       <Card className="border p-5 bg-red-600">
//         <CardContent className="p-6">
//           {dateFormat === "badge" ? (
//             <div className="flex items-center mb-2">
//               {event.icon || <Calendar className="h-4 w-4 mr-2" />}
//               <span className="text-sm font-bold">{event.year}</span>
//             </div>
//           ) : (
//             <p className="text-lg font-bold mb-2">{event.year}</p>
//           )}
//           <h3 className="text-xl font-bold mb-1">{event.title}</h3>
//           {event.subtitle && <p className="font-medium mb-2">{event.subtitle}</p>}
//           <p>{event.description}</p>
//         </CardContent>
//       </Card>
//     </motion.div>
//   )
  }

  {/* Right side card or spacer */}
  {cardAlignment === "alternating" && index % 2 === 0 ? (
    // <motion.div
    //   className={getCardClasses(index) + " mt-12 lg:mt-0"}
    //   variants={getCardVariants(index)}
    //   initial="initial"
    //   whileInView="whileInView"
    //   viewport={{ once: false, margin: "-100px" }}
    //   style={parallaxIntensity > 0 ? { y: yOffset } : undefined}
    // >
    //   <Card className="border p-5 bg-red-600">
    //     <CardContent className="p-6">
    //       {dateFormat === "badge" ? (
    //         <div className="flex items-center mb-2">
    //           {event.icon || <Calendar className="h-4 w-4 mr-2" />}
    //           <span className="text-sm font-bold">{event.year}</span>
    //         </div>
    //       ) : (
    //         <p className="text-lg font-bold mb-2">{event.year}</p>
    //       )}
    //       <h3 className="text-xl font-bold mb-1">{event.title}</h3>
    //       {event.subtitle && <p className="font-medium mb-2">{event.subtitle}</p>}
    //       <p>{event.description}</p>
    //     </CardContent>
    //   </Card>
    // </motion.div>
    <h1>hello2</h1>
  ) : (
    // <div className="hidden lg:block" />
    <h1>h1 2</h1>
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
