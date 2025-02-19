import { ReactNode } from "react";

export interface PackageContextProps {
    data?: any;
    orderData?: any;
    error?: any;
    loading: boolean;
    getData: (id: any) => Promise<void>;
    createOrder: (data: any) => Promise<void>;
}

export interface PackageProviderProps {
    children: ReactNode;
}