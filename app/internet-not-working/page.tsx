"use client";

import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    const handleBack = () => {
        router.push("/")
    }

    return (
        <div className="pb-[260px] w-full p-[25px] m-auto max-w-[580px] sm:w-full items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
            <h1>Internet Not Working</h1>
            <p>Our system is temporarily offline. Please try again
                later.</p>

            <button onClick={() => handleBack()}>Go to home</button>
        </div>
    );
}
