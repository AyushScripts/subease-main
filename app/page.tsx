
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import LandingPage from "./components/LandingPage";

export default function Home() {
  const {userId} = auth();

  return (
    <div>
      {userId ? redirect('/dashboard') : <LandingPage/> }
    </div>
  );
}
