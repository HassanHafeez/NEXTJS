import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './guide.module.css'; // Import your CSS module

const Guide = () => {
  return (
    <section className="flex flex-col items-center">
      {/* Main container */}
      <div className="w-full max-w-screen-xl px-6 pb-24">
        {/* Header section */}
        <p className={`uppercase text-sm mb-1 text-green-700 ${styles.fadeInUp}`}>
          We are here for you
        </p>

        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className={`font-bold text-3xl lg:text-5xl xl:max-w-[510px] leading-tight ${styles.fadeInUp}`}>
            Bring Your Stories to Life with Captivating Stock Images
          </h2>
          <p className={`text-base text-gray-500 xl:max-w-[520px] ${styles.fadeInUp}`}>
            Only with the Picture.Pk application, you can now enhance your adventures with stunning stock pictures, bringing every moment to life. Whether you're exploring the wilderness, crossing valleys, or capturing the beauty of mountain peaks, our app lets you share and relive your experiences with breathtaking visuals. Invite your friends, family, and loved ones to join in on the journey!
          </p>
        </div>
      </div>

      {/* Image section */}
      {/* <div className="relative w-full max-w-screen-xl">
        <Image 
          src="/boat.png" 
          alt="Boat" 
          width={1440} 
          height={580} 
          className="w-full h-auto object-cover object-center 2xl:rounded-3xl"
        />

      </div> */}
    </section>
  );
};

export default Guide;
