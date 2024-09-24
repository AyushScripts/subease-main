import React from "react";
import GetStartedButton from "./GetStartedButton";

const HeroSection = () => {
  return (
    <section className="py-8 md:py-16 lg:py-28">
      <div className="h-[50vh] container mx-auto flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 lg:px-28">
        <h1 className="heading-text mb-4">
          Take Control Of Your {' '}
          <span className="relative italic text-purple-500 dark:text-[#77A1D3]">
            Subscriptions
            
            
          </span>
          {' '}with Ease
        </h1>
        <p className="sm:text-lg md:text-xl lg:text-2xl font-light text-primary mb-8">
          SubEase is the ultimate subscription management tool, helping you stay
          on top of your recurring payments and never miss a beat.
        </p>
        <GetStartedButton text="Get Started Now" className="px-5 py-4"/>
      </div>
    </section>
  );
};

export default HeroSection;
