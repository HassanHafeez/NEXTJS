import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import styles from './Hero.module.css'; // Import your CSS module

// Sofadi One

import { Plus_Jakarta_Sans } from 'next/font/google';
import { Sofadi_One, Playfair_Display } from 'next/font/google'; // Add Sofadi One font import

const plusJakartaSans = Plus_Jakarta_Sans({
    weight: '400',
    subsets: ['latin'],
    style: ['normal'] 
  });

// const sofadiOne = Sofadi_One({
//     subsets: ['latin'],
//     weight: '400', // Sofadi One typically has one weight
//   }); 

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
    weight: '400', // We set the desired weight to 600
    style: ['italic'], // Italic style
  });  



function Hero() {
  return (
<>
    <Navbar/>
    <div className={styles.hero}>
      <div>
      <p className={`${styles.roundedBorder}`}>Get free 10+ daily Images</p>

        <h1 className={plusJakartaSans.className}>Unveil the Hidden Treasures and <br/> Majestic Landscapes of 
        <span
          className={playfairDisplay.className}
          style={{
            color: '#02bb50',
            letterSpacing: '-1.2px',
            }}
        >
        Pakistan.
         </span>


         </h1>

        <p>A Journey Through Culture, Nature, and Adventure Awaits</p>
        <button className={styles.ctaButton}>Button Button</button>
      </div>
    </div>
</>
  );
}

export default Hero;
