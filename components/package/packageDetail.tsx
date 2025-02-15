import { Box, Button, Card, CardContent, CardHeader, Checkbox, FormControlLabel, FormGroup, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import { ShowPrice } from "./showPrice";

export const PackageDetail = (props: any) => {
    const { item } = props;
    return (
        <Box>
            <Card>
                <CardHeader
                    title={item.name}
                />
                <CardContent>
                    <Grid2 container spacing={2}>
                        <Grid2 size={{
                            xs: 12,
                            sm: 12,
                            md: 3,
                            lg: 3,
                            xl: 3,
                        }}>
                            <Card>
                                <CardHeader title="Powered Appliances" />
                                <CardContent sx={{
                                    overflowX: 'auto',
                                    scrollBehavior: "smooth",
                                    height: 200,
                                }}>
                                    <FormGroup>
                                        {item?.appliances.map((appliance: any,index) => {
                                            return (
                                                <FormControlLabel
                                                key={index}
                                                    control={
                                                        <Checkbox name={appliance.id} />
                                                    }
                                                    label={appliance.name}
                                                />
                                            )
                                        })}
                                    </FormGroup>
                                </CardContent>
                            </Card>
                        </Grid2>
                        <Grid2 size={{
                            xs: 12,
                            sm: 12,
                            md: 3,
                            lg: 3,
                            xl: 3,
                        }}>
                            <Card>
                                <CardHeader title="Runtime" />
                                <CardContent>
                                    {item.runtime}
                                </CardContent>
                            </Card>
                        </Grid2>
                        <Grid2 size={{
                            xs: 12,
                            sm: 12,
                            md: 6,
                            lg: 6,
                            xl: 6,
                        }}>
                            <Card sx={{ textAlign: "center" }}>
                                <CardHeader title="Save up to 50% on power bills" />
                                <CardContent sx={{ height: 200 }}>

                                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
                                        <Box width={200} >
                                            <ShowPrice item={item} />
                                            <Button variant="contained" fullWidth>Buy Now</Button>
                                        </Box>
                                    </Box>

                                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} mt={2}>

                                        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
                                            <Typography gutterBottom>Power up sustainably</Typography>
                                            <Image src="/images/package/green.svg" alt="solar-panel" width={50} height={50} style={{ marginLeft: 2, marginRight: 2 }} />
                                            <Typography gutterBottom>cut your carbon footprint</Typography>
                                        </Box>
                                    </Box>

                                </CardContent>
                            </Card>
                        </Grid2>
                    </Grid2>
                </CardContent>
            </Card>
        </Box>
    )
}