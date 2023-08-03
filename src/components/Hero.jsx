import React from 'react';
import { Button } from "flowbite-react";
import herosection from '../assets/hero.jpg';
import { Flowbite } from 'flowbite-react';

function Hero() {
  return (
    <div className='h-[60vh] flex justify-between p-4 my-[70px] items-center flex-wrap mx-[10px] md:mx-[50px] lg:mx-[100px]'>
      <div className='h-[60vh] flex justify-center items-center flex-col w-full md:w-[50%]'>
        <div className='flex flex-col justify-center items-start'>
          <h1 className='text-4xl font-bold text-[#1D1D1D] sm:text-3xl md:text-[35px] lg:text-4xl'>Revolutionize your</h1>
          <h1 className='text-4xl font-bold text-[#1D1D1D] sm:text-3xl md:text-[35px] lg:text-4xl'>assessments</h1>
          <p className='text-[#1D1D1D] text-xl sm:text-lg md:text-[20px] lg:text-xl mt-5'>
            Learn and implement the best practices for conducting your own custom assessments online.
          </p>
          <div className='flex justify-between items-center mt-5 gap-4'>
          <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-900">
                Book a demo
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Learn more
            </a>
          </div>
          <p className='text-[#1D1D1D] text-sm sm:text-xs md:text-[15px] lg:text-sm mt-5 font-sans'>
            JOIN 15,000+ ORGANIZATIONS
          </p>
        </div>
      </div>

      <div className="relative mt-10 md:mt-0 sm:mt-0 w-full md:w-[50%] lg:w-[40%]">
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-gray-400 opacity-20  sm:rounded-none sm:shadow-none rounded-2xl"></div>
        <img src={herosection} alt="hero image" className="z-10 shadow-2xl rounded-2xl w-full h-full sm:w-full sm:h-[450px] md:w-[540px] md:h-[360px] lg:w-[600px] lg:h-[400px] transform md:-translate-x-10 md:-translate-y-10 sm:transform-none" />
      </div>
    </div>
  );
}

export default Hero;
