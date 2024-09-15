"use client";

import React, { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import GetStartedButton from "./GetStartedButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <header className="z-30 sticky top-0 transition-all duration-100 ease-out backdrop-blur-3xl">
      <nav className=" shadow-md px-4 lg:px-6 py-2.5 ">
        <div className="p-3 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              SubEase
            </h1>
          </Link>
          <div className="flex items-center lg:order-2">
            <div className="hidden lg:flex items-center gap-2 ">
              <ModeToggle />
              <GetStartedButton text="Get Started" size="default" />
            </div>
            <div className="lg:hidden ">
                <GetStartedButton size='sm' text="Get Started" />
            </div>
            <Button
              onClick={toggleMenu} // Call toggleMenu on button click
              type="button"
              className="inline-flex items-center p-2 ml-1 text-lg font-semibold bg-transparent text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded={isMenuOpen} // Update aria-expanded based on menu state
            >
              <RiMenu3Fill className="w-4" />
            </Button>
          </div>
          
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`} // Show menu based on isMenuOpen state
            id="mobile-menu-2"
          >
            
            <ul className="flex flex-col gap-5 lg:gap-0 mx-auto text-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href="#features"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:underline underline-offset-2 lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#howitworks"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:underline underline-offset-2 lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:underline underline-offset-2 lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Pricing
                </Link>
              </li>
              <li className="lg:hidden">
                <ModeToggle />
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;