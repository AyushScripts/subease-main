import Link from "next/link";
import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="px-5 py-8 flex w-full flex-row flex-wrap items-center justify-center  gap-y-6  border-t border-blue-gray-50 text-center md:justify-between">
      <h1 className="font-normal">&copy; SubEase</h1>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Link
            href="#features"
            className="font-normal transition-colors hover:underline focus:text-blue-500"
          >
            Features
          </Link>
        </li>
        <li>
        <Link
            href="#howitworks"
            className="font-normal transition-colors hover:underline focus:text-blue-500"
          >
            How It Works
          </Link>
        </li>
        <li>
        <Link
            href="#pricing"
            className="font-normal transition-colors hover:underline focus:text-blue-500"
          >
            Pricing
          </Link>
        </li>
      </ul>
      <SocialLinks className="w-6 h-6"/>
    </footer>
  );
};

export default Footer;
