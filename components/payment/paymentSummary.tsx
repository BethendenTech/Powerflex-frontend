"use client";

import { QuoteInterface } from "@/types/quotation";
import { renderNaira } from "@/utils/currency";
import { Box, Card, CardContent, Typography } from "@mui/material";

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


                    <table className="table-auto w-full">
                        <tbody>
                            <tr>
                                <td className="sub-content text-left">Equipment</td>
                                <th className="sub-content text-right">{quote?.total_equipments}</th>
                            </tr>
                        </tbody>
                    </table>

                    <table className="table-auto w-full">
                        <tbody>
                            <tr className='pl-4 flex justify-around'>
                                <td className="sub-content text-left">Solar panels</td>
                                <th className="sub-content text-left">{quote?.number_of_panels}</th>
                            </tr>
                            <tr className='pl-4 flex justify-around'>
                                <td className="sub-content text-left">Inverters</td>
                                <th className="sub-content text-left">{quote?.number_of_inverters}</th>
                            </tr>
                            <tr className='pl-4 flex justify-around'>
                                <td className="sub-content text-left">Batteries</td>
                                <th className="sub-content text-left">{quote?.number_of_batteries}</th>
                            </tr>
                        </tbody>
                    </table>

                    <table className="table-auto w-full">
                        <tbody>
                            <tr>
                                <td className="sub-content text-left">Installation</td>
                                <th className="sub-content text-right">{renderNaira(quote?.miscellaneous_cost)}</th>
                            </tr>
                        </tbody>
                    </table>

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
