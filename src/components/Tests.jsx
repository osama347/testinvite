import React from 'react';
import test1 from '../assets/news1.svg';
import test2 from '../assets/news2.svg';
import test3 from '../assets/news3.svg';
import test4 from '../assets/news4.svg';
import test5 from '../assets/news5.svg';
import { Card,Badge } from 'flowbite-react';
import { CalendarFilled,HomeFilled,ClockCircleFilled } from '@ant-design/icons';

function Tests() {
    const upcomingTests = [
        { 
          title: 'Test 1', 
          imageUrl: test1, 
          description: 'This is the description for Test 1.',
          calendar: [
            { 
              date: '2023-08-10',
              startTime: '10:00 AM',
              endTime: '12:00 PM',
              testCenter: 'ABC Test Center',
            },
            { 
              date: '2023-08-15',
              startTime: '2:00 PM',
              endTime: '4:30 PM',
              testCenter: 'XYZ Test Center',
            },
            // Add more calendar events for Test 1 as needed
          ]
        },
        { 
          title: 'Test 2', 
          imageUrl: test2, 
          description: 'This is the description for Test 2.', 
          calendar: [
            { 
              date: '2023-08-20',
              startTime: '9:30 AM',
              endTime: '11:00 AM',
              testCenter: 'PQR Test Center',
            },
            { 
              date: '2023-08-25',
              startTime: '1:00 PM',
              endTime: '3:00 PM',
              testCenter: 'LMN Test Center',
            },
            // Add more calendar events for Test 2 as needed
          ]
        },
        { 
          title: 'Test 3', 
          imageUrl: test3, 
          description: 'This is the description for Test 3.', 
          calendar: [
            { 
              date: '2023-08-30',
              startTime: '11:00 AM',
              endTime: '1:30 PM',
              testCenter: 'EFG Test Center',
            },
            // Add more calendar events for Test 3 as needed
          ]
        },
        { 
          title: 'Test 4', 
          imageUrl: test4, 
          description: 'This is the description for Test 4.', 
          calendar: [
            { 
              date: '2023-09-05',
              startTime: '3:00 PM',
              endTime: '5:00 PM',
              testCenter: 'LMN Test Center',
            },
            // Add more calendar events for Test 4 as needed
          ]
        },
        { 
          title: 'Test 5', 
          imageUrl: test5, 
          description: 'This is the description for Test 5.', 
          calendar: [
            { 
              date: '2023-09-10',
              startTime: '10:30 AM',
              endTime: '12:00 PM',
              testCenter: 'ABC Test Center',
            },
            // Add more calendar events for Test 5 as needed
          ]
        },
      ];
      
  return (
    <div className="dark:bg-gradient-to-br dark:from-teal-900 dark:to-blue-900">
      <header className="py-8 text-center bg-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Upcoming Tests</span>
          </h1>
        </div>
      </header>
      <main className="container mx-auto py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {upcomingTests.map((test, index) => (
            <Card imgAlt="Meaningful alt text for an image that is not purely decorative" key={index} 
           
            >
              {/* Apply the Tailwind CSS classes to the image */}
              <img src={test.imageUrl} alt={test.title} className="h-48 w-full object-contain" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>{test.title}</p>
              </h5>
              

              <div className="flex flex-col gap-2">
                {test.calendar.map((event, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Badge icon={CalendarFilled }
                    
                    >
                      {event.date}
                    </Badge>
                    <Badge icon={ClockCircleFilled   }>
                    <span className="text-gray-600 dark:text-gray-400">
                      {event.startTime} - {event.endTime}
                    </span>
                    </Badge>
                    <Badge icon={HomeFilled  }>
                      {event.testCenter}
                    </Badge>
                  </div>
                ))}
              </div>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {test.description}
              </p>
              <a href="signin" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-3xl bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-900">
                Apply Now
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Tests;

