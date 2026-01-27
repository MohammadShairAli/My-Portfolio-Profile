
import ChromaGrid from './ChromaGrid'

export default function ProjectsPage() {
    const items = [
        {
            image: "/dinein1.png",
            title: "DineIn Platform",
            subtitle: "Enterprise Restaurant Management SAAS",
            borderColor: "#EF4444",
            gradient: "linear-gradient(145deg, #EF4444, #B91C1C)",
            url: "https://github.com"
        }, 
        {
            image: "/travelmultiverse1.png",
            title: "Travel Multiverse",
            subtitle: "AI-Powered Travel Discovery & Booking Platform",
            borderColor: "rgb(8, 131, 149)",
            gradient: "linear-gradient(145deg, rgb(8, 131, 149), #000)",
            url: "https://github.com"
        }, 
        {
            image: "/FStreet1.png",
            title: "FStreet Social",
            subtitle: "Real-time Restaurant Table Booking System",
            borderColor: "oklch(0.5354 0.103 41.76)",
            gradient: "linear-gradient(145deg, oklch(0.5354 0.103 41.76), #000)",
            url: "https://github.com"
        }, 
        {
            image: "/Georgia1.png",
            title: "Georgia Foreclosure Hub",
            subtitle: "Property Discovery & Investment Platform",
            borderColor: "oklch(0.45 0.085 224.283)",
            gradient: "linear-gradient(145deg, oklch(0.45 0.085 224.283), #000)",
            url: "https://github.com"
        }, 
        {
            image: "/Amazon1.png",
            title: "Amazon Data Extractor",
            subtitle: "Enterprise E-commerce Data Aggregation System",
            borderColor: "rgb(15, 17, 17)",
            gradient: "linear-gradient(145deg, rgb(15, 17, 17), #000)",
            url: "https://github.com"
        }, 
        {
            image: "/BOL1.png",
            title: "BOL Analytics Platform",
            subtitle: "Product Data Collection & Organization System",
            borderColor: "rgb(0, 0, 163)",
            gradient: "linear-gradient(145deg, rgb(0, 0, 163), #000)",
            url: "https://github.com"
        }, 
        {
            image: "/GoogleSheet1.png",
            title: "Google Sheets Automation",
            subtitle: "Enterprise Data Processing & Integration Tool",
            borderColor: "#10B981",
            gradient: "linear-gradient(145deg, #10B981, #000)",
            url: "https://github.com"
        },
        {
            image: "/Integrations1.png",
            title: "Unified Integration Hub",
            subtitle: "Multi-Platform API Integration & Management",
            borderColor: "rgb(245, 158, 11)",
            gradient: "linear-gradient(180deg, rgb(245, 158, 11), #000)",
            url: "https://github.com"
        }
    ];

    return (
        <section id="projects" className="min-h-screen w-full py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-gradient-to-b from-white via-indigo-50/30 to-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
            </div>
            
            <div className="container mx-auto relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-block mb-4">
                        <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full">
                            PORTFOLIO SHOWCASE
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
                        Enterprise-grade applications delivering exceptional user experiences and measurable business impact
                    </p>
                    <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full mt-6 shadow-lg"></div>
                    
                    {/* Stats bar */}
                    <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-gray-200">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-indigo-600">8+</div>
                            <div className="text-sm text-gray-600 mt-1">Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600">100%</div>
                            <div className="text-sm text-gray-600 mt-1">Client Satisfaction</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-pink-600">7+</div>
                            <div className="text-sm text-gray-600 mt-1">Years Experience</div>
                        </div>
                    </div>
                </div>
                
                <div className="relative">
                    <ChromaGrid
                        items={items}
                        radius={300}
                        damping={0.45}
                        fadeOut={0.6}
                        ease="power3.out"
                    />
                </div>
            </div>
        </section>
    );
}
