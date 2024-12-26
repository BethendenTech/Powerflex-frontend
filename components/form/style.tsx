import { AccordionDetails, AccordionSummary, Box, FormControl, FormLabel, styled, TableCell, Typography } from "@mui/material";

export const FormInputField = styled(FormControl)(({ }) => ({
    ".MuiOutlinedInput-root": {
        "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "2px solid #3848C4",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "2px solid #3848C4",
        },
    },
    ".MuiOutlinedInput-notchedOutline": {
        borderWidth: 0,
    },
}));

export const FormTitle = styled(FormLabel)(({ }) => ({
    fontFamily: "'Harmonia Sans Pro', sans-serif",
    fontWeight: 400,
    fontSize: "16px",
    color: "#424242",
    "&.Mui-focused": {
        color: "#424242",
    }
}));

export const Heading = styled(Typography)(({ }) => ({
    fontFamily: "'Harmonia Sans Pro', sans-serif",
    fontWeight: 400,
    fontSize: "20px",
    color: "#000000",
    textAlign: 'center'
}));

export const Description = styled(Typography)(({ }) => ({
    fontFamily: "'Harmonia Sans Pro', sans-serif",
    fontWeight: 400,
    fontSize: "14px",
    color: "#424242",
    textAlign: 'center'
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

export const Detail = styled(AccordionDetails)(({ }) => ({
    fontFamily: "'Harmonia Sans Pro', sans-serif",
    fontWeight: 400,
    fontSize: "16px",
    color: "#000000"
}));



// ACCORDION CSS

export const CustomAccordionSummary = styled(AccordionSummary)(({ }) => ({
    flexDirection: "column",
    "& .MuiAccordionSummary-content": {
        margin: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        width: "100%",
    },
}));

export const TitleContainer = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
});

export const CheckboxContainer = styled(Box)({
    position: "absolute",
    right: "-20px",
    top: "-14px",
    display: "flex",
    alignItems: "center",
});

export const CustomExpandIcon = styled(Box)(({ }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    marginTop: 4,
    // position: "absolute",
    // right: "16px",
}));