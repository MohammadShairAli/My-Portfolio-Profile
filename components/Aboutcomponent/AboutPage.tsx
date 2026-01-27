// import Magnet from './Magnet';

import ScrollReveal from '@/components/Aboutcomponent/ScrollReveal';
import CountUp from "@/components/Aboutcomponent/CountUp";
export default function AboutPage() {

  return (
    <div className="min-h-screen w-full px-10 flex flex-col justify-center items-center ">
      <h1 className="text-[3vw] font-bold">About Me</h1>
      <div className="w-full px-5">

        <div className="flex-1 space-y-6 leading-relaxed ">
          <ScrollReveal textClassName="font-bold text-[2vw]">
            Full Stack Developer • Python Developer • Web Scraping Specialist
          </ScrollReveal>

          <ScrollReveal textClassName="text-[1.5vw]">
            I am a skilled freelancer who builds responsive web applications, automates workflows, and extracts valuable data to help businesses operate more efficiently.
          </ScrollReveal>

          <ScrollReveal textClassName="text-[1.5vw]">
            I prioritize clear communication, strong attention to requirements, and reliable delivery. Whether working with startups or established companies, I turn ideas into practical, results-driven digital products.
          </ScrollReveal>
        </div>

        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 py-16 px-4 md:px-0">

          {/* Experience */}
          <div className=" flex flex-col items-center bg-gray-100 px-6 sm:px-8 py-6 rounded-lg shadow-md w-full md:w-1/3">
            <div className="flex items-baseline space-x-1">
              <CountUp
                from={0}
                to={5}
                duration={1.5}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-black"
                startCounting={true}
              />
              <span className="text-3xl sm:text-4xl md:text-6xl font-bold text-black">+</span>
            </div>
            <span className="mt-2 text-base sm:text-lg md:text-xl font-medium text-black text-center">
              Years Experience
            </span>
          </div>

          {/* Projects */}
          <div className=" flex flex-col items-center bg-gray-100 px-6 sm:px-8 py-6 rounded-lg shadow-md w-full md:w-1/3">
            <div className="flex items-baseline space-x-1">
              <CountUp
                from={0}
                to={100}
                duration={2}
                separator=","
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-black"
                startCounting={true}
              />
              <span className="text-3xl sm:text-4xl md:text-6xl font-bold text-black">+</span>
            </div>
            <span className="mt-2 text-base sm:text-lg md:text-xl font-medium text-black text-center">
              Projects Completed
            </span>
          </div>

          {/* Clients */}
          <div className=" flex flex-col items-center bg-gray-100 px-6 sm:px-8 py-6 rounded-lg shadow-md w-full md:w-1/3">
            <div className="flex items-baseline space-x-1">
              <CountUp
                from={0}
                to={50}
                duration={1.5}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-black"
                startCounting={true}
              />
              <span className="text-3xl sm:text-4xl md:text-6xl font-bold text-black">+</span>
            </div>
            <span className="mt-2 text-base sm:text-lg md:text-xl font-medium text-black text-center">
              Happy Clients
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
