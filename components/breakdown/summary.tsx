import { formatKWhWithCurrency, renderNaira } from "@/utils/currency";
import { Box, Button, Card, CardContent, CardHeader, Table, TableBody, TableRow } from "@mui/material";
import React from "react";
import useQuotation from "@/hooks/quotation";
import { useStateMachine } from "little-state-machine";
import updateAction from "@/little-state/action";
import { updateApplianceArray } from "@/utils/formData";
import { TableCellName } from "../form/style";


interface SummaryObject {
    showCalculate: boolean
}

export default function Summary(props: SummaryObject) {
    const { quote, calculateQuote } = useQuotation()
    const { actions, state } = useStateMachine({ updateAction });

    const handleCalculate = () => {

        const breakdownArray = updateApplianceArray(state.breakdowns)

        const filter = {
            electricity_spend: state.electricity_spend,
            price_band: state.price_band,
            solar_load: state.solar_load,
            battery_autonomy_hours_only: state.battery_autonomy_hours_only,
            battery_autonomy_days: state.battery_autonomy_days,
            battery_autonomy_hours: state.battery_autonomy_hours,
            breakdowns: breakdownArray,
            is_finance: state.is_finance,
        }
        calculateQuote(filter)
    }

    return (
        <Box
            sx={{
                position: "relative", // Enable absolute positioning for gradient layer
                display: "flex", // Wrap the card and gradient together
            }}
        >
            {/* Gradient background layer */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    borderRadius: "10.98px",
                    background: "linear-gradient(270deg, #C4C7D0 0%, #FFFFFF 100%)",
                    filter: "blur(15px)",
                    zIndex: 0,
                    transform: "scale(1.1)",
                }}
            />

            {/* Card content */}
            <Card
                sx={{
                    position: "relative",
                    zIndex: 1,
                    borderRadius: "10.98px",
                    boxShadow: "0px 3.66px 3.66px 0px #00000040",
                    backgroundColor: "#F2F2F4",
                    width:'100%'
                }}
            >
                <CardHeader
                    title="Estimation"
                    titleTypographyProps={{
                        style: {
                            fontSize: 20,
                            fontWeight: "bold",
                        },
                    }}
                    sx={{
                        paddingTop: 2,
                        paddingBottom: 0,
                        paddingLeft: 2,
                        paddingRight: 2,
                    }}
                    action={
                        props.showCalculate ? (
                            <Button
                                variant="outlined"
                                size="small"
                                aria-label="calculate"
                                onClick={() => handleCalculate()}
                                sx={{
                                    padding: 2,
                                    lineHeight: 0,
                                    fontFamily: "'Harmonia Sans Pro', sans-serif",
                                    fontWeight: 400,
                                    fontSize: "20px",
                                    color: "#000000",
                                }}
                            >
                                Calculate
                            </Button>
                        ) : (
                            ""
                        )
                    }
                />
                <CardContent>
                    <Table size="small">
                        <TableBody>
                            <TableRow>
                                <TableCellName align="left">
                                    Your Daily Property Need Is
                                </TableCellName>
                                <TableCellName align="right">
                                    {formatKWhWithCurrency(quote.load_covered_by_solar ?? 0)}
                                </TableCellName>
                            </TableRow>
                            <TableRow>
                                <TableCellName sx={{ fontWeight: 700 }} align="left">
                                    Total cost
                                </TableCellName>
                                <TableCellName align="right">
                                    {renderNaira(quote.total_cost_with_profit ?? 0)}
                                </TableCellName>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </Box>

    );
}