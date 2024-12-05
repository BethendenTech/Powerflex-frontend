"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";
import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, FormControlLabel, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import TimeDropdown from './TimeDropdown';
interface BreakdownProps {
    breakdowns: any,
    register: any,
    setValue: any,
}


export default function Breakdown({ breakdowns, register, setValue }: BreakdownProps) {
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

    const renderRow = (props: RowObject, index: any) => {
        const { id, name } = props;

        return (
            <TableBody>
                <TableRow>
                    <TableCell>
                        {breakdowns[index]?.id}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    // {...register(`breakdowns[${index}].id`)}
                                    checked={breakdowns[index]?.id}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setValue(`breakdowns[${index}].id`, id);
                                        } else {
                                            setValue(`breakdowns[${index}].id`, false);
                                            setValue(`breakdowns[${index}].quantity`, "");
                                            setValue(`breakdowns[${index}].usage`, "");
                                        }
                                    }}
                                />
                            }
                            label={name}
                        />
                    </TableCell>
                    <TableCell>
                        <Select
                            // {...register(`breakdowns[${index}].quantity`)}
                            value={breakdowns[index]?.quantity}
                            onChange={(e) => {
                                setValue(`breakdowns[${index}].quantity`, e.target.value);
                            }}
                            disabled={!breakdowns[index]?.id}
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
                                <MenuItem key={`${index}-${i}`} value={i}>
                                    {i}
                                </MenuItem>
                            ))}
                        </Select>
                    </TableCell>
                    <TableCell>
                        <TimeDropdown
                            label=""
                            name=''
                            disabled={!breakdowns[index]?.id}
                            // {...register(`breakdowns[${index}].usage`)}
                            onChange={(e) => {
                                setValue(`breakdowns[${index}].usage`, e.target.value);
                            }}
                            value={breakdowns[index]?.usage}
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
                            renderRow(row, index)
                        ))}

                    </Table>
                </AccordionDetails>
            </Accordion>
        );
    }

    return (
        <Box>
            <>
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
                                {renderRow(row, index)}
                            </Table>
                        );
                    }
                })}
            </>
        </Box>
    );
}
