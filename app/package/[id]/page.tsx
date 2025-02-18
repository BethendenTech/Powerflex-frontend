"use client";

import { FinanceSelectToggle } from "@/components/financeSelectToggle";
import { PackageFinancePurchase } from "@/components/package/financePurchase";
import { PackageOutRightPurchase } from "@/components/package/outrightPurchase";
import { PackageAppliance } from "@/components/package/packageAppliance";
import { PackageSummary } from "@/components/package/packageSummary";
import { renderNaira } from "@/utils/currency";
import { Box, Button, Card, CardContent, CardHeader, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React from "react";

export default function PackagePage() {
    const router = useRouter();
    const { id } = useParams();
    const [data, setData] = React.useState<any>();
    const [loading, setLoading] = React.useState(true);

    const [is_finance, setIsFinance] = React.useState(false);

    React.useEffect(() => {
        if (id) {
            getData();
        }
    }, [id]);

    const getData = async () => {
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
        }
    };

    const onBack = () => {
        router.push(`/`);
    }

    if (loading) {
        return <div>Loading...</div>
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
                    avatar={
                        <Typography color="#fff">{data?.name}</Typography>
                    }
                    title="Reliable power for your needs"
                    titleTypographyProps={{ align: 'center', color: '#fff' }}
                    sx={{
                        backgroundColor: '#2755EB',
                        color: '#fff'
                    }}
                />
                <CardContent
                sx={{
                     backgroundColor: '#ccc',
                        color: '#fff'
                }}
                >

                    <Box textAlign={"center"}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: 30 }}>{renderNaira(data?.price)}</Typography>
                        <Typography sx={{ color: '#2755EB', fontWeight: 'bold', mt: 2, mb: 2 }}>What this package covers</Typography>
                    </Box>


                    <Grid2 container spacing={2}>
                        <Grid2 size={{
                            xs: 12,
                            sm: 12,
                            md: 6,
                            lg: 6,
                            xl: 6,
                        }}>
                            <Card>
                                <CardHeader title="Powered Appliances" />
                                <CardContent>
                                    <PackageAppliance appliances={data.appliances} direction="column" />
                                </CardContent>
                            </Card>
                        </Grid2>
                        <Grid2 size={{
                            xs: 12,
                            sm: 12,
                            md: 6,
                            lg: 6,
                            xl: 6,
                        }}>
                            <Card>
                                <CardHeader title="Runtime" />
                                <CardContent>
                                    {data?.runtime}
                                </CardContent>
                            </Card>
                        </Grid2>

                    </Grid2>


                    <PackageSummary data={data} />

                    <Box mt={5}>
                        <FinanceSelectToggle handleChange={setIsFinance} is_finance={is_finance} />
                    </Box>

                    {!is_finance && (
                        <PackageOutRightPurchase package_id={id} amount={data?.price} />
                    )}

                    {is_finance && (
                        <PackageFinancePurchase package_id={id} amount={data?.price} />
                    )}

                </CardContent>
            </Card>
        </Box>
    );
}
