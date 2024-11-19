import { QuoteInterface } from "@/types/quotation";
import { formatKWhWithCurrency } from "@/utils/currency";
import { Box, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";

interface ComponentProps {
    quote: QuoteInterface;
}

export const EstimatedEnergyRequirement = ({ quote }: ComponentProps) => {

    return (
        <Box>

            <Typography sx={{ fontWeight: "bold" }}>
                Estimated energy requirement
            </Typography>

            <Table
                sx={{
                    border: 'none', // Removes table border
                    '& .MuiTableCell-root': {
                        borderBottom: 'none', // Removes cell borders
                    },
                }}
            >
                <TableBody>
                    <TableRow>
                        <TableCell align="left">Number of solar panels</TableCell>
                        <TableCell align="right" sx={{ fontWeight: "bold" }}>{quote.number_of_panels}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">Number of inverters</TableCell>
                        <TableCell align="right" sx={{ fontWeight: "bold" }}>{quote.number_of_inverters}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">Number of batteries</TableCell>
                        <TableCell align="right" sx={{ fontWeight: "bold" }}>{quote.number_of_batteries}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">Total Load Kwh</TableCell>
                        <TableCell align="right" sx={{ fontWeight: "bold" }}>{formatKWhWithCurrency(quote.total_load_kwh)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Box>
    )
}