import { formatKWhWithCurrency, renderNaira } from "@/utils/currency";
import { Button, Card, CardContent, CardHeader, Table, TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";
import useQuotation from "@/hooks/quotation";
import { useStateMachine } from "little-state-machine";
import updateAction from "@/little-state/action";
import { updateApplianceArray } from "@/utils/formData";


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
        <Card
            sx={{
                boxShadow: "0px 3.66px 3.66px 0px #00000040",
                backgroundColor: '#F2F2F4',
                background: "rgba(242, 242, 244, 1)",
                borderRadius: '10.98px'
            }}
        >
            <CardHeader
                title="Estimation"
                titleTypographyProps={{
                    style: {
                        fontSize: 20,
                        fontWeight: "bold",
                    }
                }}
                sx={{
                    paddingTop: 2,
                    paddingBottom: 0,
                    paddingLeft: 2,
                    paddingRight: 2,
                }}
                action={props.showCalculate ? (
                    <Button variant="outlined" size="small"
                        aria-label="calculate" onClick={() => handleCalculate()} sx={{
                            padding: 2,
                            lineHeight: 0,
                            fontFamily: "'Harmonia Sans Pro', sans-serif", fontWeight: 400, fontSize: "20px", color: "#FFFFFF"
                        }}>
                        Calculate
                    </Button>
                ) : ""}
            />

            <CardContent>

                <Table
                    size="small"

                >
                    <TableBody>
                        <TableRow>
                            <TableCell align="left">Your Daily Property Need Is</TableCell>
                            <TableCell align="right">{formatKWhWithCurrency(quote.load_covered_by_solar ?? 0)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Total cost</TableCell>
                            <TableCell align="right">{renderNaira(quote.total_cost_with_profit ?? 0)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}