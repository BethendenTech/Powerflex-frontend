"use client";

import { Box, Button, Card, CardContent, CardHeader } from "@mui/material";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import dynamic from 'next/dynamic';
import { PackageSummary } from "@/components/package/packageSummary";
import usePackage from "@/hooks/package";

const PaystackButton = dynamic(() => import('react-paystack').then(mod => mod.PaystackButton), {
    ssr: false, // This ensures that the component is only rendered on the client side
});

export default function PackagePaymentPage() {
    const router = useRouter();
    const { id } = useParams();

    const { data, loading, getData, orderData } = usePackage();

    React.useEffect(() => {
        if (id) {
            getData(id);
        }
    }, [id]);

    const onBack = () => {
        router.push(`/`);
    }

    if (loading) {
        return <div>Loading...</div>
    }

    const config = {
        reference: (new Date()).getTime().toString(),
        email: orderData?.email,
        amount: Math.round(data?.price * 100), //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        // publicKey: 'pk_live_68bf085a038d0f3e09dced6caab850db147d4c87',
        publicKey: 'pk_test_8a80005eb3a847c0a9a423d97f1c71cfe34d9215',
    };

    console.log("config", config)

    // you can call this function anything
    const handleSuccessAction = async (reference: any) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);

        let formData = {
            "status": "paid"
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/package/package-order-update/${orderData.id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            router.push(`/package/payment-success`);
        }
    };

    // you can call this function anything
    const handleCloseAction = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
    }


    return (
        <Box>
            <Button
                variant="text"
                startIcon={<Image
                    src="/images/collaps-arrow-right.svg"
                    alt="arrow icon"
                    width={24}
                    height={24}
                />}
                onClick={() => onBack()}
                sx={{
                    fontWeight: 'bold',
                    color: '#AEAEAE'
                }}
            >
                Back
            </Button>


            <Card>
                <CardHeader
                    title="Payment Processing"
                    titleTypographyProps={{ align: 'center', color: '#fff' }}
                    sx={{
                        backgroundColor: '#2755EB',
                        color: '#fff'
                    }}
                />
                <CardContent>

                    <PackageSummary data={data} />

                    <Box position="sticky" bottom={0} mt={2}>
                        <Button
                            {...config}
                            text="Pay Now"
                            variant="contained"
                            fullWidth
                            onSuccess={(reference: any) => handleSuccessAction(reference)}
                            onClose={handleCloseAction}
                            component={PaystackButton}
                        />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
