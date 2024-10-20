import React from 'react';
import Navbar from './Navbar';
import styles from './Hero.module.css'; // Import your CSS module

// Importing fonts
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
    weight: '400',
    subsets: ['latin'],
    style: ['normal'] 
});

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: '400',
    style: ['italic'], 
});  

function Hero() {
    return (
        <>
            <Navbar />
            <div className={styles.hero}>
                <div className={styles.content}>
                    <h1 className={`${plusJakartaSans.className} ${styles.heroTitle}`}>
                        Empowering Farmers with the Latest Tools, Seeds, and Solutions for a Prosperous Harvest.
                    </h1>
                    <p className={`${styles.heroSubtitle}`}>
                        Providing innovative, high-quality agricultural products to help your farm flourish.
                    </p>
                    <div className={styles.buttonContainer}>
                        <button className={`${styles.ctaButton} ${styles.exploreButton}`}>Explore More</button>
                        <button className={`${styles.ctaButton}  ${styles.learnButton}`}>Learn More</button>
                    </div>
                    <p className={styles.secondaryCta}>
                        Join us in revolutionizing agriculture today!
                    </p>
                </div>
            </div>
        </>
    );
}

export default Hero;
