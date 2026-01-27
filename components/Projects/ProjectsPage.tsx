

import ChromaGrid from './ChromaGrid'


export default function ProjectsPage() {
    const items = [
        {
            image: "/dinein1.png",
            title: "DineIn",
            subtitle: "Restaurant based SAAS",

            borderColor: "#EF4444",
            gradient: "linear-gradient(145deg, #EF4444, #B91C1C)",
            url: "https://github.com/sarahjohnson"
        }, {
            image: "/travelmultiverse1.png",
            title: "Travel Multiverse",
            subtitle: "Travel Discovery & Booking Platform",
            borderColor: "rgb(8, 131, 149)",
            gradient: "linear-gradient(145deg, rgb(8, 131, 149), #000)",
            url: "https://github.com/sarahjohnson"
        }, {
            image: "/FStreet1.png",
            title: "FStreet Social",
            subtitle: "Online Table Booking",
            handle: "@sarahjohnson",
            borderColor: "oklch(0.5354 0.103 41.76)",
            gradient: "linear-gradient(145deg, oklch(0.5354 0.103 41.76), #000)",
            url: "https://github.com/sarahjohnson"
        }, {
            image: "/Georgia1.png",
            title: "Georgia Forclosure",
            subtitle: "Discover & Purchase Properties Online",
            handle: "@sarahjohnson",
            borderColor: "oklch(0.45 0.085 224.283)",
            gradient: "linear-gradient(145deg, oklch(0.45 0.085 224.283), #000)",
            url: "https://github.com/sarahjohnson"
        }, {
            image: "/Amazon1.png",
            title: "Amazon",
            subtitle: "Automated retrieval of Amazon products",
            borderColor: "rgb(15, 17, 17)",
            gradient: "linear-gradient(145deg, rgb(15, 17, 17), #000)",
            url: "https://github.com/sarahjohnson"
        }, {
            image: "/BOL1.png",
            title: "BOL",
            subtitle: "Collected and organized BOL product details",
            borderColor: "rgb(0, 0, 163)",
            gradient: "linear-gradient(145deg, rgb(0, 0, 163), #000)",
            url: "https://github.com/sarahjohnson"
        }, {
            image: "/GoogleSheet1.png",
            title: "Google Sheets",
            subtitle: "Automated Google Sheets data processing",
            borderColor: "#10B98",
            gradient: "linear-gradient(145deg, #10B981, #000)",
            url: "https://github.com/sarahjohnson"
        },
        {
            image: "/Integrations1.png",
            title: "Multiple Integrations",
            subtitle: "All Your Tools, One Hub",
            borderColor: "rgb(245, 158, 11)",
            gradient: "linear-gradient(180deg, rgb(245, 158, 11), #000)",
            url: "https://linkedin.com/in/mikechen"
        }
    ];

    return (
        <div className="min-h-screen w-full">
            <h1 className='font-bold text-[3vw] text-center pb-5'>Projects</h1>
            <div >
                <ChromaGrid
                    items={items}
                    radius={300}
                    damping={0.45}
                    fadeOut={0.6}
                    ease="power3.out"
                />
            </div>
        </div>
    );
}
