'use client'

import { SignInButton } from '@clerk/nextjs';
import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io';

interface GetStartedButtonProps {
    text: string;
    className?: string;
}

const GetStartedButton = ({ text, className }: GetStartedButtonProps) => {
    return (
        <div className={`button-bg flex justify-center gap-1 items-center ${className}`}>
            
            <SignInButton>{text}</SignInButton>
            <IoMdArrowDropright className="text-lg" />
        </div>
    );
}

export default GetStartedButton;
