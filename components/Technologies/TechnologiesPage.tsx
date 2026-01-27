
import DomeGallery from "./DomeGallery";

export default function TechnologiesPage() {

    return (
            <div className="w-full h-full flex flex-col p-10 space-y-5">
                <h1 className="text-center text-[3vw] font-bold items-center">
                    Technologies & Expertise
                </h1>
                <div className="ml-auto w-full h-full relative" style={{ height: '100vh' }}>
                    <DomeGallery
                        fit={0.6}
                        minRadius={10}
                        maxRadius={700}
                        maxVerticalRotationDeg={85}
                        segments={28}
                        dragDampening={5.4}
                        grayscale
                    />
                </div>
            </div>
    );
}
