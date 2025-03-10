import { Box, Table, TableBody, TableCell, TableHead, TableRow, useTheme, useMediaQuery } from "@mui/material"
import { TableCellName } from "../form/style"
import { renderNaira } from "@/utils/currency"

export const PackageSummary = (props) => {
    const { data } = props
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const MobileView = () => (
        <Box className="packageDetailMobile">
            <Box className="summary-row" py={1} sx={{
               mb: 2,
               border:0
            }}>
                <Box>
                    <Box component="span" sx={{ color: '#666', fontWeight: 'bold' }}>Equipment</Box>
                    <Box component="span" sx={{ color: '#666',fontWeight: 'bold', ml: 1 }}>(QTY)</Box>
                </Box>
                <Box sx={{ color: '#666', fontWeight: 'bold'}}>
                    Cost
                </Box>
            </Box>
            {data?.products?.map((item, index) => (
                <Box key={`detail-${index}`} className="summary-row" py={1}>
                    <Box>
                        <Box component="span" sx={{ color: '#666', fontWeight: 'bold' }}>{item.name}</Box>
                        <Box component="span" sx={{ color: '#666', ml: 1 }}>({item.quantity})</Box>
                    </Box>
                    <Box sx={{ color: '#666', fontWeight: 'medium' }}>
                        {renderNaira(item.price)}
                    </Box>
                </Box>
            ))}
            <Box className="summary-row" py={2} sx={{
               
                mt: 2,
                fontWeight: 'bold',
                color: '#666'
            }}>
                <Box>Total Cost</Box>
                <Box>{renderNaira(data?.price)}</Box>
            </Box>
        </Box>
    );

    const DesktopView = () => (
        <Box className="packageDetaiDesktop">
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Equipment</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Cost</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data?.products?.map((item, index) => (
                        <TableRow key={`detail-${index}`}>
                            <TableCellName align="left">
                                {item.name}
                            </TableCellName>
                            <TableCellName align="right">
                                {item.quantity}
                            </TableCellName>
                            <TableCellName align="right">
                                {renderNaira(item.price)}
                            </TableCellName>
                        </TableRow>
                    ))}

                    <TableRow className="packageSummaryTotal">
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
    );

    return (
        <Box mt={5} className="packageSummary">
            {isMobile ? <MobileView /> : <DesktopView />}
        </Box>
    )
}