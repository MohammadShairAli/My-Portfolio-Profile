'use client';

import TextType from './TextType';
import Image from "next/image";
import SplitText from "./SplitText";
import { useState } from 'react';

export default function Landingpage() {
  const [key, setKey] = useState(0);
  const handleAnimationComplete = () => {
    setTimeout(() => {
      setKey(prev => prev + 1);
    }, 2000);
  };

  return (
    <>
    <div className=" w-full overflow-x-hidden">

  <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 py-10 px-4 sm:px-6 md:px-10 bg-gray-100 shadow-2xl w-full">
    
    {/* Image */}
    <div className="flex-shrink-0 w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-[500px] lg:h-[500px] rounded-full border-4 border-gray-400 overflow-hidden">
      <Image
        src="/profile_img.png"
        alt="Profile image"
        width={500}
        height={500}
        className="object-cover w-full h-full"
      />
    </div>

    {/* Text */}
    <div className="flex-1 max-w-full text-center md:text-left break-words whitespace-normal">
       <h1 className="text-center font-bold text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[10vw]">
    <TextType
      text={["Ali Zamaan", ""]}
      typingSpeed={75}
      pauseDuration={1500}
      showCursor
      cursorCharacter="▎"
      cursorClassName="text-black"
      deletingSpeed={50}
      loop={true}
      cursorBlinkDuration={0.5}
    />
  </h1>
  <h1>
    <SplitText
    key={key}
    text="Python Engineer | Full Stack Developer | Data Extraction | Web Scraping"
    className="text-[clamp(1rem,4vw,2rem)] sm:text-[clamp(1.2rem,3.5vw,2.5rem)] md:text-[clamp(1.5rem,3vw,3rem)] lg:text-[3.97vw] font-semibold break-words whitespace-normal"
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
  </h1>
</div>

  </div>
</div>

    </>
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