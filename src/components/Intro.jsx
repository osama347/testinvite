import { Button } from 'flowbite-react';
import React from 'react';
import intropic from '../assets/onlinetest.svg';

function Intro() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full md:mt-200px p-4 md:p-10 bg-teal-700 bg-opacity-80 ">
      <div className="flex flex-col justify-center items-start w-full md:w-[40vw] mt-20  mx-auto p-4 md:p-10 text-white ">
        <h1 className="text-4xl md:text-5xl font-semibold mb-5">What is TestInvite?</h1>
        <p className="text-lg md:text-xl mb-5">
          TestInvite is a comprehensive assessment platform for organizations to develop high-quality tests that can validate knowledge and measure various aspects of individuals. It allows you to administer tests online, with security features like lockdown browser and real-time monitoring & proctoring.
        </p>
        <Button className="bg-red-500 text-white hover:bg-blue-700 hover:text-white">Learn More</Button>
        <h2 className="text-4xl md:text-5xl font-semibold mb-5 mt-10">Who uses TestInvite?</h2>
        <p className="text-lg md:text-xl mb-5">
          TestInvite is used by thousands of organizations such as non-profits, professional associations, businesses, learning and development institutions, and corporate academies from 80+ countries.
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold mb-5 mt-10">Use Cases</h2>
        <h4 className="text-lg md:text-xl mb-5">Select your use-case to learn more </h4>
        <ul className="text-lg md:text-xl mb-5 text-blue-700 cursor-pointer">
          <li><a href="#">Learning assessment</a></li>
          <li><a href="#">Certification assessment</a></li>
          <li><a href="#">Hiring assessment</a></li>
        </ul>
      </div>

      <div className="md:ml-10">
        <img
          src={intropic}
          alt=""
          className="w-full md:w-[40vw] h-auto md:h-[500px] mx-auto md:mr-10"
        />
      </div>
    </div>
  );
}

export default Intro;
