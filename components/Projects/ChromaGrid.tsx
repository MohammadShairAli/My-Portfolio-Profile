"use client"
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
export interface ChromaItem {
    image: string;
    title: string;
    subtitle: string;
    location?: string;
    borderColor?: string;
    gradient?: string;
    url?: string;
}

export interface ChromaGridProps {
    items?: ChromaItem[];
    className?: string;
    radius?: number;
    damping?: number;
    fadeOut?: number;
    ease?: string;
}

type SetterFn = (v: number | string) => void;

const ChromaGrid: React.FC<ChromaGridProps> = ({
    items,
    className = '',
    radius = 300,
    damping = 0.45,
    fadeOut = 0.6,
    ease = 'power3.out'
}) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const fadeRef = useRef<HTMLDivElement>(null);
    const setX = useRef<SetterFn | null>(null);
    const setY = useRef<SetterFn | null>(null);
    const pos = useRef({ x: 0, y: 0 });

    const demo: ChromaItem[] = [];

    const data = items?.length ? items : demo;

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        setX.current = gsap.quickSetter(el, '--x', 'px') as SetterFn;
        setY.current = gsap.quickSetter(el, '--y', 'px') as SetterFn;
        const { width, height } = el.getBoundingClientRect();
        pos.current = { x: width / 2, y: height / 2 };
        setX.current(pos.current.x);
        setY.current(pos.current.y);
    }, []);

    const moveTo = (x: number, y: number) => {
        gsap.to(pos.current, {
            x,
            y,
            duration: damping,
            ease,
            onUpdate: () => {
                setX.current?.(pos.current.x);
                setY.current?.(pos.current.y);
            },
            overwrite: true
        });
    };

    const handleMove = (e: React.PointerEvent) => {
        const r = rootRef.current!.getBoundingClientRect();
        moveTo(e.clientX - r.left, e.clientY - r.top);
        gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
    };

    const handleLeave = () => {
        gsap.to(fadeRef.current, {
            opacity: 1,
            duration: fadeOut,
            overwrite: true
        });
    };

    const handleCardClick = (url?: string) => {
        if (url) window.open(url, '_blank', 'noopener,noreferrer');
    };

    const handleCardMove: React.MouseEventHandler<HTMLElement> = e => {
        const c = e.currentTarget as HTMLElement;
        const rect = c.getBoundingClientRect();
        c.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        c.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    };

    return (
        <div
            ref={rootRef}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
            className={`relative w-full h-full flex flex-wrap justify-center items-start gap-6 ${className}`}
            style={
                {
                    '--r': `${radius}px`,
                    '--x': '50%',
                    '--y': '50%'
                } as React.CSSProperties
            }
        >
            {data.map((c, i) => (
                <article
                    key={i}
                    onMouseMove={handleCardMove}
                    className="brightness-95 hover:brightness-110 hover:opacity-100 opacity-75 group relative flex flex-col w-[350px] sm:w-[370px] h-[520px] rounded-3xl overflow-hidden border border-gray-200/50 transition-all duration-500 filter shadow-lg hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 bg-white"
                    style={{
                        '--card-border': c.borderColor || 'transparent',
                        '--spotlight-color': 'rgba(99, 102, 241, 0.15)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.05)'
                    } as React.CSSProperties}
                >
                    {/* Theme-matching gradient overlay */}
                    <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                        style={{
                            background: `linear-gradient(135deg, ${c.borderColor || '#6366f1'}15, ${c.borderColor || '#8b5cf6'}10)`
                        }}
                    />
                    
                    {/* Enhanced spotlight effect with theme colors */}
                    <div
                        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
                        style={{
                            background:
                                'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)'
                        }}
                    />
                    
                    {/* Image container with theme styling */}
                    <div className="relative z-10 flex-shrink-0 p-4 box-border">
                        <div className="relative w-full h-[240px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200/50 shadow-inner">
                            <img 
                                src={c.image} 
                                alt={c.title} 
                                loading="lazy" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Theme accent border on hover */}
                            <div 
                                className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-opacity-30 transition-all duration-300"
                                style={{
                                    borderColor: c.borderColor || '#6366f1'
                                }}
                            />
                        </div>
                    </div>
                    
                    {/* Enhanced footer matching theme */}
                    <footer className="relative z-10 flex-1 flex flex-col justify-between p-6 text-gray-900 font-sans space-y-4 bg-white border-t border-gray-100">
                        <div className='space-y-2'>
                            <h3 className="m-0 text-xl sm:text-2xl font-extrabold leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                {c.title}
                            </h3>
                            <p className="m-0 text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
                                {c.subtitle}
                            </p>
                        </div>
                        
                        <button
                            onClick={() => handleCardClick(c.url)}
                            className="relative cursor-pointer text-sm font-bold px-6 py-3 rounded-xl transition-all duration-300 text-white flex items-center justify-center gap-2 overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 group w-full shadow-md hover:shadow-lg transform hover:scale-[1.02]"
                            onMouseEnter={e => {
                                const arrow = e.currentTarget.querySelector('.arrow') as HTMLElement;
                                if (arrow) arrow.style.opacity = '1';
                                if (arrow) arrow.style.transform = 'translateX(6px)';
                            }}
                            onMouseLeave={e => {
                                const arrow = e.currentTarget.querySelector('.arrow') as HTMLElement;
                                if (arrow) arrow.style.opacity = '0';
                                if (arrow) arrow.style.transform = 'translateX(0)';
                            }}
                        >
                            <span className="font-semibold">View Project</span>
                            <span
                                className="arrow transition-all duration-300 text-lg font-bold"
                                style={{
                                    opacity: 0,
                                    transform: 'translateX(0)',
                                    display: 'inline-block',
                                }}
                            >
                                →
                            </span>
                        </button>
                    </footer>
                </article>
            ))}
            {/* <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
        //   backdropFilter: 'grayscale(1) brightness(0.78)',
          backdropFilter: 'none',
        //   WebkitBackdropFilter: 'grayscale(1) brightness(0.78)',
          WebkitBackdropFilter: 'none',
          background: 'transparent',
          
          maskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)',
          WebkitMaskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)'
        }}
      /> */}
            <div
                ref={fadeRef}
                className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-[-1]"
                style={{
                    backdropFilter: 'none',
                    WebkitBackdropFilter: 'none',
                    //   backdropFilter: 'grayscale(1) brightness(0.78)',
                    //   WebkitBackdropFilter: 'grayscale(1) brightness(0.78)',
                    background: 'transparent',
                    maskImage:
                        'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)',
                    WebkitMaskImage:
                        'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)',
                    opacity: 1
                }}
            />
        </div>
    );
};

export default ChromaGrid;
