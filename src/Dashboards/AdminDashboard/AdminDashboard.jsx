import React, { useEffect, useState } from 'react';
import { Dropdown, Navbar, Avatar, Sidebar } from 'flowbite-react';
import { HiChartPie, HiExclamationCircle, HiClipboardList, HiUser, HiLocationMarker, HiQuestionMarkCircle, HiRefresh,HiHome, HiFire,HiCurrencyDollar, HiDotsCircleHorizontal } from 'react-icons/hi';
import {Badge,Result,Button} from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons';
import news1 from '../../assets/news1.svg';
import Home from './Home';
import QuestionBank from './QuestionBank';
import Tests from './Tests';
import Users from './Users';
import CenterRequests from './CenterRequests';
import FeeVerification from './FeeVerification';
import Attendance from './Attendance';
import TestCenters from './TestCenters';
import { Link } from 'react-router-dom';


function AdminDashboard() {
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [numofrequests, setNumofrequests] = useState(10);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const [content, setContent] = useState(<Home />);
    useEffect(() => {

        if (window.location.pathname === '/admin/questionbank') {
            setContent(<QuestionBank />)
        }
        else if (window.location.pathname === '/admin/tests') {
            setContent(<Tests />)
        }
        else if (window.location.pathname === '/admin/users') {
            setContent(<Users />)
        }
        else if (window.location.pathname === '/admin/centerrequests') {
            setContent(<CenterRequests />)
        }
        else if (window.location.pathname === '/admin/feeVerification') {
            setContent(<FeeVerification />)
        }
        else if (window.location.pathname === '/admin/attedance') {
            setContent(<Attendance />)
        }
        else if (window.location.pathname === '/admin/testcenters') {
            setContent(<TestCenters />)
        }
        else if (window.location.pathname === '/admin') {
            setContent(<Home />)
        }

        else {
            setContent(
                <Link to='/admin'>
                <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button danger icon={<ArrowLeftOutlined />} >Back Home</Button>}
  />
    </Link>
            )
        }





    }, [window.location.pathname])
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 768) {
                setSidebarVisible(false);
            } else {
                setSidebarVisible(true);
            }
        });
    }, []);


    return (
        <div className="flex  ">
            {/* Sidebar */}
            {sidebarVisible && (
                <Sidebar aria-label="Admin dashboard" className="w-64 h-screen  ">
                    <div


                    >
                        <Sidebar.Logo href="/admin" img={news1} imgAlt="Flowbite logo"
                            className=' '
                        >
                            <p>Test Invite</p>
                        </Sidebar.Logo>

                    </div>

                    <Sidebar.Items
                    className='mt-[3em] '
                    >
                        <Sidebar.ItemGroup
                        
                        >
                            <Sidebar.Item
                            className='hover:bg-teal-900 hover:text-white'
                            href="/admin" icon={ HiHome }>
                                <p>Home</p>
                            </Sidebar.Item>
                            <Sidebar.Item
                            className='hover:bg-teal-900 hover:text-white'
                            href="/admin/questionbank" icon={ HiQuestionMarkCircle}>
                                <p>Question Bank</p>
                            </Sidebar.Item>
                            <Sidebar.Item 
                            className='hover:bg-teal-900 hover:text-white'
                            href="/admin/tests" icon={HiClipboardList}>
                                <p>Tests</p>
                            </Sidebar.Item>
                            <Badge.Ribbon text={numofrequests} color="red">
                            <Sidebar.Item
                            className='hover:bg-teal-900 hover:text-white'
                            href="/admin/centerrequests" icon={HiExclamationCircle}>
                               
                                <p>Center Requests</p> 
                                
                            </Sidebar.Item>
                            </Badge.Ribbon>
                            <Sidebar.Item 
                            className='hover:bg-teal-900 hover:text-white'
                            href="/admin/feeVerification" icon={HiCurrencyDollar}>
                                <p>Fee Verification</p>
                            </Sidebar.Item>
                            <Sidebar.Item 
                            className='hover:bg-teal-900 hover:text-white'
                            href="/admin/attedance" icon={HiChartPie}>
                                <p>Attendance</p>
                            </Sidebar.Item>
                            <Sidebar.Item 
                            className='hover:bg-teal-900 hover:text-white'
                            href="/admin/testcenters" icon={HiLocationMarker}>
                                <p>Test centers</p>
                            </Sidebar.Item>
                            <Sidebar.Item 
                            className='hover:bg-teal-900 hover:text-white'
                            href="/admin/users" icon={HiUser}>
                                <p>Users </p>
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                        
                    </Sidebar.Items>
                </Sidebar>
            )}

            
            <div className="flex flex-col flex-1 h-screen">
                {/* Navbar */}
                <Navbar fluid rounded className="bg-teal-900 text-white">
                    <div className="flex flex-row md:order-2  ">
                        {/* Profile Avatar */}


                        {/* Dropdown */}
                        <Dropdown inline label={<Avatar
                            alt="User profile"
                            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            rounded
                        />}>
                            <Dropdown.Header>
                                <div>
                                    <span className="block text-sm">Bonnie Green</span>
                                    <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                                </div>
                            </Dropdown.Header>
                            <Dropdown.Item>Dashboard</Dropdown.Item>
                            <Dropdown.Item>Settings</Dropdown.Item>
                            <Dropdown.Item>Earnings</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Sign out</Dropdown.Item>
                        </Dropdown>
                    </div>
                    {/* Sidebar Toggle Button */}
                    <div>
                        <button
                            onClick={toggleSidebar}
                            className="md:hidden px-2 py-1 ml-2 border rounded focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {!sidebarVisible ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                </Navbar>

                {/* Main Content Area */}

                {
                    content
                }

            </div>
        </div>
    );
}

export default AdminDashboard;
