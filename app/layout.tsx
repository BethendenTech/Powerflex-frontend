"use client";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import { createStore, StateMachineProvider } from "little-state-machine";
import { defaultLittleState } from "@/little-state/littleStateData";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Powerflex",
//   description: "Powerflex is a solar energy company that provides energy solutions to customers around the world. Our team of engineers and engineers are passionate about powering your home with energy.",
// };

createStore(defaultLittleState);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f1f1f1]`}
      >
        <StateMachineProvider>
          <Header />
          <div className="flex flex-wrap">
            {children}
          </div>
        </StateMachineProvider>
      </body>
    </html>
  );
}
