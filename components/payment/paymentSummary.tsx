"use client";

import useQuotation from "@/hooks/quotation";
import { renderNaira } from "@/utils/currency";
import { Box, Card, CardContent, Table, TableBody, TableHead, TableRow, Typography } from "@mui/material";
import { TableCellName, Title } from "../form/style";

const PaymentSummaryCard = () => {
    const { quote } = useQuotation();

    return (
        <Box sx={{ mt: 2, mb: 2 }}>
            <Title sx={{ color: "#000000" }}>Outright Purchase</Title>

            <Card>
                <CardContent>
                    <Table
                        size="small"
                        sx={{
                            border: 'none', // Removes table border
                            '& .MuiTableCell-root': {
                                borderBottom: 'none', // Removes cell borders
                            },
                        }}>
                        <TableHead>
                            <TableRow>
                                <TableCellName colSpan={2} align="left">Equipment</TableCellName>
                                <TableCellName colSpan={2} align="right">{quote?.total_equipments}</TableCellName>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCellName></TableCellName>
                                <TableCellName align="left">Solar panels</TableCellName>
                                <TableCellName align="right">{quote?.products?.number_of_panels}</TableCellName>
                                <TableCellName></TableCellName>
                            </TableRow>
                            <TableRow>
                                <TableCellName></TableCellName>
                                <TableCellName align="left">Inverters</TableCellName>
                                <TableCellName align="right">{quote?.products?.number_of_inverters}</TableCellName>
                                <TableCellName></TableCellName>
                            </TableRow>
                            <TableRow>
                                <TableCellName></TableCellName>
                                <TableCellName align="left">Batteries</TableCellName>
                                <TableCellName align="right">{quote?.products?.number_of_batteries}</TableCellName>
                                <TableCellName></TableCellName>
                            </TableRow>

                            <TableRow>
                                <TableCellName colSpan={2} align="left">Profit Margin</TableCellName>
                                <TableCellName colSpan={2} align="right">{renderNaira(quote?.profit_margin_amount)}</TableCellName>
                            </TableRow>
                            {/* <TableRow>
                                <TableCellName colSpan={2} align="left">Installation</TableCellName>
                                <TableCellName colSpan={2} align="right">{renderNaira(quote?.installer_commission_amount)}</TableCellName>
                            </TableRow> */}
                        </TableBody>
                    </Table>

                    <Box textAlign="center">
                        <Typography variant="h5" component="h5" fontWeight="bold"
                            sx={{
                                fontFamily: "'Harmonia Sans Pro', sans-serif",
                                fontSize: "20px",
                                color: "#424242"
                            }}>
                            Total Cost
                        </Typography>
                        <Typography variant="h5" component="h5" fontWeight="bold"
                            sx={{
                                fontFamily: "'Harmonia Sans Pro', sans-serif",
                                fontSize: "20px",
                                color: "#424242"
                            }}>
                            {renderNaira(quote.total_cost_usd ?? 0)}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}

export default PaymentSummaryCard;
