import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  Grid2,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";
import { PackageDetail } from "./packageDetail";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { ShowPrice } from "./showPrice";
// import { ShowPrice } from "./showPrice";

export const PackageList = () => {
  const [data, setData] = React.useState<any>();
  const [loading, setLoading] = React.useState(true);
  const [selected, setSelected] = React.useState<any>();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/package/packages/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setData(data);
        setLoading(false);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  console.log("data", data);
  const DiscountBadge = styled("div")({
    position: "absolute",
    top: "-10px",
    right: "-20px",
    background: "linear-gradient(135deg, #ff007a, #ff4d4d)",
    color: "white",
    padding: "10px 15px",
    borderRadius: "5px",
    transform: "rotate(20deg)",
    fontWeight: "bold",
    boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
  });

  const appliances = [
    "Lighting (15 LED bulbs)",
    "Refrigerator",
    "2 Fans",
    "3 Laptops",
    "1 AC 1.5hp",
  ];

  return (
    <Box pt={2} pb={5}>
      <Container maxWidth="lg">
        <Box mb={5} textAlign="center">
          <Typography
            gutterBottom
            variant="h3"
            fontWeight="bold"
            color="#2755EB"
          >
            Tailored Energy Solutions for Every Need!
          </Typography>
          <Typography color="#2755EB">
            Explore our packages designed to meet your energy requirements and
            help you save on costs.
          </Typography>
        </Box>

        {loading && (
          <Grid2 container spacing={3}>
            <Grid2
              size={{
                xs: 12,
                sm: 12,
                md: 4,
                lg: 4,
                xl: 4,
              }}
            >
              <Card>
                <CardContent>
                  <Skeleton animation="wave" height={100} width="100%" />
                  <Skeleton animation="wave" height={100} width="100%" />
                </CardContent>
                <CardActions>
                  <Skeleton animation="wave" height={100} width="100%" />
                </CardActions>
              </Card>
            </Grid2>
            <Grid2
              size={{
                xs: 12,
                sm: 12,
                md: 4,
                lg: 4,
                xl: 4,
              }}
            >
              <Card>
                <CardContent>
                  <Skeleton animation="wave" height={100} width="100%" />
                  <Skeleton animation="wave" height={100} width="100%" />
                </CardContent>
                <CardActions>
                  <Skeleton animation="wave" height={100} width="100%" />
                </CardActions>
              </Card>
            </Grid2>
            <Grid2
              size={{
                xs: 12,
                sm: 12,
                md: 4,
                lg: 4,
                xl: 4,
              }}
            >
              <Card>
                <CardContent>
                  <Skeleton animation="wave" height={100} width="100%" />
                  <Skeleton animation="wave" height={100} width="100%" />
                </CardContent>
                <CardActions>
                  <Skeleton animation="wave" height={100} width="100%" />
                </CardActions>
              </Card>
            </Grid2>
          </Grid2>
        )}

        <Grid2 container spacing={3}>
          {data &&
            data.map((item) => {
              const isSelected = item.id == selected?.id;
              return (
                <Grid2
                  key={item.id}
                  size={{
                    xs: 12,
                    sm: 12,
                    md: 4,
                    lg: 4,
                    xl: 4,
                  }}
                >
                  <Card
                    sx={isSelected ? { bgcolor: "#2755EB", font: "#fff" } : {}}
                  >
                    <CardMedia
                      sx={{ height: 150 }}
                      image={`${process.env.NEXT_PUBLIC_BASE_URL}${item.image}`}
                      title={item.name}
                    />

                    <CardContent>
                      <ShowPrice item={item} isSelected={isSelected} />

                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontWeight="bold"
                        color={isSelected ? "#fff" : "#2755EB"}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color={isSelected ? "#fff" : "#333"}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>

                    <CardActions>
                      <Button
                        variant="outlined"
                        onClick={() => setSelected(item)}
                        sx={{
                          color: isSelected ? "#fff" : "#333",
                          borderColor: isSelected ? "#fff" : "#333",
                        }}
                      >
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid2>
              );
            })}
        </Grid2>

        {loading && (
          <Grid2 container spacing={3}>
            <Grid2
              size={{
                xs: 12,
                sm: 12,
                md: 4,
                lg: 4,
                xl: 4,
              }}
            >
              <Card>
                <CardContent>
                  <Skeleton animation="wave" height={100} width="100%" />
                  <Skeleton animation="wave" height={100} width="100%" />
                </CardContent>
                <CardActions>
                  <Skeleton animation="wave" height={100} width="100%" />
                </CardActions>
              </Card>
            </Grid2>
            <Grid2
              size={{
                xs: 12,
                sm: 12,
                md: 4,
                lg: 4,
                xl: 4,
              }}
            >
              <Card>
                <CardContent>
                  <Skeleton animation="wave" height={100} width="100%" />
                  <Skeleton animation="wave" height={100} width="100%" />
                </CardContent>
                <CardActions>
                  <Skeleton animation="wave" height={100} width="100%" />
                </CardActions>
              </Card>
            </Grid2>
            <Grid2
              size={{
                xs: 12,
                sm: 12,
                md: 4,
                lg: 4,
                xl: 4,
              }}
            >
              <Card>
                <CardContent>
                  <Skeleton animation="wave" height={100} width="100%" />
                  <Skeleton animation="wave" height={100} width="100%" />
                </CardContent>
                <CardActions>
                  <Skeleton animation="wave" height={100} width="100%" />
                </CardActions>
              </Card>
            </Grid2>
          </Grid2>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "50px 0px 0px 0px",
          }}
        >
          <Paper
            sx={{
              position: "relative",
              width: "100%",
              borderRadius: 3,
              boxShadow: 5,
              bgcolor: "#e9f5ff",
              border: "1px solid #1a61ee",
            }}
          >
            {/* Top Blue Header */}
            <Box
              sx={{
                bgcolor: "#003399",
                p: 2,
                borderRadius: "10px 10px 0px 0px",
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: "white" }}
              >
                6kVA Package
              </Typography>
            </Box>

            {/* Main Content using Grid2 */}
            <Grid2 container>
              {/* Left Section - Appliances */}
              <Grid2
                size={{ xs: 12, md: 4 }}
                sx={{
                  p: 3,
                }}
              >
                <List>
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
                    {appliances.map((item, index) => (
                      <ListItem key={index} sx={{ py: 0 }}>
                        <ListItemIcon>
                          <Checkbox {...label} defaultChecked />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </Box>
                </List>
              </Grid2>

              {/* Middle Section - Runtime */}
              <Grid2
                size={{ xs: 12, md: 4 }}
                sx={{
                  p: 3,
                }}
              >
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
                    Up to 10 hours! Extendable with sunlight and smart load
                    management.
                  </Typography>
                </Box>
              </Grid2>

              {/* Right Section - Price and Buy */}
              <Grid2
                size={{ xs: 12, md: 4 }}
                sx={{ p: 3, textAlign: "center" }}
              >
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
                  ₦6,391,378
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ borderRadius: 3, px: 5, py: 1 }}
                >
                  Buy Now
                </Button>

                {/* Eco-friendly Message */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 3,
                  }}
                >
                  <Image
                    src=""
                    alt="eco"
                    width={25}
                    style={{ marginRight: 5 }}
                  />
                  <Typography variant="caption" color="text.secondary">
                    Power up sustainably & cut your carbon footprint
                  </Typography>
                </Box>
              </Grid2>
            </Grid2>

            {/* Discount Badge */}
            <DiscountBadge>50%</DiscountBadge>
          </Paper>
        </Box>

        {selected && <PackageDetail item={selected} />}
      </Container>
    </Box>
  );
};
