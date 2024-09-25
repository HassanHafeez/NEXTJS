'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from "@/app/NAV_LINKS";
import { Roboto } from 'next/font/google';
import { Plus_Jakarta_Sans } from 'next/font/google';
import styles from './Navbar.module.css'; // Import the CSS module

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: '500',
  subsets: ['latin'],
});

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
});

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${isSidebarOpen ? 'open' : ''}`}>
        {/* Logo and Heading */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={30} height={40} />
          </Link>
          <Link href="/">
            <h2 className={plusJakartaSans.className} style={{ fontSize: '20px' }}>
              Pictures.Pk
            </h2>
          </Link>
        </div>

        {/* Conditional Rendering */}
        {isSidebarOpen ? (
          <h1 className={`${styles.navbarHeading} ${plusJakartaSans.className}`}>Picture.PK</h1>
        ) : (
          <>
            {/* Navigation links */}
            <ul className="hidden lg:flex gap-4 items-center ml-8">
              {NAV_LINKS.map((link) => (
                <li key={link.key} className={roboto.className}>
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="hidden lg:flex items-center space-x-4 ml-auto">
              <button className={styles.flatButton}>Login</button>
              <button className={styles.button}>Sign Up</button>
            </div>
          </>
        )}

        {/* Menu button for small screens */}
        <div className="flex lg:hidden items-center space-x-2">
          <button className={styles.button} onClick={toggleSidebar}>Menu</button>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
        <div className="p-4 flex justify-between items-center">
          <button className="text-gray-800 font-bold text-xl" onClick={toggleSidebar}>
            &times;
          </button>
          <span className="font-bold text-xl">Menu</span>
        </div>
        <ul className="mt-6 space-y-4 px-4">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        
        {/* Login and Sign Up Buttons in Sidebar */}
        <div className="mt-6 px-4">
          <Link href="/login">
            <button className={styles.flatButton} style={{ width: '100%' }}>Login</button>
          </Link>
          <Link href="/signup">
            <button className={styles.button} style={{ width: '100%' }}>Sign Up</button>
          </Link>
        </div>
      </div>
    </>
  );
}



