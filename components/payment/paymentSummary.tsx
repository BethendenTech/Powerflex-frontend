"use client";

import { QuoteInterface } from "@/types/quotation";
import { renderNaira } from "@/utils/currency";
import { Box, Card, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from "@mui/material";

interface ComponentProps {
    quote: QuoteInterface;
}

const PaymentSummaryCard = ({ quote }: ComponentProps) => {
    return (
        <Box mb={2}>
            <Typography textAlign="left" variant="h5" component="h5">
                Outright Purchase
            </Typography>

            <Card>
                <CardContent>


                    <Table>
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
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={2} align="left">Installation</TableCell>
                                <TableCell colSpan={2} align="right">{renderNaira(quote?.installer_cost)}</TableCell>
                            </TableRow>
                        </TableFooter>
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
        </Box>
    )
}

export default PaymentSummaryCard;
