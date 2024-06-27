import React from "react";
import { Facebook, Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 flex flex-col justify-between md:h-screen h-screen md:mt-0 mt-36 text-white">
      {/* Main Content */}
      <div className="flex-grow flex flex-col justify-center items-center py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* About Section */}
          <div className="md:w-1/3 w-full mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4">About Me</h2>
            <p className="">
              I am a passionate web developer and designer dedicated to creating
              intuitive and dynamic user experiences. Let's connect and build
              something great together!
            </p>
          </div>

          {/* Contact & Social Media */}
          <div className="md:w-1/3 w-full text-center md:text-right">
            <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-4">jayantaradebnath@gmail.com</p>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="text-2xl transition-colors duration-200">
                <Linkedin />
              </a>
              <a
                href="https://github.com"
                aria-label="GitHub"
                className="text-2xl transition-colors duration-200">
                <Github />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-2xl transition-colors duration-200">
                <Twitter />
              </a>
              <a
                href="mailto:contact@example.com"
                aria-label="Email"
                className="text-2xl transition-colors duration-200">
                <Mail />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-2xl transition-colors duration-200">
                <Facebook />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-4 border-t text-center mx-24">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
