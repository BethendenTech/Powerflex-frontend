import { formatKWhWithCurrency } from "@/utils/currency";
import { Box, Collapse, IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import useQuotation from "@/hooks/quotation";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { TableCellName } from "../form/style";
import ProductDetailView from "./productDetail";
export const EstimatedEnergyRequirement = () => {
    const { quote } = useQuotation();

    const [openPanel, setOpenPanel] = React.useState(false);
    const [openInverter, setOpenInverter] = React.useState(false);
    const [openBatteries, setOpenBatteries] = React.useState(false);

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
                            <Typography fontWeight="bold" sx={{
                                fontFamily: "'Harmonia Sans Pro', sans-serif",
                                fontSize: '20px'
                            }}>
                                Estimated energy requirement
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCellName align="left">Solar panels</TableCellName>
                        <TableCellName align="right" sx={{ fontWeight: "bold" }}>{quote?.products?.number_of_panels} Units</TableCellName>
                        <TableCellName align="right">
                            <IconButton
                                aria-label="expand row"
                                size="small"
                                color="primary"
                                onClick={() => setOpenPanel(!openPanel)}
                            >
                                {openPanel ? <KeyboardArrowDownOutlinedIcon /> : <KeyboardArrowRightOutlinedIcon />}
                            </IconButton>
                        </TableCellName>
                    </TableRow>

                    <TableRow>
                        <TableCellName style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
                            <Collapse in={openPanel} timeout="auto" unmountOnExit>
                                <ProductDetailView product={quote?.products?.best_panel} />
                            </Collapse>
                        </TableCellName>
                    </TableRow>

                    <TableRow>
                        <TableCellName align="left">Inverters</TableCellName>
                        <TableCellName align="right" sx={{ fontWeight: "bold" }}>{quote?.products?.number_of_inverters} Units</TableCellName>
                        <TableCellName align="right">
                            <IconButton
                                aria-label="expand row"
                                size="small"
                                color="primary"
                                onClick={() => setOpenInverter(!openInverter)}
                            >
                                {openInverter ? <KeyboardArrowDownOutlinedIcon /> : <KeyboardArrowRightOutlinedIcon />}
                            </IconButton>
                        </TableCellName>
                    </TableRow>

                    <TableRow>
                        <TableCellName style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
                            <Collapse in={openInverter} timeout="auto" unmountOnExit>
                                <ProductDetailView product={quote?.products?.best_inverter} />
                            </Collapse>
                        </TableCellName>
                    </TableRow>

                    <TableRow>
                        <TableCellName align="left">Batteries</TableCellName>
                        <TableCellName align="right" sx={{ fontWeight: "bold" }}>{quote?.products?.number_of_batteries} Units</TableCellName>
                        <TableCellName align="right">
                            <IconButton
                                aria-label="expand row"
                                size="small"
                                color="primary"
                                onClick={() => setOpenBatteries(!openBatteries)}
                            >
                                {openBatteries ? <KeyboardArrowDownOutlinedIcon /> : <KeyboardArrowRightOutlinedIcon />}
                            </IconButton>
                        </TableCellName>
                    </TableRow>

                    <TableRow>
                        <TableCellName style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
                            <Collapse in={openBatteries} timeout="auto" unmountOnExit>
                                <ProductDetailView product={quote?.products?.best_battery} />
                            </Collapse>
                        </TableCellName>
                    </TableRow>

                    <TableRow>
                        <TableCellName align="left">Total Load Kwh</TableCellName>
                        <TableCellName align="left"></TableCellName>
                        <TableCellName align="right" sx={{ fontWeight: "bold" }}>{formatKWhWithCurrency(quote.load_covered_by_solar ?? 0)}</TableCellName>
                    </TableRow>
                </TableBody>
            </Table>
        </Box>
    )
}