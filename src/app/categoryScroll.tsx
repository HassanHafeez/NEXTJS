'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CategoriesList.module.css';

const CategoryScroll = () => {
  const categories = [
    { categoryImage: { url: '/pic (1).jpg' } },
    { categoryImage: { url: '/pic (2).jpg' } },
    { categoryImage: { url: '/pic (3).jpg' } },
    { categoryImage: { url: '/pic (4).jpg' } },
    { categoryImage: { url: '/pic (5).jpg' } },
    { categoryImage: { url: '/pic (6).jpg' } },
    { categoryImage: { url: '/pic (7).jpg' } },
    { categoryImage: { url: '/pic (8).jpg' } },
  ];

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -250,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 250,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.categoriesContainer}>
      <h2 className={styles.categoriesHeading}>Popular Stock Footage Categories</h2>

      <div className={styles.scrollWrapper}>
        <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={scrollLeft}>&lt;</button>

        <div className={styles.categoriesList} ref={scrollContainerRef}>
          {categories.map((_, index) => (
            <Link
            href={`/${index}`} // Adjusted to use index for demo purposes
            className={styles.categoryLink}
            key={index}
          >
            <div className={styles.categoryCard}>
              <Image
                src={`/pic (${index + 1}).jpg`} // Dynamically set the image source
                alt={`Category ${index + 1}`}
                className={styles.categoryImage}
                width={300}
                height={200}
                layout="responsive"
              />
            </div>
          </Link>
          
          ))}
        </div>

        <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={scrollRight}>&gt;</button>
      </div>
    </div>
  );
};

export default CategoryScroll;
