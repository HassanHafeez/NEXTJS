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
        <p className={`uppercase text-sm mb-3 text-green-700 ${styles.fadeInUp}`}>
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
      <div className="relative w-full max-w-screen-xl">
        <Image 
          src="/boat.png" 
          alt="Boat" 
          width={1440} 
          height={580} 
          className="w-full h-auto object-cover object-center 2xl:rounded-3xl"
        />

        {/* Overlay content */}
        <div className="absolute left-5 top-20 bg-white p-6 md:py-8 md:pl-5 md:pr-7 gap-3 rounded-3xl border shadow-md flex flex-col">
          <div className="mb-6">
            <div className="flex justify-between">
              <p className="text-gray-500 text-sm">PLANS</p>
              <p className="font-semibold text-green-500 text-sm">. . .</p>
            </div>
            <p className="font-bold text-xl mt-2">10 images/month</p>
            <p className="text-gray-500 text-sm">1000 PKR</p>
            <p className="font-bold text-xl mt-2">20 images/month</p>
            <p className="text-gray-500 text-sm">1500 PKR</p>
            <p className="font-bold text-xl mt-2">50+ images/month</p>
            <p className="text-gray-500 text-sm">2000 PKR</p>
            <Link href="/more-plans">
              <p className="font-semibold text-green-500 text-sm cursor-pointer">See More</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
