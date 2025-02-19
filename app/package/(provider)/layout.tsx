"use client";

import { PackageProvider } from "@/providers/packageProvider";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <PackageProvider>
            {children}
        </PackageProvider>
    );
}
