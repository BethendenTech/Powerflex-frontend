import { PackageContext } from "@/contexts/packageContext";
import { PackageProviderProps } from "@/types/packageType";
import { useSnackbar } from "notistack";
import React from "react";

export const PackageProvider = ({ children }: PackageProviderProps) => {
    const { enqueueSnackbar } = useSnackbar()
    const [data, setData] = React.useState<any>();
    const [error, setError] = React.useState<any>();
    const [loading, setLoading] = React.useState(true);

    const getData = async (id: any) => {
        try {
            setLoading(true);
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/package/package-detail/${id}/`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.ok) {
                const data = await response.json();
                setData(data);
                setLoading(false);
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    return (
        <PackageContext.Provider value={{ data, error, loading, getData }}>
            {children}
        </PackageContext.Provider>
    );
};
