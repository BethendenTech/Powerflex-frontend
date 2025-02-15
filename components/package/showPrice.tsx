import { Box, Typography } from "@mui/material";

export const ShowPrice = (props: any) => {
  const { item, isSelected } = props;

  if (item.discount_price) {
    return (
      <Box
        bgcolor={isSelected ? "#fff" : "#2755EB"}
        sx={{
          transition: "0.3s",
          borderRadius: "0px 15px 15px 0px",
          width: "130px",
          px: "10px",
          py: "4px",
        }}
      >
        {/* <Typography color={isSelected ? "#fff" : "#333"} sx={{ textDecoration: 'line-through' }}>₦{item.price}</Typography> */}
        <Typography color={isSelected ? "primary" : "#fff"}>
          ₦{item.discount_price}
        </Typography>
      </Box>
    );
  } else {
    return (
      <Typography color={isSelected ? "#fff" : "#333"}>
        ₦{item.price}
      </Typography>
    );
  }
};
