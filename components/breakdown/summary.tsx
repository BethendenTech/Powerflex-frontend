import { formatKWhWithCurrency, renderNaira } from "@/utils/currency";
import { Card, CardContent, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import React from "react";


interface SummaryObject {
    solar_panels: number;
    inverters?: number;
    batteries?: number;
    cost?: number;
    energy?: number;
    load_covered_by_solar?: number;
}

export default function Summary(props: SummaryObject) {
    return (
        <Card
            sx={{
                backgroundColor: '#F2F2F4',
                boxShadow: "1px 1px 5px #333"
            }}
        >
            <CardContent>
                <Typography textAlign="center" variant="h6" fontWeight="bold">Estimation</Typography>

                <Table
                    size="small"

                >
                    <TableBody>
                        <TableRow>
                            <TableCell align="left">Your property will need</TableCell>
                            <TableCell align="right">{formatKWhWithCurrency(props.load_covered_by_solar ?? 0)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Total cost</TableCell>
                            <TableCell align="right">{renderNaira(props.cost ?? 0)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}