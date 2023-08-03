import React from 'react';
import { Card } from 'flowbite-react';

function Intro2() {
  return (
    <div className="flex flex-col justify-start items-center w-full min-h-screen bg-[#F5F5F5]">
      <div className="flex flex-col justify-center items-center w-full h-[300px] mt-5">
        <h2 className="text-4xl font-bold text-center">Hassle-free assessments</h2>
        <p className="text-xl font-normal text-center mt-5">
          Overcome the challenges preventing you from wasting time, obtaining
        </p>
        <p className="text-xl font-normal text-center">
          reliable results and making your assessment a success.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap mt-9 justify-center gap-9  ">
        <Card className="w-full md:w-[280px] h-[340px] p-2 rounded-3xl ">
          <h5 className="text-xl font-semibold tracking-tight text-teal-900 dark:text-white mt-0">
            <p>Preview and control</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Ensure your test functions as expected any moment during the development of it including every feature and configuration.
          </p>
        </Card>
        <Card className="w-full md:w-[280px] h-[340px] p-2 rounded-3xl">
          <h5 className="text-xl font-semibold tracking-tight text-teal-900 dark:text-white mt-0">
            <p>Batch Import tools</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Use bulk import and update tools to save time and prevent mistakes while creating and updating test questions, test pages and candidates.
          </p>
        </Card>
        <Card className="w-full md:w-[280px] h-[340px] p-2 rounded-3xl">
          <h5 className="text-xl font-semibold tracking-tight text-teal-900 dark:text-white mt-0">
            <p>Real-time control</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Take full control of your assessment process with real-time monitoring tools and act accordingly in time basing on informed decisions.
          </p>
        </Card>
        <Card className="w-full md:w-[280px] h-[340px] p-2 rounded-3xl">
          <h5 className="text-xl font-semibold tracking-tight text-teal-900 dark:text-white mt-0">
            <p>Expert Support</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Receive assistance from an expert team throughout the assessment process to maximize the benefits of the provided tools and minimize risks.
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Intro2;
