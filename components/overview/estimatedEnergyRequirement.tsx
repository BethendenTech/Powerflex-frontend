import { QuoteInterface } from "@/types/quotation";
import { formatKWhWithCurrency } from "@/utils/currency";
import { Box, Collapse, IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface ComponentProps {
    quote: QuoteInterface;
}

export const EstimatedEnergyRequirement = ({ quote }: ComponentProps) => {

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
                            <Typography fontWeight="bold">
                                Estimated energy requirement
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <IconButton
                                aria-label="expand row"
                                size="small"
                                onClick={() => setOpenPanel(!openPanel)}
                            >
                                {openPanel ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                        </TableCell>
                        <TableCell align="left">Number of solar panels</TableCell>
                        <TableCell align="right" sx={{ fontWeight: "bold" }}>{quote?.products?.number_of_panels}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
                            <Collapse in={openPanel} timeout="auto" unmountOnExit>
                               
                            <Table component={Paper}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Product</TableCell>
                                            <TableCell>Price USD</TableCell>
                                            <TableCell>Capacity</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align="left" sx={{ fontWeight: "bold" }}>
                                                {quote?.products?.best_panel?.name}
                                            </TableCell>
                                            <TableCell align="left" sx={{ fontWeight: "bold" }}>
                                                {quote?.products?.best_panel?.price_usd}
                                            </TableCell>
                                            <TableCell align="left" sx={{ fontWeight: "bold" }}>
                                                {quote?.products?.best_panel?.capacity_w}
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Collapse>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <IconButton
                                aria-label="expand row"
                                size="small"
                                onClick={() => setOpenInverter(!openInverter)}
                            >
                                {openInverter ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                        </TableCell>
                        <TableCell align="left">Number of inverters</TableCell>
                        <TableCell align="right" sx={{ fontWeight: "bold" }}>{quote?.products?.number_of_inverters}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
                            <Collapse in={openInverter} timeout="auto" unmountOnExit>
                            <Table component={Paper}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Product</TableCell>
                                            <TableCell>Price USD</TableCell>
                                            <TableCell>Capacity</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align="left" sx={{ fontWeight: "bold" }}>
                                                {quote?.products?.best_inverter?.name}
                                            </TableCell>
                                            <TableCell align="left" sx={{ fontWeight: "bold" }}>
                                                {quote?.products?.best_inverter?.price_usd}
                                            </TableCell>
                                            <TableCell align="left" sx={{ fontWeight: "bold" }}>
                                                {quote?.products?.best_inverter?.capacity_w}
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Collapse>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <IconButton
                                aria-label="expand row"
                                size="small"
                                onClick={() => setOpenBatteries(!openBatteries)}
                            >
                                {openBatteries ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                        </TableCell>

                        <TableCell align="left">Number of batteries</TableCell>
                        <TableCell align="right" sx={{ fontWeight: "bold" }}>{quote?.products?.number_of_batteries}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
                            <Collapse in={openBatteries} timeout="auto" unmountOnExit>
                                <Table component={Paper}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Product</TableCell>
                                            <TableCell>Price USD</TableCell>
                                            <TableCell>Capacity</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align="left" sx={{ fontWeight: "bold" }}>
                                                {quote?.products?.best_battery?.name}
                                            </TableCell>
                                            <TableCell align="left" sx={{ fontWeight: "bold" }}>
                                                {quote?.products?.best_battery?.price_usd}
                                            </TableCell>
                                            <TableCell align="left" sx={{ fontWeight: "bold" }}>
                                                {quote?.products?.best_battery?.capacity_w}
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Collapse>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell align="left">Total Load Kwh</TableCell>
                        <TableCell align="left"></TableCell>
                        <TableCell align="right" sx={{ fontWeight: "bold" }}>{formatKWhWithCurrency(quote.load_covered_by_solar ?? 0)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Box>
    )
}