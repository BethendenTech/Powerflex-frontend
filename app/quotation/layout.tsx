"use client";

import { createStore, StateMachineProvider } from "little-state-machine";
import { defaultLittleState } from "@/little-state/littleStateData";
import { QuotationProvider } from "@/contexts/QuotationProvider";

createStore(defaultLittleState);

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <StateMachineProvider>
            <QuotationProvider>
                <div className="pb-[260px] w-full p-[25px] m-auto max-w-[580px] sm:w-full items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
                    {children}
                </div>
            </QuotationProvider>
        </StateMachineProvider>
    );
}
