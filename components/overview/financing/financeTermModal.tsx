"use client";

import { financeTermTears, interestRateValue, interestTermValue } from "@/utils/formData";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormHelperText, FormLabel, Grid2, MenuItem, OutlinedInput, Select, useMediaQuery, useTheme } from "@mui/material";
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

    const onSubmit = async (data: any) => {
        console.log("Form Data:", data);
        onClose(1);
    }

    return (
        <Dialog
            fullScreen={fullScreen}
            open={isOpen}
            onClose={onClose}
        >

            <form onSubmit={handleSubmit(onSubmit)}>
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

                                    {financeTermTears && financeTermTears.map(financeTermTear => (
                                        <MenuItem value={financeTermTear.value}>{financeTermTear.label}</MenuItem>
                                    ))}
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
                    <Button autoFocus variant="outlined" onClick={onClose}>
                        Close
                    </Button>
                    <Button type="submit" variant="contained" autoFocus>
                        Submit
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}