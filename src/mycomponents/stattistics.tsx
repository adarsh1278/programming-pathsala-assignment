// components/Statistics.tsx
"use client"
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { CountUp } from 'countup.js';
export default function Stastic()

{
  const membersRef = useRef<HTMLSpanElement>(null);
  const clubsRef = useRef<HTMLSpanElement>(null);
  const bookingsRef = useRef<HTMLSpanElement>(null);
  const paymentsRef = useRef<HTMLSpanElement>(null);

  const { ref, inView } = useInView({
    // triggerOnce: true,
    threshold: 0.01,
  });

  useEffect(() => {
    if (inView) {
      const membersCountUp = new CountUp(membersRef.current!, 2245341);
      const clubsCountUp = new CountUp(clubsRef.current!, 46328);
      const bookingsCountUp = new CountUp(bookingsRef.current!, 828867);
      const paymentsCountUp = new CountUp(paymentsRef.current!, 1926436);

      membersCountUp.start();
      clubsCountUp.start();
      bookingsCountUp.start();
      paymentsCountUp.start();
    }
  }, [inView]);

  return (
    <div ref={ref} className="p-8   bg-gray-50 dark:bg-black flex flex-col justify-center items-center sm:flex-row   py-11">
      <div className="   w-full sm:w-1/2  flex flex-col  justify-center ">
        <h2 className=" pl-16  py-2 font-semibold  text-5xl  text-start   text-gray-800 dark:text-white">Helping a local</h2>
        <h1 className="pl-16  py-1 font-semibold text-5xl  text-start text-green-600">buisness reinvent itself</h1>
         <p className=" pl-16 py-5 text-lg text-gray-400">We reached here with our hard work and dedication</p>
      </div>
      <div className=' w-full sm:w-1/2 flex flex-col'>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <img src="/Icon (4).png" alt="Members Icon" className="h-12 mb-2" />
          <span ref={membersRef} className="text-2xl font-bold text-green-500"></span>
          <p className="text-gray-600">Members</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="Icon (5).png" alt="Clubs Icon" className="h-12 mb-2" />
          <span ref={clubsRef} className="text-2xl font-bold text-green-500"></span>
          <p className="text-gray-600">Clubs</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/Icon (6).png" alt="Bookings Icon" className="h-12 mb-2" />
          <span ref={bookingsRef} className="text-2xl font-bold text-green-500"></span>
          <p className="text-gray-600">Event Bookings</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/Icon (7).png" alt="Payments Icon" className="h-12 mb-2" />
          <span ref={paymentsRef} className="text-2xl font-bold text-green-500"></span>
          <p className="text-gray-600">Payments</p>
        </div>
      </div>

      </div>
    </div>
  );
};

