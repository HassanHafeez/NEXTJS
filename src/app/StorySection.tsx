import Image from 'next/image';
import React from 'react';
import styles from './guide.module.css'; // Import your CSS module

const Guide = () => {
  return (
    <section className="flex flex-col items-center bg-gray-50 py-12">
      {/* Main container */}
      <div className="w-full max-w-screen-xl px-6 pb-16">
        {/* Header section */}
        <p className={`uppercase text-sm mb-2 text-green-700 font-semibold ${styles.fadeInUp}`}>
          Your Trusted Agricultural Partner
        </p>

        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className={`font-bold text-4xl lg:text-6xl xl:max-w-[570px] leading-tight text-gray-800 ${styles.fadeInUp}`}>
            Empowering Farmers with Quality Agricultural Solutions
          </h2>
          <p className={`text-lg text-gray-600 xl:max-w-[520px] ${styles.fadeInUp}`}>
            At Agri Shop, we are dedicated to enhancing the productivity and sustainability of farming practices. Our comprehensive range of high-quality seeds, fertilizers, and farming tools are designed to meet the diverse needs of farmers. Whether you're cultivating crops or nurturing gardens, Agri Shop provides you with the resources you need to thrive in the agricultural landscape. Join our community of passionate farmers and let us help you grow your success!
          </p>
        </div>
      </div>

      {/* Image section */}
      <div className="relative w-full max-w-screen-xl">
        <Image 
          src="/Banner.jpeg" // Update the image source as needed
          alt="Agri Shop Banner" 
          width={1440} 
          height={580} 
          className="w-full h-auto object-cover object-center rounded-lg shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out"
        />
      </div>
    </section>
  );
};

export default Guide;
