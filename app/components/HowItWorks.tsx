import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import { MdDateRange, MdInsights } from 'react-icons/md'

const HowItWorks = () => {
  return (
    <section id='howitworks' className='md:h-screen py-12 md:py-24 lg:py-32'>
        <div className="px-7 md:px-16 flex flex-col">
            <div className='text-center flex flex-col gap-3 mb-16'> {/*Upper Div*/}
                <h1 className='heading-text'>
                    How SubEase {" "}
                    <span className='relative inline-block'>
                      Works
                      <div className='absolute left-0 bottom-0 h-1/3 w-full bg-text-underline -z-10'></div>
                    </span>
                     
                </h1>
                <p className=''>Our intuitive platform makes managing your subscriptions a breeze.</p>
            </div>
            <div className='flex flex-col lg:flex-row lg:justify-between gap-10 md:gap-16'> {/*Lower Div*/}
                <div className='flex flex-col md:w-1/3 justify-center items-center gap-4'>
                    <div className='rounded-full flex items-center justify-center h-8 w-8 md:h-10 md:w-10 bg-primary'>
                      <IoMdAdd className='text-primary-foreground h-full w-full p-2' />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold">Add Subscriptions</h3>
                  <p className="text-base md:text-lg text-center text-muted-foreground">
                  Connect your accounts and add your subscriptions to the platform.
                  </p>
                </div>
                <div className='flex flex-col md:w-1/3 justify-center items-center gap-4'>
                    <div className='rounded-full flex items-center justify-center h-8 w-8 md:h-10 md:w-10 bg-primary'>
                      <MdDateRange className='text-primary-foreground h-full w-full p-2' />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold">Track Renewals</h3>
                  <p className="text-base md:text-lg text-center text-muted-foreground">
                  Stay on top of your subscription renewals with our intelligent tracking system.
                  </p>
                </div>
                <div className='flex flex-col md:w-1/3 justify-center items-center gap-4'>
                    <div className='rounded-full flex items-center justify-center h-8 w-8 md:h-10 md:w-10 bg-primary'>
                      <MdInsights className='text-primary-foreground h-full w-full p-2' />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold">Gain Insights into Your Spending</h3>
                  <p className="text-base md:text-lg text-center text-muted-foreground">
                  Stay mindful of where your money is going with our subscription tracking and budgeting tools.
                  </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HowItWorks