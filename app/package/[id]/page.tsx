"use client";

import { FinanceSelectToggle } from "@/components/financeSelectToggle";
import { TableCellName } from "@/components/form/style";
import { PackageAppliance } from "@/components/package/packageAppliance";
import { renderNaira } from "@/utils/currency";
import { Box, Button, Card, CardContent, CardHeader, Grid2, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
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
                <CardContent>

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


                    <Box mt={5}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Equipment</TableCell>
                                    <TableCell align="left">Quantity</TableCell>
                                    <TableCell align="right">Cost</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {data?.products?.map((item, index) => (
                                    <TableRow key={`detail-${index}`}>
                                        <TableCellName align="left">
                                            {item.name}
                                        </TableCellName>
                                        <TableCellName align="left">
                                            {item.quantity}
                                        </TableCellName>
                                        <TableCellName align="right">
                                            {item.price}
                                        </TableCellName>
                                    </TableRow>
                                ))}


                                <TableRow>
                                    <TableCellName align="left">
                                        Total Cost
                                    </TableCellName>
                                    <TableCellName align="left">

                                    </TableCellName>
                                    <TableCellName align="right">
                                        {data?.price}
                                    </TableCellName>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>

                    <Box mt={5}>
                        <FinanceSelectToggle handleChange={setIsFinance} is_finance={is_finance} />
                    </Box>

                </CardContent>
            </Card>
        </Box>
    );
}
