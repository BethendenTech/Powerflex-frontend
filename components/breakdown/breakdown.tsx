"use client";

import { ChangeEvent, useEffect, useState } from 'react';
import Image from "next/image";
import { allElements } from '@/utils/formData';
import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, FormControlLabel, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import TimeDropdown from './TimeDropdown';
interface BreakdownProps {
    breakdowns: any,
    onBreakdownChange: (sata: any) => void;
}


export default function Breakdown({ onBreakdownChange, breakdowns }: BreakdownProps) {

    const [formData, setFormData] = useState<any>({});

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.checked) {
            setFormData({
                ...formData,
                [e.target.name]: e.target.checked,
                [e.target.name + '_quantity']: 0,
                [e.target.name + '_usage']: 0,
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.checked,
            });
        }
    };

    const handleSelectChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        onBreakdownChange(formData);
    }, [formData]);

    useEffect(() => {
        // Initialize formData with breakdown values or default empty values
        const initialFormData = breakdowns || {};

        allElements.forEach((element) => {
            if (element.items) {
                element.items.forEach((item) => {
                    if (!(item.name in initialFormData)) {
                        initialFormData[item.name] = false; // for checkbox
                        initialFormData[`${item.name}_quantity`] = 0; // for quantity
                        initialFormData[`${item.name}_usage`] = 0; // for usage
                    }
                });
            }
        });

        setFormData(initialFormData);
    }, [breakdowns]);

    interface RowObject {
        name: string;
        displayName: string;
        value: string;
        power_w: number;
        hours_per_day: number;
        quantity: number;
    }

    interface AccordianObject {
        name: string;
        displayName: string;
        items: RowObject[];
    }

    const renderRow = (props: RowObject) => {

        const { name, displayName } = props;
        console.log(formData[name], displayName)
        return (
            <TableBody>
                <TableRow>
                    <TableCell>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    id={name}
                                    name={name}
                                    checked={Boolean(formData[name])}
                                    onChange={(event) => handleCheckboxChange(event)}
                                />
                            }
                            label={displayName}
                        />
                    </TableCell>
                    <TableCell>

                        <Select
                            name={`${name}_quantity`}
                            value={formData[`${name}_quantity`] || 0}
                            onChange={handleSelectChange}
                            fullWidth
                            size='small'
                            disabled={!formData[name]}
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
                                <MenuItem key={`${name}-${i}`} value={i}>
                                    {i}
                                </MenuItem>
                            ))}
                        </Select>
                    </TableCell>
                    <TableCell>
                        <TimeDropdown
                            label=""
                            name={`${name}_usage`}
                            value={formData[`${name}_usage`] || 0}
                            onChange={handleSelectChange}
                            disabled={!formData[name]}
                        />
                    </TableCell>

                </TableRow>
            </TableBody>
        );
    }

    const renderAccordianWithRows = (props: AccordianObject) => {
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
                        {props.name}
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

                        {props.items.map((row: any) => (
                            renderRow(row)
                        ))}

                    </Table>
                </AccordionDetails>
            </Accordion>
        );
    }

    return (
        <Box>
            <>
                {allElements.map((row: any) => {
                    if (row.type === "accordian") {
                        return renderAccordianWithRows(row);
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
            </>
        </Box>
    );
}
