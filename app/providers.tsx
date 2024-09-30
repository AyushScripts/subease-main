"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { PropsWithChildren, ReactNode } from "react";
import { ThemeProvider } from "./components/theme-provider";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      {children}
    </ClerkProvider>
  );
}
