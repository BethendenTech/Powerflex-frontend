"use client";

import { financeTermTears, interestRateValue, interestTermValue } from "@/utils/formData";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormHelperText, FormLabel, Grid, Grid2, Menu, MenuItem, OutlinedInput, Select, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface FinancingTermModalProps {
    isOpen: boolean;
    onClose: (sata: any) => void;
}

export const FinancingTermModal = ({ isOpen, onClose }: FinancingTermModalProps) => {
    if (!isOpen) return null;

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            total_cost: "",
            down_payment: "",
            term: interestTermValue,
            interest_rate: interestRateValue,
        }
    });

    const onSubmit = async () => {
    }

    return (
        <Dialog
            fullScreen={fullScreen}
            open={isOpen}
            onClose={onClose}

        >
            <DialogTitle>
                Finance Terms
            </DialogTitle>
            <DialogContent>

                <Grid2 container gap={2}>
                    <Grid2 size={5}>
                        <FormControl
                            fullWidth
                            error={!!errors.total_cost}
                        >
                            <FormLabel>
                                Total Cost
                            </FormLabel>
                            <OutlinedInput
                                type='text'
                                {...register("total_cost", { required: "Total Cost is required" })}
                            />
                            <FormHelperText>{errors?.total_cost?.message}</FormHelperText>
                        </FormControl>
                    </Grid2>
                    <Grid2 size={5}>
                        <FormControl
                            fullWidth
                            error={!!errors.down_payment}
                        >
                            <FormLabel>
                                Down payment (min 30%)
                            </FormLabel>
                            <OutlinedInput
                                type='text'
                                {...register("down_payment", { required: "Down Payment is required" })}
                            />
                            <FormHelperText>{errors?.down_payment?.message}</FormHelperText>
                        </FormControl>
                    </Grid2>
                    <Grid2 size={5}>
                        <FormControl
                            fullWidth
                            error={!!errors.term}
                        >
                            <FormLabel>
                                Term
                            </FormLabel>
                            <Select
                                type='text'
                                {...register("term", { required: "Term is required" })}
                            >

                                <MenuItem value="3">3 months</MenuItem>
                                <MenuItem value="6">6 months</MenuItem>
                                <MenuItem value="12">12 months</MenuItem>
                            </Select>
                            <FormHelperText>{errors?.term?.message}</FormHelperText>
                        </FormControl>
                    </Grid2>
                    <Grid2 size={5}>
                        <FormControl
                            fullWidth
                            error={!!errors.interest_rate}
                        >
                            <FormLabel>
                                Interest Rate
                            </FormLabel>
                            <OutlinedInput
                                type='text'
                                {...register("interest_rate", { required: "Interest Rate is required" })}
                            />
                            <FormHelperText>{errors?.interest_rate?.message}</FormHelperText>
                        </FormControl>
                    </Grid2>
                </Grid2>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={onClose}>
                    Close
                </Button>
                <Button onClick={onClose} autoFocus>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
}