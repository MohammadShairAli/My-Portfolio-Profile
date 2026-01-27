import MagicBento from "./MagicBento";

export default function Technologies() {

  return (
    <div className="space-y-10">
      <div className="min-h-screen p-5 space-y-10 w-full">
        <h1 className="text-center text-[3vw] font-bold">
          Technologies & Expertise
        </h1>
        <div className="flex flex-wrap gap-5 justify-center ">
          <MagicBento
            textAutoHide={true}
            enableStars
            enableSpotlight
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect
            spotlightRadius={400}
            particleCount={12}
            glowColor="132, 0, 255"
            disableAnimations={false}
          />
        </div>
      </div>

    </div>
  );
}
