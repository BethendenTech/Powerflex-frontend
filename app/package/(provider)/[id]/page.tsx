"use client";

import { FinanceSelectToggle } from "@/components/financeSelectToggle";
import { PackageFinancePurchase } from "@/components/package/financePurchase";
import { PackageOutRightPurchase } from "@/components/package/outrightPurchase";
import { PackageAppliance } from "@/components/package/packageAppliance";
import { PackageSummary } from "@/components/package/packageSummary";
import usePackage from "@/hooks/package";
import { renderNaira } from "@/utils/currency";
import { Box, Button, Card, CardContent, CardHeader, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React from "react";

export default function PackagePage() {
    const router = useRouter();
    const { id } = useParams();

    const { data, loading, getData } = usePackage();

    const [is_finance, setIsFinance] = React.useState(false);

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
                    color: '#2755EB'
                }}
            >
                Back
            </Button>


            <Card sx={{
                backgroundColor: '#F0F9FF',
                color: '#fff',
                border: '2px solid #3B4AEB',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                borderRadius: '9px',
            }}>
                <CardHeader
                    className="package-heading-container"
                    avatar={
                        <Typography color="#fff">{data?.name}</Typography>
                    }
                    title={<Typography color="#fff" className="package-heading-title">Reliable power for your needs</Typography>}
                    sx={{
                        backgroundColor: '#2755EB',
                        color: '#fff'
                    }}
                >
                </CardHeader>
                <CardContent
                    sx={{
                        padding: '20px 10px 5px'
                    }}
                >

                    <Box textAlign={"center"}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: 34 }}>{renderNaira(data?.price)}</Typography>
                        <Typography sx={{ color: '#2755EB', fontWeight: 'bold', mt: 5, mb: 4, fontSize: 22 }}>What this package covers</Typography>
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
                                <CardHeader className="blueColor" title="Powered Appliances" />
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
                            <Card sx={{
                                textAlign: 'center',
                            }}>
                                <CardHeader className="blueColor" title="Runtime" />
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
