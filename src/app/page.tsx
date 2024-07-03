import React from 'react';
import Carousel from '@/mycomponents/imgCrouser';
import Client from '@/mycomponents/client';
import Community from '@/mycomponents/community/communit';
import UnlockSection from '@/mycomponents/unlockSection';
export default function Home(){
  const items = [
    {
      image: "/home1.png",
      heading: "Lessons and insights",
      subheading: "from 8 years",
      description: "Where to grow your business as a photographer: site or social media?",
      url: "/home1.png"
    },
    {
      image: "/home1.png",
      heading: "Mastering Photography",
      subheading: "complete guide",
      description: "Learn the art of capturing stunning photographs with our comprehensive guide.",
      url: "/home1.png"
    },
    {
      image: "/home1.png",
      heading: "Advanced Techniques",
      subheading: "For professional s",
      description: "Explore advanced techniques to take your photography skills to the next level.",
     url: "/home1.png"
    },
    {
      image: "/home1.png",
      heading: "Lighting and Composition",
      subheading: "Essentials for shoot",
      description: "Discover the secrets of perfect lighting and composition in photography.",
       url: "/home1.png"
    },
  ];
  return (
    <div >
      <Carousel items={items} />
       <Client/>
       <Community/>
       <UnlockSection/>
    </div>
  );
};


