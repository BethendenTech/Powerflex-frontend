import { PackageContext } from "@/contexts/packageContext";
import { PackageProviderProps } from "@/types/packageType";
import { useSnackbar } from "notistack";
import React from "react";

export const PackageProvider = ({ children }: PackageProviderProps) => {
    const { enqueueSnackbar } = useSnackbar()
    const [data, setData] = React.useState<any>();
    const [orderData, setOrderData] = React.useState<any>();
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

    const createOrder = async (formData: any) => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/package/package-order/`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (response.ok) {
                const data = await response.json();
                setOrderData(data);
                enqueueSnackbar("Order created successfully", { variant: "success" });
            } else {
                console.error("Failed to save user details");
            }
        } catch (error) {
            console.error("Error saving user details:", error);
        }
    }

    return (
        <PackageContext.Provider value={{ data, error, loading, getData, createOrder, orderData }}>
            {children}
        </PackageContext.Provider>
    );
};
