"use client"; // This line makes the component a client component

import React, { useState } from 'react';
import Image from 'next/image';
import { CiHeart } from "react-icons/ci";

const products = [
  {
    id: 1,
    image: '/P1.png',
    title: 'SarSabaz Urea',
    description: 'Fatima Fertilizer Urea is a white, odorless, crystalline substance that is widely used in fertilizers and in the production of plastics, adhesives, and other industrial products. It is a natural product that is derived from the waste products of animals and is an important source of nitrogen in fertilizers.',
  },
  {
    id: 2,
    image: '/P2.png',
    title: 'D A P',
    description: 'SarSabaz Urea is a white, odorless, crystalline substance that is widely used in fertilizers and in the production of plastics, adhesives, and other industrial products. It is a natural product that is derived from the waste products of animals and is an important source of nitrogen in fertilizers.',
  },
  {
    id: 3,
    image: '/P3.jpg',
    title: 'Tomato Seed Gold Nugget Organic',
    description: 'An early, prolific, golden cherry tomato. 15-20 gm., round to slightly oval cherry tomatoes have a deep yellow color. The flavor is well-balanced and delicious, and a majority of the early fruits are seedless.',
  },
  {
    id: 4,
    image: '/P4.png',
    title: 'Baby Corn Seed',
    description: 'A sweet and tender baby corn variety, perfect for snacking and salads. Its sweet flavor and crunchy texture make it a great choice for grilling or boiling. 50-60 days to harvest.',
  },
  {
    id: 5,
    image: '/P5.jpeg',
    title: 'Red Tomato Seed',
    description: 'A delicious red tomato variety, perfect for slicing and salads. Its sweet-tart flavor and firm texture make it a great choice for snacking and cooking. Indeterminate variety, needs staking. 70-80 days to harvest.',
  },
  {
    id: 6,
    image: '/P6.png',
    title: 'Tomato Seed',
    description: 'ig yellow-white fruits with mild flavor. There are a number of heirloom “white” tomatoes, and Great White is the best. we have seen. The fruit is meaty with few seeds, a mild non-acid flavor, and creamy texture. ',
  },
  {
    id: 7,
    image: '/P7.png',
    title: 'Apple Gourd (Tinda)',
    description: 'Apple Gourd (Tinda) Selected Seeds approximately 40 seeds',
  },
  {
    id: 8,
    image: '/P8.jpg',
    title: 'Okra Seed Red Burgundy',
    description: 'It is a strong vigorous hybrid with a moderate side shoot development and narrow leaf type. It has a very easy setting ability, ',
  },
];

const placeholderImage = '/path/to/placeholder.jpg'; // Replace with your placeholder image path

function FeatureProduct() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> {/* Increased gap for better spacing */}
        {products.map((product) => {
          const [imgSrc, setImgSrc] = useState(product.image);

          return (
            <div key={product.id} className="m-2 max-w-sm mx-auto border border-gray-300 rounded-lg overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl transform hover:scale-105"> {/* Reduced max-w size */}
              <div className="flex items-center justify-center h-48 bg-gray-100"> {/* Center images vertically */}
                <Image 
                  src={imgSrc} 
                  alt={product.title} 
                  height={200} // Fixed height
                  width={200} // Fixed width to ensure consistent size
                  className="object-contain" // Keeps the aspect ratio of the image
                  onError={() => setImgSrc(placeholderImage)}
                />
              </div>
              <div className="p-4 bg-white flex flex-col justify-between" style={{ minHeight: '230px' }}> {/* Set min height for consistent card size */}
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 overflow-hidden text-ellipsis whitespace-nowrap" style={{ maxHeight: '2.5rem' }}>{product.title}</h3>
                  <p className="text-gray-700 mb-4 overflow-hidden text-ellipsis" style={{ maxHeight: '4.5rem', overflow: 'hidden' }}>{product.description}</p>
                </div>
                <div className="flex justify-between items-center mt-auto"> {/* mt-auto pushes buttons to the bottom */}
                  <button className="bg-green-500 text-white py-2 px-3 rounded-lg hover:bg-green-600 transition duration-200">Shop Now</button>
                  <button className="bg-gray-200 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-300 transition duration-200">Add to Cart</button>
                  <div className="relative group">
                    <span className="text-green-500 cursor-pointer">
                      <CiHeart className="w-8 h-8" />
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
