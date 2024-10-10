'use client';
import React from 'react';
import Image from 'next/image';
import AvatarCircles from '@/components/ui/avatar-circles';
import WordRotate from '@/components/ui/word-rotate';




import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";


const avatarUrls = [
    "https://avatars.githubusercontent.com/u/16860528",
    "https://avatars.githubusercontent.com/u/20110627",
    "https://avatars.githubusercontent.com/u/106103625",
    "https://avatars.githubusercontent.com/u/59228569",
  ];


const data = [
    {
        img: "/user_ (1).jpg",
        title: "Artist",
        name: "Vanessa Martinez",
        bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis labore provident non tempora odio est sunt, ipsum",
    },
    {
        img: "/user_ (2).jpg",
        title: "Creator",
        name: "Sarah Bowen",
        bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis labore provident non tempora odio est sunt, ipsum",
    },
    {
        img: "/user_ (3).jpg",
        title: "Photographer",
        name: "David Murphy",
        bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis labore provident non tempora odio est sunt, ipsum",
    },
    {
        img: "/user_ (4).jpg",
        title: "Photographer",
        name: "Kelsey West",
        bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis labore provident non tempora odio est sunt, ipsum",
    },
    {
        img: "/user_ (5).jpg",
        title: "Wildlife Photographer",
        name: "Selena Mullins",
        bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis labore provident non tempora odio est sunt, ipsum",
    },
    {
        img: "/user_ (6).jpg",
        title: "Naturalist",
        name: "Nadia Wright",
        bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis labore provident non tempora odio est sunt, ipsum",
    },
];

function CardCarousel() {
    return (
        <>
            
    <div className=" m-auto flex flex-col md:flex-row  my-4 relative">
    
            
        <div className="w-full md:w-1/4 p-4 flex flex-col items-center justify-center text-center bg-[#01411c] rounded-lg ">
            <p className="text-white mb-4 text-sm md:text-base">
            Become a Top Contributor and Share Your Talent with the World!
            </p>

            <WordRotate
            className="text-2xl md:text-3xl font-bold text-white tracking-wide mb-4"
            words={["Unlock Your Potential", "Showcase Your Talent"]}
            />



            <button className="bg-[#f4fcf7] text-black px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105">
            Join Us
            </button>
            <div className='mt-4'>
            <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
            </div>
        </div>





                <div className="w-full md:w-3/4 p-2 flex flex-wrap justify-between border-red">
                
                    <Carousel>
                        <CarouselContent>
                            {data.map((d, index) => (
                                <CarouselItem key={index} className="basis-1/3">
                                    
                                    <div className='bg-[#f4fcf7] h-[300px] w-full text-black rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 mb-2'>
                                    
                                        <div className='h-24 rounded-t-xl flex justify-center items-center relative'>
                                           
                                            <div className='w-20 h-20 rounded-full overflow-hidden flex justify-center items-center'>
                                              
                                                <Image
                                                    src={d.img}
                                                    alt="user-image"
                                                    width={80}
                                                    height={80}
                                                    className='object-cover'
                                                />
                                            </div>
                                        </div>

                                        <div className='flex flex-col justify-center items-center gap-2 p-3'>
                                            <p className='text-lg font-semibold'>{d.name}</p>
                                            <p className='text-sm text-gray-600'>{d.title}</p>
                                            <p className='text-sm text-black-600'>{d.bio}</p>
                                            <button
                                                style={{ backgroundColor: '#01411c', color: 'white' }}
                                                className='text-sm px-4 py-1 rounded-xl transform transition-transform duration-200 ease-in-out hover:scale-110'
                                            >
                                                View Profile
                                            </button>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
    </div>
        </>
    );
}

export default CardCarousel;
