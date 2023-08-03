import React from 'react';
import { Footer } from 'flowbite-react';
import { FacebookFilled, InstagramFilled, TwitterCircleFilled, GithubFilled } from '@ant-design/icons';

function FooterSection() {
  return (
    <div className="">
      <Footer className="bg-teal-900">
        <div className="w-full h-[50vh] flex flex-col items-start justify-between">
          <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
            <div className="text-white"> {/* Add text-white class here */}
              <Footer.Title title="Company" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">About</Footer.Link>
                <Footer.Link href="#">Careers</Footer.Link>
                <Footer.Link href="#">Brand Center</Footer.Link>
                <Footer.Link href="#">Blog</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="text-white"> {/* Add text-white class here */}
              <Footer.Title title="help center" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Discord Server</Footer.Link>
                <Footer.Link href="#">Twitter</Footer.Link>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link href="#">Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="text-white"> {/* Add text-white class here */}
              <Footer.Title title="legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Licensing</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="text-white"> {/* Add text-white class here */}
              <Footer.Title title="download" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">iOS</Footer.Link>
                <Footer.Link href="#">Android</Footer.Link>
                <Footer.Link href="#">Windows</Footer.Link>
                <Footer.Link href="#">MacOS</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          <div className="w-full bg-teal-900 px-4 py-6 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright by="TestInvite™" href="/" year={2023} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={FacebookFilled} />
              <Footer.Icon href="#" icon={InstagramFilled} />
              <Footer.Icon href="#" icon={TwitterCircleFilled} />
              <Footer.Icon href="#" icon={GithubFilled} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}

export default FooterSection;
