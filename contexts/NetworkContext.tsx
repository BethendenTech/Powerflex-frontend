import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface NetworkContextType {
    isOnline: boolean;
}

const NetworkContext = createContext<NetworkContextType | undefined>(undefined);

export const NetworkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOnline, setIsOnline] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (!navigator.onLine) {
            router.push('/internet-not-working');
            setIsOnline(false)
        } else {
            setIsOnline(true)
        }
    }, [router]);

    return (
        <NetworkContext.Provider value={{ isOnline }}>
            {children}
        </NetworkContext.Provider>
    );
};

export const useNetwork = () => {
    const context = useContext(NetworkContext);
    if (!context) {
        throw new Error('useNetwork must be used within a NetworkProvider');
    }
    return context;
};
