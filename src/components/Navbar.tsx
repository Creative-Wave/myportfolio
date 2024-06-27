import { useEffect, useState } from "react";
import Link from "next/link";
import Darkswitch from "./Darkswitch";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust the scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="relative">
      <div
        className={`fixed left-0 w-full z-30 px-6 md:px-12 lg:px-24 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-400/30 backdrop-blur-md backdrop-filter"
            : "bg-transparent"
        }`}>
        <div className="w-full h-[10dvh] flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-xl md:text-2xl font-medium">
            <Link href="/">
              Creative<span className="font-black">Way</span>
            </Link>
          </div>
          {/* Links Section for Desktop */}
          <div className="hidden md:flex justify-start items-center gap-6 lg:gap-10 font-bold -translate-x-12">
            <Link
              className="border-b-2 border-transparent hover:border-black dark:hover:border-white transition duration-300"
              href="/">
              Home
            </Link>
            <Link
              className="border-b-2 border-transparent hover:border-black dark:hover:border-white transition duration-300"
              href="/about">
              About
            </Link>
            <Link
              className="border-b-2 border-transparent hover:border-black dark:hover:border-white transition duration-300"
              href="/work">
              Work
            </Link>
            <Link
              className="border-b-2 border-transparent hover:border-black dark:hover:border-white transition duration-300"
              href="https://drive.google.com/file/d/1RYQz_83lEfPoYjN7_dALB3dNNzkyjGwn/view?usp=sharing">
              Resume
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          {/* Dark Mode Switch for Desktop */}
          <div className="hidden md:block">
            <Darkswitch />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-900 z-50 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex flex-col p-4 gap-4 font-bold">
          {/* Dark Mode Switch for Mobile */}
          <div className="md:hidden fixed top-4 left-5 z-50">
            <Darkswitch />
          </div>
          <button
            onClick={toggleMobileMenu}
            className="self-end mb-6 text-xl text-gray-600 dark:text-gray-300">
            &times;
          </button>
          <Link className="mt-4 text-right" href="/">
            Home
          </Link>
          <Link className="mt-4 text-right" href="/about">
            About
          </Link>
          <Link className="mt-4 text-right" href="/work">
            Work
          </Link>
          <Link
            className="mt-4 text-right"
            href="https://drive.google.com/file/d/1RYQz_83lEfPoYjN7_dALB3dNNzkyjGwn/view?usp=sharing">
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
