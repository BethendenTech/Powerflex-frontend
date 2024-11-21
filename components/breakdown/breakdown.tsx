"use client";

import { ChangeEvent, useEffect, useState } from 'react';
import Image from "next/image";
import { allElements } from '@/utils/formData';
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid2, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

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

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
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
        return (
            <TableBody>
                <TableRow>
                    <TableCell>
                        <label htmlFor={props.name}>
                            <input
                                id={props.name}
                                className="mr-[8px] border-[#257FE6] border-2 custom-checkbox"
                                type='checkbox'
                                name={props.name}
                                checked={formData[props.name]}
                                onChange={handleCheckboxChange}
                            />
                            {props.displayName}
                        </label>
                    </TableCell>
                    <TableCell>
                        <select
                            className="select mini-select w-4/5"
                            name={`${props.name}_quantity`}
                            value={formData[`${props.name}_quantity`] || 0} // Fallback to 0 if undefined
                            onChange={handleSelectChange}
                            disabled={!formData[props.name]}
                        >
                            {Array.from({ length: 51 }, (_, i) => (
                                <option key={props.name + i} value={i}>
                                    {i}
                                </option>
                            ))}
                        </select>
                    </TableCell>
                    <TableCell>
                        <select
                            className="select mini-select w-4/5 text-black"
                            name={`${props.name}_usage`}
                            value={formData[`${props.name}_usage`] || 0} // Fallback to 0 if undefined
                            onChange={handleSelectChange}
                            disabled={!formData[props.name]}
                        >
                            {Array.from({ length: 25 }, (_, i) => (
                                <option key={props.name + 'u' + i} value={i}>
                                    {i}
                                </option>
                            ))}
                        </select>
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
                                <TableCell>First Column</TableCell>
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
                                        <TableCell>First Column</TableCell>
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
