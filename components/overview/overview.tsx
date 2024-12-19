import updateAction from "@/little-state/action";
import { Box, Table, TableBody, TableRow } from "@mui/material";
import { useStateMachine } from "little-state-machine";
import { TableCellName } from "../form/style";

export const OverviewData = () => {
    const { state } = useStateMachine({ updateAction });

    return (
        <Box mt={2} mb={2}>
            <Table size="small">
                <TableBody>
                    <TableRow>
                        <TableCellName colSpan={2} align="left" sx={{ fontSize: "14px" }}>Monthly Spend</TableCellName>
                        <TableCellName colSpan={2} align="right" sx={{ fontWeight: "bold", fontSize: '15px' }}>£{state?.electricity_spend}</TableCellName>
                    </TableRow>
                    <TableRow>
                        <TableCellName colSpan={2} align="left" sx={{ fontSize: "14px" }}>Electricity band group</TableCellName>
                        <TableCellName colSpan={2} align="right" sx={{ fontWeight: "bold", fontSize: '15px' }}>{state?.price_band}</TableCellName>
                    </TableRow>
                    <TableRow>
                        <TableCellName colSpan={2} align="left" sx={{ fontSize: "14px" }}>Coverage Percentage</TableCellName>
                        <TableCellName colSpan={2} align="right" sx={{ fontWeight: "bold", fontSize: '15px' }}>{state?.solar_load}%</TableCellName>
                    </TableRow>
                    <TableRow>
                        <TableCellName colSpan={2} align="left" sx={{ fontSize: "14px" }}>Battery Autonomy</TableCellName>
                        <TableCellName colSpan={2} align="right" sx={{ fontWeight: "bold", fontSize: '15px' }}>
                            {state?.battery_autonomy_days && state?.battery_autonomy_days != 0 ? `${state?.battery_autonomy_days} Day(s)` : ""}
                            {" "}
                            {state?.battery_autonomy_hours_only && state?.battery_autonomy_hours_only != 0 ? `${state?.battery_autonomy_hours_only} Hour(s)` : ""}

                        </TableCellName>
                    </TableRow>
                </TableBody>
            </Table>
        </Box>
    )
}