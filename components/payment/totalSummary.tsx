import useQuotation from "@/hooks/quotation";
import { renderNaira } from "@/utils/currency";
import { Box, Table, TableBody, TableRow } from "@mui/material";
import { TableCellName } from "../form/style";

export const TotalSummary = () => {
    const { quote } = useQuotation();

    return (
        <Box sx={{ mb: 2, mt: 2 }}>
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
                        <TableCellName align="left">Equipment</TableCellName>
                        <TableCellName align="right">{renderNaira(quote.total_cost_naira)}</TableCellName>
                    </TableRow>
                    <TableRow>
                        <TableCellName align="left">Installation & Cabling</TableCellName>
                        <TableCellName align="right">{renderNaira(quote.installation_and_cabling)}</TableCellName>
                    </TableRow>
                    <TableRow>
                        <TableCellName align="left">VAT ({quote.vat}%)</TableCellName>
                        <TableCellName align="right">{renderNaira(quote.total_vat)}</TableCellName>
                    </TableRow>

                    <TableRow>
                        <TableCellName align="left" sx={{ fontWeight: "bold" }}>Due Today</TableCellName>
                        <TableCellName align="right" sx={{ fontWeight: "bold" }}>{renderNaira(quote.total_cost_with_profit)}</TableCellName>
                    </TableRow>
                </TableBody>
            </Table>
        </Box>
    )
}
