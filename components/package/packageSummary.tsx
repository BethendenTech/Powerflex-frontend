import { Box, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { TableCellName } from "../form/style"
import { renderNaira } from "@/utils/currency"

export const PackageSummary = (props) => {
    const { data } = props
    return (
        <Box mt={5}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Equipment</TableCell>
                        <TableCell align="left">Quantity</TableCell>
                        <TableCell align="right">Cost</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data?.products?.map((item, index) => (
                        <TableRow key={`detail-${index}`}>
                            <TableCellName align="left">
                                {item.name}
                            </TableCellName>
                            <TableCellName align="left">
                                {item.quantity}
                            </TableCellName>
                            <TableCellName align="right">
                                {renderNaira(item.price)}
                            </TableCellName>
                        </TableRow>
                    ))}


                    <TableRow>
                        <TableCellName align="left">
                            Total Cost
                        </TableCellName>
                        <TableCellName align="left">

                        </TableCellName>
                        <TableCellName align="right">
                            {renderNaira(data?.price)}
                        </TableCellName>
                    </TableRow>
                </TableBody>
            </Table>
        </Box>
    )
}