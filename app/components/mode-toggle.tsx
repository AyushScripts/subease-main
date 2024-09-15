import { useTheme } from 'next-themes';
import React, { useState, useEffect } from 'react';
import { FaMoon } from 'react-icons/fa';
import { IoIosSunny } from 'react-icons/io';

export function ModeToggle() {
  const [isChecked, setIsChecked] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === 'dark') {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [theme]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setTheme(isChecked ? 'light' : 'dark');
  };

  return (
    <>
      <label className='relative inline-flex cursor-pointer select-none items-center'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
        
        <div className='shadow-md flex h-[30px] w-[65px] items-center justify-between rounded-full bg-gray-200'>
          <span
            title='Light Mode' className={`flex 5 h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
              !isChecked ? 'bg-white' : 'bg-transparent'
            }`}
          >
            <IoIosSunny className='text-gray-800' height={16} width={16} />
          </span>
          <span
            title='Dark Mode' className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
              isChecked ? 'bg-gray-800' : 'bg-transparent'
            }`}
          >
            <FaMoon className='text-white' height={16} width={16} />
          </span>
        </div>
      </label>
    </>
  );
}