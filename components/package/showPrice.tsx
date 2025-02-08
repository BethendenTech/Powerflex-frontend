import { Box, Typography } from "@mui/material"

export const ShowPrice = (props: any) => {
    const { item } = props

    if (item.discount_price) {
        return (
            <Box>
                <Typography sx={{ textDecoration: 'line-through' }}>₦{item.price}</Typography>
                <Typography>₦{item.discount_price}</Typography>
            </Box>
        )
    } else {
        return (
            <Typography>₦{item.price}</Typography>
        )
    }
}