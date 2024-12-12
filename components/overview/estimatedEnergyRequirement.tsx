import { formatKWhWithCurrency } from "@/utils/currency";
import { Box, Collapse, IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import useQuotation from "@/hooks/quotation";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
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
                            <Typography fontWeight="bold">
                                Estimated energy requirement
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="left">Solar panels</TableCell>
                        <TableCell align="right" sx={{ fontWeight: "bold" }}>{quote?.products?.number_of_panels} Units</TableCell>
                        <TableCell align="right">
                            <IconButton
                                aria-label="expand row"
                                size="small"
                                color="primary"
                                onClick={() => setOpenPanel(!openPanel)}
                            >
                                {openPanel ? <KeyboardArrowDownOutlinedIcon /> : <KeyboardArrowRightOutlinedIcon />}
                            </IconButton>
                        </TableCell>
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
                        <TableCell align="left">Inverters</TableCell>
                        <TableCell align="right" sx={{ fontWeight: "bold" }}>{quote?.products?.number_of_inverters} Units</TableCell>
                        <TableCell align="right">
                            <IconButton
                                aria-label="expand row"
                                size="small"
                                color="primary"
                                onClick={() => setOpenInverter(!openInverter)}
                            >
                                {openInverter ? <KeyboardArrowDownOutlinedIcon /> : <KeyboardArrowRightOutlinedIcon />}
                            </IconButton>
                        </TableCell>
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
                        <TableCell align="left">Batteries</TableCell>
                        <TableCell align="right" sx={{ fontWeight: "bold" }}>{quote?.products?.number_of_batteries} Units</TableCell>
                        <TableCell align="right">
                            <IconButton
                                aria-label="expand row"
                                size="small"
                                color="primary"
                                onClick={() => setOpenBatteries(!openBatteries)}
                            >
                                {openBatteries ? <KeyboardArrowDownOutlinedIcon /> : <KeyboardArrowRightOutlinedIcon />}
                            </IconButton>
                        </TableCell>
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