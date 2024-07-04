"use client";
import React from 'react';
import { FaInstagram, FaYoutube, FaTwitter, FaIntercom  , } from 'react-icons/fa';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <footer className="bg-gray-900 p-4">
                <div className="container p-6 mx-auto">
                    <div className="lg:flex">
                        <div className="w-full -mx-6 lg:w-2/5">
                            <div className="px-6">
                                <Link href="#">
                                    <img className=" w-fit  h-fit p-4" src="/Logo.png" alt="Logo" />
                                </Link>

                                <p className="  px-6  pt-3 max-w-sm mt-2 text-gray-300 ">
                                Copyright @ 2020 Nexcent ltd.
                                All rights reserved
                                </p>

                                <div className="flex mt-6 -mx-4 text-white pl-5">
                                    <Link href="#" className="mx-4  transition-colors  text-white duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Instagram">
                                            <FaInstagram className=" w-8 h-7" />
                                        
                                    </Link>

                                    <Link href="#" className="mx-4  transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="YouFaYoutube">
                                            <FaYoutube className=" text-lg w-8 h-7" />
                                        
                                    </Link>

                                    <Link href="#" className="mx-4  transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="TwFaTwitter">
                                            <FaTwitter className=" w-8 h-7" />
                                        
                                    </Link>

                                    <Link href="#" className="mx-4  transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Intercom ">
                                            <FaIntercom  className=" w-8 h-7" />
                                        
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 lg:mt-0 lg:flex-1">
                            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                                <div className=' text-white'>
                                    <h3 className=" text-white text-2xl ">Companay</h3>
                                    <Link href="#" className="block mt-2 text-sm  hover:underline">About Us
                                    </Link>
                                    <Link href="#" className="block mt-2 text-sm  hover:underline">Blog
                                    </Link>
                                    <Link href="#" className="block mt-2 text-sm  hover:underline">Contact Us
                                    </Link>
                                    <Link href="#" className="block mt-2 text-sm  hover:underline">Pricing
                                    </Link>
                                    <Link href="#" className="block mt-2 text-sm  hover:underline">Testinomial
                                    </Link>
                                </div>

                                <div>
                                    <h3 className=" text-white text-2xl ">Support</h3>
                                    <Link href="#" className="block mt-2 text-white text-sm  hover:underline">Help center
                                    </Link>
                                    <Link href="#" className="block mt-2 text-white  text-sm  hover:underline">Term of service
                                    </Link>
                                    <Link href="#" className="block mt-2 text-white  text-sm  hover:underline">Legal
                                    </Link>
                                    <Link href="#" className="block mt-2 text-white  text-sm  hover:underline">Privacy policy
                                    </Link>
                                    <Link href="#" className="block mt-2 text-white  text-sm  hover:underline">Status
                                    </Link>
                                </div>

                               

                                <div className=' text-white flex justify-center items-center flex-col'>
                                    <h3 className=" text-2xl  ">Stay up to date</h3>
                                    <Input placeholder="Your email address here" className= "placeholder:px-10  placeholder:py-2 placeholder:bg-gray-500   placeholder:text-center placeholder:text-gray-200 bg-gray-500 pr-9"  />

                                   
                                </div>
                            </div>
                        </div>
                    </div>

                   
                </div>
            </footer>
        </>
    );
}
