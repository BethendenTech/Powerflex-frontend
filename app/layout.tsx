"use client";

import { NetworkProvider } from "@/contexts/NetworkContext";
import { WebLayout } from "@/layout/web";
import theme from "@/theme/theme";
import { ThemeProvider } from "@mui/material";
import localFont from "next/font/local";
import { SnackbarProvider } from "notistack";
import React from "react";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <ThemeProvider theme={theme}>
          <NetworkProvider>
            <SnackbarProvider>
              <WebLayout>
                {children}
              </WebLayout>
            </SnackbarProvider>
          </NetworkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
