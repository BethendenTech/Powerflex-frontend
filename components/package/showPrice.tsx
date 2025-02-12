import { Box, Typography } from "@mui/material"

export const ShowPrice = (props: any) => {
    const { item, isSelected } = props

    if (item.discount_price) {
        return (
            <Box>
                <Typography color={isSelected ? "#fff" : "#333"} sx={{ textDecoration: 'line-through' }}>₦{item.price}</Typography>
                <Typography color={isSelected ? "#fff" : "#333"}>₦{item.discount_price}</Typography>
            </Box>
        )
    } else {
        return (
            <Typography color={isSelected ? "#fff" : "#333"}>₦{item.price}</Typography>
        )
    }
}