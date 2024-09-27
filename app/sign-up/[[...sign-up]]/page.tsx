"use client";

import { SignUp, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Page() {
  const { isSignedIn, user, isLoaded } = useUser(); 
  const [loading, setLoading] = useState(true);

  console.log(isSignedIn, user, isLoaded, "******")

  useEffect(() => {
    async function storeUserData() {
      console.log("storeUserData is being caled")
      if (isSignedIn && user) {
        try {
          const response = await axios.post('/api/user', {
            clerkId: user.id,
            email: user.primaryEmailAddress?.emailAddress,
          });

          console.log("Saved user data:", response.data);
        } catch (error: any) {
          console.error("Error saving user data:", error.response?.data || error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false); 
      }
    }

    console.log("*******", isSignedIn, user, isLoaded, "******")
    if (isLoaded) { 
      storeUserData();
    }
  }, [isSignedIn, user, isLoaded]);

  return (
    <div className="flex justify-center items-center h-screen">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <SignUp />
      )}
    </div>
  );
}
