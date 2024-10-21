"use client";

import { createStore, StateMachineProvider } from "little-state-machine";
import { defaultLittleState } from "@/little-state/littleStateData";

createStore(defaultLittleState);

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <StateMachineProvider>
            {children}
        </StateMachineProvider>
    );
}
