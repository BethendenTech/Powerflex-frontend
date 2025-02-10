import { Box, Button, Card, CardContent, CardHeader, Checkbox, FormControlLabel, FormGroup, Grid2, Stack, Typography } from "@mui/material";
import { ShowPrice } from "./showPrice";
import Image from "next/image";

export const PackageDetail = (props: any) => {
    const { item } = props;

    console.log("PackageDetail", item)

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
                                <CardContent>
                                    <FormGroup>
                                        {item.appliances && item.appliances.map((appliance: any) => {
                                            return (
                                                <FormControlLabel
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
                            <Card sx={{ textAlign: "center", alignItems: "center", alignContent: "center" }}>
                                <CardHeader title="Save up to 50% on power bills" />
                                <CardContent>
                                    <ShowPrice item={item} />

                                    <Button variant="contained">Buy Now</Button>

                                    <Stack direction="row" spacing={1}>
                                        <Typography gutterBottom>Power up sustainably</Typography>
                                        <Image src="/images/package/green.svg" alt="solar-panel" width={50} height={50} />
                                        <Typography gutterBottom>cut your carbon footprint</Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid2>
                    </Grid2>
                </CardContent>
            </Card>
        </Box>
    )
}