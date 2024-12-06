"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";
import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, FormControlLabel, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import TimeDropdown from './TimeDropdown';
interface BreakdownProps {
    register: any,
    watch: any,
    errors: any,
}


export default function Breakdown({ register, watch, errors }: BreakdownProps) {

    const [applianceData, setApplianceData] = useState<any>([]);

    useEffect(() => {
        getAppliances();
    }, [])

    const getAppliances = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/categories/`);

        if (response.ok) {
            const data = await response.json();
            console.log("data", data)
            setApplianceData(data)
        }
    }

    interface RowObject {
        id: any;
        name: string;
        value: string;
        power_w: number;
        hours_per_day: number;
        quantity: number;
    }

    interface AccordionObject {
        id: number;
        name: string;
        appliances: RowObject[];
    }

    const renderRow = (props: RowObject) => {
        const { id, name } = props;

        return (
            <TableBody>
                <TableRow>
                    <TableCell>

                        <FormControlLabel
                            control={
                                <Checkbox
                                    {...register(`breakdowns[${id}].id`)}
                                    checked={watch(`breakdowns.${id}.id`) || false}
                                />
                            }
                            label={name}
                        />
                    </TableCell>
                    <TableCell>
                        <Select
                            {...register(`breakdowns[${id}].quantity`)}
                            value={watch(`breakdowns.${id}.quantity`)}
                            disabled={!watch(`breakdowns.${id}.id`)}
                            fullWidth
                            size='small'
                            IconComponent={UnfoldMoreIcon}
                            sx={{
                                borderRadius: 12,
                                backgroundColor: "#257FE6",
                                color: "#fff",
                                border: "none",
                                '& .MuiSelect-icon': {
                                    color: '#fff !important',
                                },
                                '& .Mui-disabled': {
                                    color: "#eee",
                                    '-webkit-text-fill-color': '#eee !important',
                                },
                            }}
                        >
                            {Array.from({ length: 51 }, (_, i) => (
                                <MenuItem key={`quantity-${id}-${i}`} value={i}>
                                    {i}
                                </MenuItem>
                            ))}
                        </Select>
                    </TableCell>
                    <TableCell>
                        <TimeDropdown
                            label=""
                            name=''
                            disabled={!watch(`breakdowns.${id}.id`)}
                            {...register(`breakdowns[${id}].usage`)}
                            value={watch(`breakdowns.${id}.usage`)}
                        />
                    </TableCell>

                </TableRow>
            </TableBody>
        );
    }

    const renderAccordionWithRows = (props: AccordionObject) => {
        const { appliances, name } = props

        return (
            <Accordion>
                <AccordionSummary
                    expandIcon={
                        <Image
                            src="/images/collaps-arrow-down.svg"
                            alt="expand"
                            width={24}
                            height={24}
                        />
                    }
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        px: 3,
                    }}
                >
                    <Typography sx={{ fontWeight: 600, color: 'black' }}>
                        {name}
                    </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{ px: 3 }}>

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
                                <TableCell></TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Hours</TableCell>
                            </TableRow>
                        </TableHead>

                        {appliances && appliances.map((row: any, index: any) => (
                            renderRow(row)
                        ))}

                    </Table>
                </AccordionDetails>
            </Accordion>
        );
    }

    return (
        <Box>
            {applianceData && applianceData.map((row: any, index: any) => {
                if (row.type === "accordion") {
                    return renderAccordionWithRows(row);
                } else {
                    return (
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
                                    <TableCell></TableCell>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell>Hours</TableCell>
                                </TableRow>
                            </TableHead>
                            {renderRow(row)}
                        </Table>
                    );
                }
            })}
        </Box>
    );
}
