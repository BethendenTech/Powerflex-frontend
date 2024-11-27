import { QuoteInterface } from "@/types/quotation";
import { formatKWhWithCurrency } from "@/utils/currency";
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

interface ComponentProps {
    quote: QuoteInterface;
}

export const EstimatedEnergyRequirement = ({ quote }: ComponentProps) => {

    return (
        <Box mt={2} mb={2}>
            <Table
                size="small"
                sx={{
                    border: 'none', // Removes table border
                    '& .MuiTableCell-root': {
                        borderBottom: 'none', // Removes cell borders
                    },
                }}
            >
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography fontWeight="bold">
                                Estimated energy requirement
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
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
                        <TableCell align="right" sx={{ fontWeight: "bold" }}>{formatKWhWithCurrency(quote.load_covered_by_solar ?? 0)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Box>
    )
}