import { Box, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { TableCellName } from "../form/style"
import React from "react"

export const PackageTotals = (props) => {
    const { id, is_finance } = props
    const [data, setData] = React.useState<any>();
    const [loading, setLoading] = React.useState(true);

    const getData = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/package/package-request/`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        package_id: id,
                        is_finance: is_finance,
                    })

                }
            );

            if (response.ok) {
                const data = await response.json();
                setData(data);
                setLoading(false);
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        if (id) {
            getData();
        }
    }, [id]);

    if (loading) {
        return <div>Loading...</div>
    }

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

                    {data?.details?.map((item, index) => (
                        <TableRow key={`detail-${index}`}>
                            <TableCellName align="left">
                                {item.title}
                            </TableCellName>
                            <TableCellName align="left">
                                {item.quantity}
                            </TableCellName>
                            <TableCellName align="right">
                                {item.cost}
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
                            {data?.total_cost}
                        </TableCellName>
                    </TableRow>
                </TableBody>
            </Table>
        </Box>
    )
}