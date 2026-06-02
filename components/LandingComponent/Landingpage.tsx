'use client';

import TextType from './TextType';
import Image from "next/image";
import SplitText from "./SplitText";
import { useState } from 'react';
import { ArrowDown } from 'lucide-react';

export default function Landingpage() {
  const [key, setKey] = useState(0);
  const handleAnimationComplete = () => {
    setTimeout(() => {
      setKey(prev => prev + 1);
    }, 2000);
  };

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Image Section */}
          <div className="flex-shrink-0 order-2 lg:order-1">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-3xl animate-pulse"></div>
              <div className="relative w-full h-full rounded-full border-4 border-indigo-200 shadow-2xl overflow-hidden bg-white p-2">
                <Image
                  src="/profile_img.jpg"
                  alt="Professional Profile"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full rounded-full"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="flex-1 max-w-2xl text-center lg:text-left order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                <TextType
                  text={["Shair Ali", ""]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor
                  cursorCharacter="▎"
                  cursorClassName="text-indigo-600"
                  deletingSpeed={50}
                  loop={true}
                  cursorBlinkDuration={0.5}
                />
              </h1>
              
              <div className="h-20 sm:h-24 md:h-28 flex items-center justify-center lg:justify-start">
                <SplitText
                  key={key}
                  text="AI Expert | Full Stack Developer | RAG & AI Agents Specialist"
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 leading-tight"
                  delay={50}
                  duration={1.25}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                  onLetterAnimationComplete={handleAnimationComplete}
                  showCallback
                />
              </div>
            </div>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
  With <span className="font-bold text-indigo-600">2+ years</span> of experience, I specialize in
  <span className="font-bold text-purple-600"> AI solutions</span>, including RAG systems, AI agents, and chatbots,
  while building modern full-stack applications with
  <span className="font-bold text-blue-600"> Next.js</span>,
  <span className="font-bold text-cyan-600"> React</span>, and
  <span className="font-bold text-green-600"> Django</span>.
  My focus is on creating intelligent, scalable, and user-centric digital products.
</p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-white border-2 border-indigo-600 text-indigo-600 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
          <button 
            onClick={scrollToNext}
            className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-indigo-200 shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Scroll to next section"
          >
            <ArrowDown className="w-6 h-6 text-indigo-600" />
          </button>
        </div> */}
      </div>
    </section>
  );
}

// 'use client';

// import TextType from './TextType';
// import Image from "next/image";
// import SplitText from "./SplitText";
// import { useState } from 'react';

// export default function Landingpage() {
//   const [key, setKey] = useState(0);
//   const handleAnimationComplete = () => {
//     setTimeout(() => {
//       setKey(prev => prev + 1);
//     }, 2000);
//   };

//   return (
//     <>
//     <div className="min-h-screen w-full overflow-x-hidden">
//   <h1 className="text-center font-bold text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[10vw]">
//     <TextType
//       text={["Ali Zamaan", ""]}
//       typingSpeed={75}
//       pauseDuration={1500}
//       showCursor
//       cursorCharacter="▎"
//       cursorClassName="text-black"
//       deletingSpeed={50}
//       loop={true}
//       cursorBlinkDuration={0.5}
//     />
//   </h1>

//   <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 py-10 px-4 sm:px-6 md:px-10 bg-gray-100 shadow-[0_-10px_20px_-5px_rgba(0,0,0,0.3)] w-full">
    
//     {/* Image */}
//     <div className="flex-shrink-0 w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-[500px] lg:h-[500px] rounded-full border-4 border-gray-400 overflow-hidden">
//       <Image
//         src="/profile_img.png"
//         alt="Profile image"
//         width={500}
//         height={500}
//         className="object-cover w-full h-full"
//       />
//     </div>

//     {/* Text */}
//     <div className="flex-1 max-w-full text-center md:text-left break-words whitespace-normal">
//   <SplitText
//     key={key}
//     text="Python Engineer | Full Stack Developer | Data Extraction | Web Scraping"
//     className="text-[clamp(1rem,4vw,2rem)] sm:text-[clamp(1.2rem,3.5vw,2.5rem)] md:text-[clamp(1.5rem,3vw,3rem)] lg:text-[3.97vw] font-semibold break-words whitespace-normal"
//     delay={50}
//     duration={1.25}
//     ease="power3.out"
//     splitType="chars"
//     from={{ opacity: 0, y: 40 }}
//     to={{ opacity: 1, y: 0 }}
//     threshold={0.1}
//     rootMargin="-100px"
//     textAlign="center"
//     onLetterAnimationComplete={handleAnimationComplete}
//     showCallback
//   />
// </div>

//   </div>
// </div>

//     </>
//   );
// }
// 'use client';

// import TextType from '../components/TextType';
// import Image from "next/image";
// import SplitText from "../components/SplitText";
// import { useState } from 'react';

// export default function Home() {
//   const [key, setKey] = useState(0);
//   const handleAnimationComplete = () => {
//     setTimeout(() => {
//       setKey(prev => prev + 1);
//     }, 2000);
//   };

//   return (
//     <>
//       <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-10'>
//         <h1 className='text-center font-bold text-[7vw] '>
//           <TextType
//             text={["Ali Zamaan",""]}
//             typingSpeed={75}
//             pauseDuration={1500}
//             showCursor
//             cursorCharacter="▎"
//             cursorClassName="text-blue-600"
//             deletingSpeed={50}
//             loop={true}
//             cursorBlinkDuration={0.5}
//           />
//         </h1>
        
//         <div className='flex justify-between space-x-10 items-center py-6 px-10 bg-white shadow-xl rounded-2xl mx-10 mt-10'>
//           <div className="w-[500px] h-[500px] rounded-full border-10 shadow-2xl border-blue-500 overflow-hidden flex-shrink-0 ">
//             <Image
//               src="/profile_img.png"
//               alt="Profile image"
//               width={500}
//               height={500}
//               className="object-cover w-full h-full"
//             />
//           </div>
          
//           <div className="">
//             <SplitText
//               key={key}
//               text="Python Engineer | Full Stack Developer | Data Extraction | Web Scraping"
//               className="text-[4vw] font-semibold text-slate-800"
//               delay={50}
//               duration={1.25}
//               ease="power3.out"
//               splitType="chars"
//               from={{ opacity: 0, y: 40 }}
//               to={{ opacity: 1, y: 0 }}
//               threshold={0.1}
//               rootMargin="-100px"
//               textAlign="center"
//               onLetterAnimationComplete={handleAnimationComplete}
//               showCallback
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }