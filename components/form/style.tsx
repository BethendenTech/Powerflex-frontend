import { FormLabel, styled, TableCell, Typography } from "@mui/material";

export const FormTitle = styled(FormLabel)(({ }) => ({
    fontFamily: "'Harmonia Sans Pro', sans-serif",
    fontWeight: 400,
    fontSize: "16px",
    color: "#424242"
}));

export const Title = styled(Typography)(({ }) => ({
    fontFamily: "'Harmonia Sans Pro', sans-serif",
    fontWeight: "bold",
    fontSize: "16px",
    color: "#424242"
}));

export const TableCellName = styled(TableCell)(({ }) => ({
    fontFamily: "'Harmonia Sans Pro', sans-serif",
    fontWeight: 400,
    fontSize: "16px",
    color: "#424242"
}));