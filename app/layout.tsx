"use client";

import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

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
          <Header />
          <div className="flex flex-wrap">
            {children}
          </div>
      </body>
    </html>
  );
}
