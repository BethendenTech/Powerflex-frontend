import { AccordionSummary, Box, FormLabel, styled, TableCell, Typography } from "@mui/material";

export const FormTitle = styled(FormLabel)(({ }) => ({
    fontFamily: "'Harmonia Sans Pro', sans-serif",
    fontWeight: 400,
    fontSize: "16px",
    color: "#424242"
}));

export const Heading = styled(Typography)(({ }) => ({
    fontFamily: "'Harmonia Sans Pro', sans-serif",
    fontWeight: 400,
    fontSize: "20px",
    color: "#000000",
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

// export const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
//     // display: "flex",
//     // alignItems: "center",
//     // justifyContent: "space-between",
//     flexDirection: "column", // Stack text and expand icon vertically
//     flexGrow: 1,
//     "& .MuiAccordionSummary-content": {
//         margin: 0,
//         display: "flex",
//         // alignItems: "center",
//         justifyContent: "center", // Center-align the text horizontally
//         width: "100%",
//         // textAlign: "center", // Optional for text alignment
//     },
// }));

// export const TitleContainer = styled(Box)({
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     textAlign: "center",
//     width: "100%",
// });

// export const CustomExpandIcon = styled(Box)(({ theme }) => ({
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
// }));

// export const CheckboxContainer = styled(Box)({
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     width: "100%",
// });

export const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    flexDirection: "column", // Stack text and expand icon vertically
    "& .MuiAccordionSummary-content": {
        margin: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative", // Parent container for relative positioning
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
    right: "-20px", // Position the checkbox on the far right
    top: "-14px",
    display: "flex",
    alignItems: "center",
});

export const CustomExpandIcon = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    marginTop: 4
    // position: "absolute",
    // right: "16px",
}));