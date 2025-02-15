import { renderNaira } from "@/utils/currency";
import { Box, Button, Card, CardContent, CardHeader, Checkbox, Grid2, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const PackageDetail = (props: any) => {
    const { item } = props;
    const router = useRouter();

    const handleSelect = () => {
        router.push(`/package/${item.id}`);
    }

    return (
        <Box key={`package-detail-view-${item.id}`} sx={{
            display: "flex",
            justifyContent: "center",
            margin: "50px 0px 0px 0px",
        }}>
            <Card sx={{
                position: "relative",
                width: "100%",
                borderRadius: 3,
                boxShadow: 5,
                bgcolor: "#e9f5ff",
                border: "1px solid #1a61ee",
            }}>
                <CardHeader
                    title={item.name}
                    sx={{
                        bgcolor: "#2755EB",
                        p: 2,
                        borderRadius: "10px 10px 0px 0px",
                    }}
                    titleTypographyProps={{
                        color: "#fff",
                    }}
                />
                <CardContent>
                    <Grid2 container spacing={2}>
                        <Grid2 size={{
                            xs: 12,
                            sm: 12,
                            md: 4,
                            lg: 4,
                            xl: 4,
                        }}>


                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                mb={1}
                                bgcolor="white"
                                color="primary"
                                p={1.5}
                                sx={{ borderRadius: "10px 10px 0px 0px" }}
                            >
                                Powered Appliances
                            </Typography>
                            <Box
                                sx={{
                                    py: "10px",
                                    bgcolor: "white",
                                    borderRadius: "0px 0px 10px 10px",
                                }}
                            >
                                <List>


                                    {item?.appliances.map((item, index) => (
                                        <ListItem key={index} sx={{ py: 0 }}>
                                            <ListItemIcon>
                                                <Checkbox defaultChecked />
                                            </ListItemIcon>
                                            <ListItemText primary={item.name} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Grid2>
                        <Grid2 size={{
                            xs: 12,
                            sm: 12,
                            md: 4,
                            lg: 4,
                            xl: 4,
                        }}>

                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                mt={1}
                                bgcolor="white"
                                color="primary"
                                p={1.5}
                                sx={{ borderRadius: "10px 10px 0px 0px" }}
                            >
                                Runtime
                            </Typography>
                            <Box
                                bgcolor="white"
                                height={230}
                                sx={{ marginTop: "8px", borderRadius: "0px 0px 10px 10px" }}
                            >
                                <Typography variant="body1" sx={{ padding: "15px" }}>
                                    {item.runtime}
                                </Typography>
                            </Box>


                        </Grid2>
                        <Grid2 size={{
                            xs: 12,
                            sm: 12,
                            md: 4,
                            lg: 4,
                            xl: 4,
                        }}>

                            <Box textAlign={"center"}>


                                <Typography
                                    variant="subtitle1"
                                    color="primary"
                                    fontWeight="bold"
                                    mb={4}
                                >
                                    Save up to 50% on power bills
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color="primary"
                                    fontWeight="bold"
                                    mb={3}
                                >
                                    {renderNaira(item.price)}
                                </Typography>

                                <Button variant="contained" sx={{ borderRadius: 3, px: 5, py: 1 }} onClick={() => handleSelect()}>Buy Now</Button>

                                <Box display={"flex"} alignItems={"center"} justifyContent={"center"} mt={2} >

                                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
                                        <Typography gutterBottom sx={{ fontSize: 14 }}>Power up sustainably</Typography>
                                        <Image src="/images/package/green.svg" alt="solar-panel" width={50} height={50} style={{ marginLeft: 2, marginRight: 2 }} />
                                        <Typography gutterBottom sx={{ fontSize: 14 }}>cut your carbon footprint</Typography>
                                    </Box>
                                </Box>
                            </Box>

                        </Grid2>
                    </Grid2>
                </CardContent>
            </Card>
        </Box>
    )
}