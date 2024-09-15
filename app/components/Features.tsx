
import Image from "next/image";
import React from "react";
import { AiOutlinePieChart } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";

const Features = () => {
  return (
    <section id="features" className="w-full md:h-screen py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-muted">
      <div className="px-7 md:px-16 flex flex-col gap-5 md:gap-0 md:flex-row md:justify-between lg:flex-row">
        <div className="md:w-[50%] flex flex-col gap-5 md:gap-10"> {/* Left div */}
          <div className="flex flex-col gap-3 text-center md:text-left"> {/* Upper text div */}
            <h2 className="heading-text relative z-10"> {/* Set z-index for text */}
              Key {' '}
              <span className="relative inline-block">
                Features
                <div className="absolute left-0 bottom-0 w-full h-1/3 bg-text-underline -z-10"></div> {/* Set z-index for background */}
              </span>
            </h2>
            <p className="font-normal z-10"> {/* Set z-index for paragraph */}
              SubEase offers a suite of powerful features to help you manage
              your subscriptions with ease.
            </p>
          </div>
          <div className="flex flex-col md:pr-5 justify-center space-y-4"> {/* Lower text div */}
            <ul className="grid gap-6">
              <li className="flex items-start gap-4">
                <MdSubscriptions className="h-8 w-[20%] md:w-8 text-primary" />
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Effortless Subscription Tracking</h3>
                  <p className="text-muted-foreground">
                    Keep track of all your subscriptions in one place. With SubEase, you'll never miss a renewal or overspend on services you no longer use.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FaFilter className="h-8 w-[20%] md:w-8 text-primary" />
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Smart Categorization</h3>
                  <p className="text-muted-foreground">
                    Automatically organize your subscriptions into categories like Entertainment, Productivity, and more, making it easy to see where your money goes.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <AiOutlinePieChart className="h-8 w-[20%] md:w-8 text-primary" />
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Spending Insights</h3>
                  <p className="text-muted-foreground">
                    Get detailed analytics on your spending by category, helping you manage your budget and make informed financial decisions.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:w-[50%] flex items-center"> {/* Right div for image */}
          <Image alt="feature-image" src="/feature-image2.png" width={600} height={600} />
        </div>
      </div>
    </section>
  );
};

export default Features;