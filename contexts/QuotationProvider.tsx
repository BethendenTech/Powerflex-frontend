import updateAction from '@/little-state/action';
import { QuotationContextType, QuoteInterface } from '@/types/quotation';
import { defaultQuoteData, updateApplianceArray } from '@/utils/formData';
import { useStateMachine } from 'little-state-machine';
import { usePathname } from 'next/navigation';
import { useSnackbar } from 'notistack';
import React, { createContext, ReactNode, useEffect, useState } from 'react';

// Initialize context with undefined as default, to be provided by the provider.
export const QuotationContext = createContext<QuotationContextType | undefined>(undefined);

// Props for the provider component
interface QuotationProviderProps {
    children: ReactNode;
}

// QuotationProvider component
export const QuotationProvider = ({ children }: QuotationProviderProps) => {
    const pathname = usePathname();

    const { state, actions } = useStateMachine({ updateAction });
    const { enqueueSnackbar } = useSnackbar()
    const [quote, setQuote] = useState<QuoteInterface>(defaultQuoteData);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const calculateQuote = async (data: any) => {
        setIsLoading(true);
        const breakdownArray = updateApplianceArray(data.breakdowns);

        const postData = {
            electricity_spend: data.electricity_spend,
            price_band: data.price_band,
            solar_load: data.solar_load,
            battery_autonomy_hours: Number(data.battery_autonomy_hours_only) + Number(data.battery_autonomy_days * 24),
            breakdowns: breakdownArray,
            is_finance: data.is_finance,
        };

        setIsLoading(true);
        setError(null);

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

                if (state.total_cost != data.total_cost_with_profit) {
                    if (pathname === "/quotation/appliances") {
                        enqueueSnackbar('Quote price updated', { variant: 'success' });
                        actions.updateAction({ total_cost: data.total_cost_with_profit });
                    }
                }

                setIsLoading(false);
            } else {
                console.error('Failed to save user details');
                setError('Failed to save user details');
                setIsLoading(false);
                // Uncomment to navigate to home if needed
                // router.push("/");
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Error calculating quote');
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        calculateQuote(state);
    }, [
        state.solar_load,
        state.battery_autonomy_hours_only,
        state.battery_autonomy_days,
        state.breakdowns,
        state.is_finance,
    ]);

    const createQuote = async () => {
        try {
            setIsLoading(true);
            let formData = {
                "quote_number": state.quote_number
            }

            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/create-quote/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            setIsLoading(false);
            return response
        } catch (error) {
            console.log("error", error)
            setIsLoading(false);
        }
    }

    return (
        <QuotationContext.Provider value={{ quote, error, isLoading, calculateQuote, createQuote }}>
            {children}
        </QuotationContext.Provider>
    );
};
