"use client";
import React from 'react';
import Image from 'next/image';
import BlurFade from "@/components/ui/blur-fade";
import { useRouter } from 'next/navigation'; // Update import to use next/navigation

// Generate image URLs with dimensions
const images = Array.from({ length: 45 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return {
    url: `https://picsum.photos/seed/${i + 1}/${width}/${height}`,
    width,
    height
  };
});

function PictureSection() {
  const router = useRouter(); // Initialize the router

  // Click handler for the button
  const handleSeeMoreClick = () => {
    router.push('/PicturesPage'); // This should match your directory structure
  };
  

  return (
    <section id="photos" className='ml-16 mr-12 mb-16'>
      <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, fontSize: '28px', lineHeight: '42px', color: 'rgb(51, 51, 51)' }}>
        <h1 className="mb-8">
          Feature Images
        </h1>
      </div>

      <div className="columns-2 gap-4 sm:columns-3">
        {images.map((image, idx) => (
          <BlurFade key={image.url} delay={0.25 + idx * 0.05} inView>
            <Image
              className="mb-4 size-full rounded-lg object-contain"
              src={image.url}
              alt={`Random stock image ${idx + 1}`}
              width={image.width}
              height={image.height}
            />
          </BlurFade>
        ))}
      </div>

      <div className="flex justify-center items-center mt-8 relative">
        {/* White Overlay */}
        <div className="absolute inset-0 bg-white opacity-80"></div>
      </div>
    </section>
  );
}

export default PictureSection;
