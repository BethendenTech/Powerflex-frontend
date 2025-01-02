"use client";

import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, FormControlLabel, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow, } from '@mui/material';
import Image from "next/image";
import { useEffect, useState } from 'react';
import TimeDropdown from './TimeDropdown';
import { Description, TableCellName } from '../form/style';
interface BreakdownProps {
    register: any,
    watch: any,
    errors: any,
    setValue: any,
}

export default function Breakdown({ register, watch, errors, setValue }: BreakdownProps) {

    const [applianceData, setApplianceData] = useState<any>([]);

    useEffect(() => {
        getAppliances();
    }, [])

    const getAppliances = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/categories/`);

        if (response.ok) {
            const data = await response.json();
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

    const renderRow = (props: RowObject, index: number) => {
        const { id, name } = props;

        const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const isChecked = event.target.checked;
            if (!isChecked) {
                setValue(`breakdowns.${index}.appliance_id`, false);
                setValue(`breakdowns.${index}.quantity`, ""); // Reset quantity
                setValue(`breakdowns.${index}.usage`, "");  // Reset usage
            } else {
                setValue(`breakdowns.${index}.appliance_id`, id);
            }
        };

        return (
            <TableRow key={`table-row-${index}`}>
                <TableCell>
                    <FormControlLabel
                        sx={{
                            '&.MuiFormControlLabel-root .MuiFormControlLabel-label': {
                                fontFamily: "'Harmonia Sans Pro', sans-serif",
                                fontWeight: 400,
                                fontSize: "14px",
                                color: "#424242",
                            },
                        }}
                        control={
                            <Checkbox
                                checked={watch(`breakdowns.${index}.appliance_id`) || false}
                                onChange={handleCheckboxChange}
                            />
                        }
                        label={name}
                    />
                </TableCell>
                <TableCell>
                    <Select
                        {...register(`breakdowns.${index}.quantity`)}
                        value={watch(`breakdowns.${index}.quantity`)}
                        disabled={!watch(`breakdowns.${index}.appliance_id`)}
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
                        disabled={!watch(`breakdowns.${index}.appliance_id`)}
                        {...register(`breakdowns.${index}.usage`)}
                        value={watch(`breakdowns.${index}.usage`)}
                    />
                </TableCell>

            </TableRow>
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
                    <Description sx={{ textAlign: 'left' }}>
                        {name}
                    </Description>
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
                                <TableCellName sx={{ fontSize: '14px', textAlign: 'center' }}>Quantity</TableCellName>
                                <TableCellName sx={{ fontSize: '14px', textAlign: 'center' }}>How Long?</TableCellName>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {appliances && appliances.map((row: any, index: number) => (
                                renderRow(row, index)
                            ))}
                        </TableBody>

                    </Table>
                </AccordionDetails>
            </Accordion>
        );
    }

    return (
        <Box>
            {applianceData && applianceData.map((row: any, index: number) => {
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
                                    <TableCellName sx={{ fontSize: '14px', textAlign: 'center' }}>Quantity</TableCellName>
                                    <TableCellName sx={{ fontSize: '14px', textAlign: 'center' }}>Hours</TableCellName>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {renderRow(row, index)}
                            </TableBody>
                        </Table>
                    );
                }
            })}
        </Box>
    );
}
