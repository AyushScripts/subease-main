'use client'

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SignInButton } from '@clerk/nextjs';
import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io';

interface GetStartedButtonProps {
    text: string;
    size:  "default" | "sm" | "lg" | "icon" | null | undefined;
    className?: string;
}

const GetStartedButton = ({text, size, className}: GetStartedButtonProps ) => {
  return (
    <Button size={size} className={cn("flex justify-center gap-1 button-bg items-center", className)}>
          <SignInButton>{text}</SignInButton>
          <IoMdArrowDropright className="text-lg" />
        </Button>
  )
}

export default GetStartedButton