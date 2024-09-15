'use client'

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { PropsWithChildren, ReactNode } from "react";
import { ThemeProvider } from "./components/theme-provider";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string);

export function Providers({children} : PropsWithChildren) {
    return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      
        {children}
      
      </ConvexProviderWithClerk>
    </ClerkProvider>
    )
}

