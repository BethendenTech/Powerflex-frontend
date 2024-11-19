"use client";

import { QuoteInterface } from "@/types/quotation";
import { renderNaira } from "@/utils/currency";
import { Box, Card, CardContent, CardHeader, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, Typography } from "@mui/material";

interface ComponentProps {
    quote: QuoteInterface;
}

const PaymentSummaryCard = ({ quote }: ComponentProps) => {
    return (
        <Card sx={{ mt: 2, mb: 2 }}>
            <CardHeader
                title="Outright Purchase"
            />
            <CardContent>


                <Table
                    sx={{
                        border: 'none', // Removes table border
                        '& .MuiTableCell-root': {
                            borderBottom: 'none', // Removes cell borders
                        },
                    }}>
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={2} align="left">Equipment</TableCell>
                            <TableCell colSpan={2} align="right">{quote?.total_equipments}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="left">Solar panels</TableCell>
                            <TableCell align="right">{quote?.number_of_panels}</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="left">Inverters</TableCell>
                            <TableCell align="right">{quote?.number_of_inverters}</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="left">Batteries</TableCell>
                            <TableCell align="right">{quote?.number_of_batteries}</TableCell>
                            <TableCell></TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell colSpan={2} align="left">Installation</TableCell>
                            <TableCell colSpan={2} align="right">{renderNaira(quote?.installer_commission_amount)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Box textAlign="center">
                    <Typography variant="h5" component="h5">
                        Total Cost
                    </Typography>
                    <Typography variant="h5" component="h5">
                        {renderNaira(quote?.total_cost_naira)}
                    </Typography>
                </Box>

            </CardContent>
        </Card>
    )
}

export default PaymentSummaryCard;
