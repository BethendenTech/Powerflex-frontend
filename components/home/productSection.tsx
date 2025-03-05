import { Box, Container, Grid2, Typography } from "@mui/material";
import ProductCard from "../product/productCard";

const backgroundImage = "/images/home/bg-products.svg";

const HomeProductSection = () => {
  return (
    <>
      <Box
        id="products"
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          minHeight: "100vh",
          display: {
            lg: "block",
            md: "block",
            sm: "none",
            xs: "none",
          },
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            pt: {
              xs: 20,
              md: 20,
            },
            pb: {
              xs: 10,
              md: 20,
            },
            width: {
              xs: "100%",
              sm: "100%",
              md: "100%",
            },
          }}
        >
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  background: "#2755EB",
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                }}
              >
                <Typography
                  variant="h2"
                  component="h1"
                  fontSize={32}
                  color="#FFFFFF"
                  sx={{ px: 4, py: 2 }}
                >
                  Find the Right Solar Solution for Your Needs
                </Typography>
              </Box>
              <Box
                sx={{
                  background: "#F1F7FE",
                  borderBottomLeftRadius: "20px",
                  borderBottomRightRadius: "20px",
                }}
              >
                <Typography
                  component="h2"
                  fontSize={16}
                  color="#191919"
                  sx={{ px: 4, py: 2 }}
                >
                  Our products are designed to meet a variety of needs, whether
                  you’re powering a small home or a large business
                </Typography>
              </Box>
            </Grid2>
          </Grid2>

          <Grid2 mt={20} container spacing={4}>
            <Grid2 size={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
              <ProductCard
                title="Solar Panels"
                description="Durable and efficient panels to capture maximum energy."
                image="/images/home/solar-panels-image.svg"
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
              <ProductCard
                title="Inverters"
                description="Reliable power conversion for seamless energy use"
                image="/images/home/inverter.svg"
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
              <ProductCard
                title="Batteries"
                description="Energy storage solutions tailored for all-day power."
                image="/images/home/batteries.svg"
              />
            </Grid2>
          </Grid2>
        </Container>
      </Box>
      <Box
        id="products"
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          minHeight: "100vh",
          display: {
            lg: "none",
            md: "none",
            sm: "block",
            xs: "block",
          },
          flexDirection: "column",
          justifyContent: "center",
        }}
      ></Box>
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 1,
          top: "-38px",
          background: "transparent",
          pb: 4,
          display: {
            lg: "none",
            md: "none",
            sm: "block",
            xs: "block",
          },
        }}
      >
        <Box
          sx={{
            background: "#2755EB",
            borderBottomRightRadius: "12px",
            borderTopRightRadius: "12px",
            position: "relative",
            top: {
              sm: "-35px",
              xs: "-35px",
            },
            left: {
              sm: "-60px",
              xs: "-55px",
            },
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            fontSize={32}
            sx={{
              color: "#FFFFFF",
              fontWeight: 700,
              lineHeight: "38.4px",
              textAlign: "left",
              padding: "10px 20px 10px 60px",
            }}
          >
            Find the Right Solar Solution for Your Needs
          </Typography>
        </Box>
        <Box>
          <Typography
            component="h2"
            fontSize={16}
            sx={{
              color: "#191919",
              fontWeight: 400,
              lineHeight: "19.2px",
              textAlign: "left",
            }}
          >
            Our products are designed to meet a variety of needs, whether you’re
            powering a small home or a large business
          </Typography>
        </Box>

        <Grid2 mt={4} container spacing={4}>
          <Grid2 size={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
            <ProductCard
              title="Solar Panels"
              description="Durable and efficient panels to capture maximum energy."
              image="/images/products/solar-panels.svg"
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
            <ProductCard
              title="Inverters"
              description="Reliable power conversion for seamless energy use"
              image="/images/products/inverters.svg"
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
            <ProductCard
              title="Batteries"
              description="Energy storage solutions tailored for all-day power."
              image="/images/products/batteries.svg"
            />
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
};

export default HomeProductSection;
