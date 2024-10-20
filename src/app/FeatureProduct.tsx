"use client"; // This line makes the component a client component

import React, { useState } from 'react';
import Image from 'next/image';
import { CiHeart } from "react-icons/ci";

const products = [
  {
    id: 1,
    image: '/path/to/image1.jpg', // Replace with your image paths
    title: 'Product 1',
    description: 'This is a great product.',
  },
  {
    id: 2,
    image: '/path/to/image2.jpg',
    title: 'Product 2',
    description: 'This product is amazing.',
  },
  {
    id: 3,
    image: '/path/to/image3.jpg',
    title: 'Product 3',
    description: 'You will love this product.',
  },
  {
    id: 4,
    image: '/path/to/image4.jpg',
    title: 'Product 4',
    description: 'An awesome product for you.',
  },
  // Add more products as needed
];

const placeholderImage = '/path/to/placeholder.jpg'; // Replace with your placeholder image path

function FeatureProduct() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> {/* Adjusted grid classes */}
        {products.map((product) => {
          const [imgSrc, setImgSrc] = useState(product.image);

          return (
            <div key={product.id} className="m-2 max-w-xs mx-auto border border-gray-300 rounded-lg overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl transform hover:scale-105"> {/* Added margin here */}
              <Image 
                src={imgSrc} // Use the state for the image source
                alt={product.title} 
                width={400} 
                height={250} 
                className="w-full h-48 object-cover" // Adjusted height for the image
                onError={() => setImgSrc(placeholderImage)} // Update the state if there's an error
              />
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{product.title}</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200">Shop Now</button>
                  <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-200">Add to Cart</button>
                  <div className="relative group">
  <span className="text-green-500 cursor-pointer">
    <CiHeart className="w-8 h-8" /> {/* Adjust size here */}
  </span>
  <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-16 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
    Add to Wishlist
  </span>
</div>


                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeatureProduct;
