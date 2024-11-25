"use client";

import { NetworkProvider } from "@/contexts/NetworkContext";
import { WebLayout } from "@/layout/web";
import theme from "@/theme/theme";
import { ThemeProvider } from "@mui/material";
import localFont from "next/font/local";
import "./globals.css";
import { usePathname } from "next/navigation";
import React from "react";

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

  const pathname = usePathname();
  const [backgroundImage, setBackgroundImage] = React.useState("");

  React.useEffect(() => {
    switch (pathname) {
      case "/":
        setBackgroundImage("/images/home/bg-homes.svg")
        break;
      case "/products":
        setBackgroundImage("/images/home/bg-products.svg")
        break;
      default:
        setBackgroundImage("")
        break;
    }
  }, [pathname])

  return (
    <html lang="en">

      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f1f1f1]`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <ThemeProvider theme={theme}>
          <NetworkProvider>
            <WebLayout>
              {children}
            </WebLayout>
          </NetworkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
