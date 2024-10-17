"use client";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import { createStore, StateMachineProvider } from "little-state-machine";

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

createStore({
  name: '',
  email: '',
  phone_number: '',
  electricity_spend: '',
  price_band: '',
  additional_info: false,
  solar_load: 0,
  battery_autonomy_hours_only: 0,
  battery_autonomy_days: 0,
  battery_autonomy_hours: 0,
  breakdowns: {},
  payment_method: 'credit_debit_card',
  name_card: '',
  card_number: '',
  expiration_date: '',
  security_code: '',
  postcode: '',
  total_cost: 0,
});

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
