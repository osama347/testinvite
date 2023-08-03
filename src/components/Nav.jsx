import React from 'react';
import { Button, Navbar } from 'flowbite-react';
import reactLogo from '../assets/react.svg';
import { Link } from 'react-router-dom';




function Nav() {
 
  const handlestartclick = () => {
    console.log('start clicked');
  };



  return (
    <Navbar fluid rounded className="fixed top-0 left-0 w-full z-10 bg-white shadow-md">
      <Navbar.Brand href="/">
        <img
          alt="test invite logo"
          className="mr-3 h-6 sm:h-9"
          src={reactLogo}
        />
        <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
          TestInvite
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link to="/signup">
        <Button
          onClick={handlestartclick}
        >
          Get started
        </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active href="#">
          <p>
            Solutions
          </p>
        </Navbar.Link>
        <Navbar.Link href="#">
          Features 
        </Navbar.Link>
        <Navbar.Link href="#">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="#">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;
