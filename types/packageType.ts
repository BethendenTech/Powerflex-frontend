import { ReactNode } from "react";

export interface PackageContextProps {
    data?: any;
    error?: any;
    loading: boolean;
    getData: (id: any) => Promise<void>;
}

export interface PackageProviderProps {
    children: ReactNode;
}
