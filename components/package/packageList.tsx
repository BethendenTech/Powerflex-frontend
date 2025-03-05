import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid2,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";
import { BannerNormalButton } from "../button/style";
import { PackageDetail } from "./packageDetail";
import { ShowPrice } from "./showPrice";

export const PackageList = () => {
  const [data, setData] = React.useState<
    { id: number; image: string; name: string; description: string }[] | null
  >(null);
  const [loading, setLoading] = React.useState(true);
  const [selected, setSelected] = React.useState<{
    id: number;
    image: string;
    name: string;
    description: string;
  } | null>(null);

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

  return (
    <Box pt={2} pb={5}>
      <Container maxWidth="lg">
        <Box
          mb={5}
          textAlign={{ lg: "center", md: "center", sm: "start", xs: "start" }}
        >
          <Typography variant="h3" fontWeight={700} color="#2755EB">
            Tailored Energy Solutions for Every Need!
          </Typography>
          <Typography color="#2755EB" fontWeight={400} fontSize={18} pt={2}>
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
              <Skeleton
                animation="wave"
                height={300}
                width="100%"
                variant="rounded"
              />
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
              <Skeleton
                animation="wave"
                height={300}
                width="100%"
                variant="rounded"
              />
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
              <Skeleton
                animation="wave"
                height={300}
                width="100%"
                variant="rounded"
              />
            </Grid2>
          </Grid2>
        )}

        <Grid2 container spacing={3} mt={3}>
          {data &&
            data.map(
              (item: {
                id: number;
                image: string;
                name: string;
                description: string;
              }) => {
                console.log(
                  "sss",
                  `${process.env.NEXT_PUBLIC_BASE_URL}${item.image}`
                );

                const isSelected = item.id == selected?.id;
                return (
                  <>
                    <Grid2
                      key={item.id}
                      size={{
                        xs: 12,
                        sm: 12,
                        md: 6,
                        lg: 4,
                        xl: 4,
                      }}
                    >
                      <Card
                        sx={{
                          background: isSelected
                            ? "linear-gradient(181deg, #27CEEB, #7227EB, #2755EB)"
                            : "#FFFFFF",
                          borderRadius: "15px",
                          color: isSelected ? "#FFFFFF" : "#000000",
                          overflow: "visible",
                          height: "100%",
                        }}
                      >
                        <CardMedia
                          component="img"
                          sx={{
                            height: 200,
                            borderTopLeftRadius: "15px",
                            borderTopRightRadius: "15px",
                            mb: 2,
                          }}
                          image={`${process.env.NEXT_PUBLIC_BASE_URL}${item.image}`}
                          title={item.name}
                        />
                        <ShowPrice
                          sx={{ position: "absolute" }}
                          item={item}
                          isSelected={isSelected}
                        />
                        <CardContent sx={{ position: "relative" }}>
                          <Typography
                            variant="h5"
                            component="div"
                            fontSize={23}
                            fontWeight={700}
                            color={isSelected ? "#FFFFFF" : "#2755EB"}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            fontWeight={400}
                            fontSize={16}
                            color={isSelected ? "#FFFFFF" : "#000000"}
                            sx={{ height: 100 }}
                          >
                            {item.description}
                          </Typography>
                        </CardContent>

                        <CardActions sx={{ position: "relative", mt: 3 }}>
                          <BannerNormalButton
                            onClick={() => setSelected(item)}
                            sx={{
                              color: isSelected ? "#FFFFFF" : "#000000",
                              borderColor: isSelected ? "#FFFFFF" : "#000000",
                            }}
                            variant="outlined"
                            color="secondary"
                            size="small"
                          >
                            Learn More
                          </BannerNormalButton>

                          {isSelected && (
                            <Box
                              sx={{
                                position: "absolute",
                                width: 0,
                                height: 0,
                                borderColor: "#2954EB",
                                borderLeft: "25px solid transparent",
                                borderRight: "25px solid transparent",
                                borderTop: "25px solid  #2954EB",
                                bottom: "-25px",
                                left: "50%",
                                transform: "translateX(-50%)",
                              }}
                            />
                          )}
                        </CardActions>
                      </Card>
                    </Grid2>
                  </>
                );
              }
            )}
        </Grid2>

        {loading && (
          <Grid2 container spacing={3}>
            <Grid2
              size={{
                xs: 12,
                sm: 12,
                md: 6,
                lg: 4,
                xl: 4,
              }}
            >
              <Skeleton
                animation="wave"
                height={300}
                width="100%"
                variant="rounded"
              />
            </Grid2>
            <Grid2
              size={{
                xs: 12,
                sm: 12,
                md: 6,
                lg: 4,
                xl: 4,
              }}
            >
              <Skeleton
                animation="wave"
                height={300}
                width="100%"
                variant="rounded"
              />
            </Grid2>
            <Grid2
              size={{
                xs: 12,
                sm: 12,
                md: 6,
                lg: 4,
                xl: 4,
              }}
            >
              <Skeleton
                animation="wave"
                height={300}
                width="100%"
                variant="rounded"
              />
            </Grid2>
          </Grid2>
        )}

        {selected && <PackageDetail item={selected} />}
      </Container>
    </Box>
  );
};
