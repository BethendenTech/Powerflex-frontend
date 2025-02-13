"use client";

import { Box, Button, Card, CardContent, CardHeader } from "@mui/material";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React from "react";

export default function PackagePage() {
    const router = useRouter();
    const { id } = useParams();
    const [data, setData] = React.useState<any>();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        if (id) {
            getData();
        }
    }, [id]);

    const getData = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/package/package-detail/${id}`,
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
        }
    };

    const onBack = () => {
        router.push(`/`);
    }

    if (loading) {
        return <div>Loading...</div>
    }

    console.log("data", data)

    return (
        <Box mt={10}>
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
                <CardHeader title={data?.name} />
                <CardContent>

                </CardContent>
            </Card>
        </Box>
    );
}
