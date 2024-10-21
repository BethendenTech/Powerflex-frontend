import useQuotation from '@/hooks/quotation';
import updateAction from '@/little-state/action';
import { QuotationContextType } from '@/types/quotation';
import { useStateMachine } from 'little-state-machine';
import { useRouter } from 'next/navigation';
import React, { createContext, ReactNode, useEffect, useState } from 'react';

// Define the context type as an empty object or undefined initially
const QuotationContext = createContext<QuotationContextType | undefined>(undefined);

// Props for the provider component
interface QuotationProviderProps {
    children: ReactNode;
}

// QuotationProvider component
export const QuotationProvider = ({ children }: QuotationProviderProps) => {
    const router = useRouter();
    const { actions, state } = useStateMachine({ updateAction });

    const [quote, setQuote] = useState({
        number_of_panels: 0,
        number_of_batteries: 3,
        number_of_inverters: 18,
        total_cost_naira: 0,
        total_load_kwh: 0,
    });

    const calculateQuote = async () => {
        let postData = {
            electricity_spend: state.electricity_spend,
            price_band: state.price_band,
            solar_load: state.solar_load,
            battery_autonomy_hours: state.battery_autonomy_hours_only + state.battery_autonomy_days * 24,
            breakdowns: state.breakdowns
        }

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/calculate-quote/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });

            if (response.ok) {
                const data = await response.json();
                setQuote(data);
            } else {
                console.error('Failed to save user details');
                router.push("/")
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        calculateQuote();
    }, [state.solar_load, state.battery_autonomy_hours_only, state.battery_autonomy_days, state.breakdowns, state.battery_autonomy_hours]);


    return (
        <QuotationContext.Provider
            value={{
                quote
            }}
        >
            {children}
        </QuotationContext.Provider>
    );
};
