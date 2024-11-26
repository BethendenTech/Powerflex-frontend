import updateAction from "@/little-state/action";
import { Box, Table, TableBody, TableCell, TableRow } from "@mui/material";
import { useStateMachine } from "little-state-machine";

export const OverviewData = () => {
    const { state } = useStateMachine({ updateAction });

    return (
        <Box mt={2} mb={2}>
            <Table size="small">
                <TableBody>
                    <TableRow>
                        <TableCell colSpan={2} align="left">Monthly Spend</TableCell>
                        <TableCell colSpan={2} align="right" sx={{ fontWeight: "bold" }}>{state?.electricity_spend}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2} align="left">Electricity band group</TableCell>
                        <TableCell colSpan={2} align="right" sx={{ fontWeight: "bold" }}>{state?.price_band}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2} align="left">Coverage Percentage</TableCell>
                        <TableCell colSpan={2} align="right" sx={{ fontWeight: "bold" }}>{state?.solar_load}%</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2} align="left">Battery Autonomy</TableCell>
                        <TableCell colSpan={2} align="right" sx={{ fontWeight: "bold" }}>
                            {state?.battery_autonomy_days && state?.battery_autonomy_days != 0 ? `${state?.battery_autonomy_days} Day(s)` : ""}
                            {" "}
                            {state?.battery_autonomy_hours_only && state?.battery_autonomy_hours_only != 0 ? `${state?.battery_autonomy_hours_only} Hour(s)` : ""}

                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Box>
    )
}