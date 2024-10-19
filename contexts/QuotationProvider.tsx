import useQuotation from '@/hooks/quotation';
import updateAction from '@/little-state/action';
import { QuotationContextType } from '@/types/quotation';
import { useStateMachine } from 'little-state-machine';
import React, { createContext, ReactNode } from 'react';

// Define the context type as an empty object or undefined initially
const QuotationContext = createContext<QuotationContextType | undefined>(undefined);

// Props for the provider component
interface QuotationProviderProps {
    children: ReactNode;
}

// QuotationProvider component
export const QuotationProvider = ({ children }: QuotationProviderProps) => {
    const { actions, state } = useStateMachine({ updateAction });

    // Fetch data with the current state (quotationData)
    const { data, error, isLoading } = useQuotation(state);

    return (
        <QuotationContext.Provider
            value={{
                data,
                error,
                isLoading,
            }}
        >
            {children}
        </QuotationContext.Provider>
    );
};
