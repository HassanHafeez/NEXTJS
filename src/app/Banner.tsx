import React from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";


const dataimg = [
  { img: "/story.jpg" },
  { img: "/pic (3).jpg" },
  { img: "/pic (4).jpg" },
];

function Banner() {
  return (
    <div className="max-w-7xl mx-auto p-10 my-10 border-2 border-500 rounded-lg">
      <div className="flex flex-col xl:flex-row justify-between">

{/* Div A with sections A to F */}

<div className="relative flex-1 h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl mx-4">


          <div className="grid grid-cols-3 gap-8">
            {['A', 'B', 'C', 'D', 'E', 'F'].map((item, index) => (
              <div
                key={item}
                className="border-2 border-500 p-0 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center h-40"
              >
                {index % 2 === 0 ? ( // Even index: A, C, E
                  <div className="relative h-full w-full">
                    <Image
                      src={dataimg[index / 2]?.img} // Get image from dataimg
                      alt={item}
                      layout="fill" // Use layout fill to cover the parent div
                      objectFit="cover" // Ensure the image covers the entire area
                      className="rounded-lg" // Image styling
                    />
                  </div>
                ) : ( // Odd index: B, D, F
                  <div className="bg-[#01411c] h-full w-full flex items-center justify-center rounded-lg"> {/* Rounded corners */}
                    <h2 className="text-2xl font-bold text-white text-center">
                      {index === 1 ? 'Nature' : index === 3 ? 'Explore' : 'Travel'}
                    </h2>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

{/* Div B */}
      
      <div className="relative flex-1 h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl mx-4">

      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        PICTURES
      </p>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>          
    </div>



  </div>
  );
}

export default Banner;
