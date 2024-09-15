import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Your Dashboard - SubEase",
  description:
    "Your personalized dashboard where you get consciousness about your spendings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
