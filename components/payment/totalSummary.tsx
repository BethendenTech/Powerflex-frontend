import { QuoteInterface } from "@/types/quotation";
import { renderNaira } from "@/utils/currency";
import { Box, Table, TableBody, TableCell, TableRow } from "@mui/material";

interface ComponentProps {
    quote: QuoteInterface;
    isFinance: boolean;
}

export const TotalSummary = ({ quote, isFinance }: ComponentProps) => {
    return (
        <Box sx={{ mb: 2 }}>
            <Table
                size="small"
                sx={{
                    border: 'none', // Removes table border
                    '& .MuiTableCell-root': {
                        borderBottom: 'none', // Removes cell borders
                    },
                }}>
                <TableBody>
                    <TableRow>
                        <TableCell align="left">Equipment</TableCell>
                        <TableCell align="right">{renderNaira(quote.total_cost_naira)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">Installation & Cabling</TableCell>
                        <TableCell align="right">{renderNaira(quote.installation_and_cabling)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">VAT</TableCell>
                        <TableCell align="right">{quote.vat}%</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell align="left" sx={{ fontWeight: "bold" }}>Due Today</TableCell>
                        <TableCell align="right" sx={{ fontWeight: "bold" }}>{isFinance ? renderNaira(quote.total_cost_with_profit_financing) : renderNaira(quote.total_cost_with_profit_outright)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Box>
    )
}
