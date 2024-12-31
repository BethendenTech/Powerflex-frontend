import { formatKWhWithCurrency } from "@/utils/currency";
import { Box, Collapse, Divider, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
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
                                Your System
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCellName align="left" sx={{ fontWeight: 'bold', color: '#257FE6' }}>Solar panels</TableCellName>
                        <TableCellName align="right" sx={{ fontWeight: "bold" }}>{quote?.products?.number_of_panels} Units</TableCellName>
                        <TableCellName align="right"
                            sx={{
                                width: 50
                            }}>
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
                        <TableCellName align="left" sx={{ fontWeight: 'bold', color: '#257FE6' }}>Inverters</TableCellName>
                        <TableCellName align="right" sx={{ fontWeight: "bold" }}>{quote?.products?.number_of_inverters} Units</TableCellName>
                        <TableCellName align="right"
                            sx={{
                                width: 50
                            }}>
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
                        <TableCellName align="left" sx={{ fontWeight: 'bold', color: '#257FE6' }}>Batteries</TableCellName>
                        <TableCellName align="right" sx={{ fontWeight: "bold" }}>{quote?.products?.number_of_batteries} Units</TableCellName>
                        <TableCellName align="right"
                            sx={{
                                width: 50
                            }}>
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
                        <TableCellName align="left" sx={{ fontWeight: 'bold', color: '#257FE6' }}>
                            Daily Total Load
                        </TableCellName>
                        <TableCellName align="right" sx={{ fontWeight: "bold" }}>
                            {formatKWhWithCurrency(quote.load_covered_by_solar ?? 0)}
                        </TableCellName>
                    </TableRow>
                </TableBody>
            </Table>
            <Divider />
            <Box pt={1} pb={1}>
                <Typography sx={{
                    fontFamily: "'Harmonia Sans Pro', sans-serif",
                    fontWeight: 700,
                    fontSize: "11px",
                    color: "grey",
                }}>
                    Cabling and installation costs are approximate estimates and may vary based on actual installation
                </Typography>
            </Box>
        </Box>
    )
}