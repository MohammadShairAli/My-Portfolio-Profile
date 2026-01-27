'use client';

import DomeGallery from "./DomeGallery";
import { Code2, Database, Cloud, Zap, Cpu, Globe } from 'lucide-react';

export default function TechnologiesPage() {
    const techCategories = [
        { icon: <Code2 className="w-6 h-6" />, label: "Frontend", count: "5+" },
        { icon: <Database className="w-6 h-6" />, label: "Backend", count: "4+" },
        { icon: <Cloud className="w-6 h-6" />, label: "Cloud", count: "3+" },
        { icon: <Zap className="w-6 h-6" />, label: "Tools", count: "6+" },
    ];

    return (
        <section id="technologies" className="w-full flex flex-col py-16 px-4 sm:px-6 md:px-10 lg:px-16 bg-gradient-to-b from-white via-purple-50/20 to-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 right-20 w-80 h-80 bg-purple-200/15 rounded-full blur-3xl"></div>
                <div className="absolute bottom-40 left-20 w-96 h-96 bg-indigo-200/15 rounded-full blur-3xl"></div>
            </div>
            
            <div className="container mx-auto relative z-10">
                <div className="text-center mb-8">
                    <div className="inline-block mb-4">
                        <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-4 py-2 rounded-full">
                            TECH STACK
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 pb-6">
                        Technologies & Expertise
                    </h2>
                    <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium mb-4">
                        Comprehensive mastery across AI, modern development ecosystems, and cloud infrastructure
                    </p>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                        From AI frameworks (RAG, LLMs, AI Agents) to frontend frameworks and cloud infrastructure, I leverage cutting-edge technologies to build intelligent, scalable, and performant solutions
                    </p>
                    <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full shadow-lg"></div>
                    
                    {/* Tech Categories */}
                    <div className="flex flex-wrap justify-center gap-6 mt-12 pb-12">
                        {techCategories.map((category, idx) => (
                            <div 
                                key={idx}
                                className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                            >
                                <div className="text-indigo-600">{category.icon}</div>
                                <div>
                                    <div className="text-sm font-medium text-gray-600">{category.label}</div>
                                    <div className="text-xs text-gray-500">{category.count} Technologies</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div
                    className="w-full relative -mt-10 -mb-10"
                    style={{ height: 'clamp(520px, 58vh, 640px)' }}
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center z-10 pointer-events-none">
                            <div className="inline-block px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-xl border border-gray-200 mb-4">
                                <p className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                    <Globe className="w-4 h-4 text-indigo-600" />
                                    <span>Drag to explore technologies</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <DomeGallery
                        fit={0.6}
                        minRadius={10}
                        maxRadius={700}
                        maxVerticalRotationDeg={85}
                        segments={28}
                        dragDampening={5.4}
                        grayscale={false}
                        verticalOffsetPx={-120}
                    />
                </div>
                
                {/* Bottom CTA */}
                <div className="text-center mt-4 pt-6 border-t border-gray-200">
                    <p className="text-lg text-gray-600 mb-6">
                        Continuously learning and adapting to emerging technologies
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg">
                            Always Learning
                        </div>
                        <div className="px-6 py-3 bg-white border-2 border-indigo-600 text-indigo-600 rounded-full font-semibold shadow-lg">
                            Industry Best Practices
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
