import { formatKWhWithCurrency, renderNaira } from "@/utils/currency";
import { Button, Card, CardContent, CardHeader, Table, TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";
import useQuotation from "@/hooks/quotation";


interface SummaryObject {
    showCalculate: boolean
}

export default function Summary(props: SummaryObject) {
    const { quote, calculateQuote } = useQuotation()

    return (
        <Card
            sx={{
                backgroundColor: '#F2F2F4',
                boxShadow: "1px 1px 5px #333"
            }}
        >
            <CardHeader
                title="Estimation"
                action={props.showCalculate ? (
                    <Button variant="outlined" color="primary" aria-label="calculate" onClick={() => calculateQuote()}>
                        Calculate
                    </Button>
                ) : ""}
            />
            <CardContent>

                <Table
                    size="small"

                >
                    <TableBody>
                        <TableRow>
                            <TableCell align="left">Your property will need</TableCell>
                            <TableCell align="right">{formatKWhWithCurrency(quote.load_covered_by_solar ?? 0)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Total cost</TableCell>
                            <TableCell align="right">{renderNaira(quote.total_cost_with_profit_financing ?? 0)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}