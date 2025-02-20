import { renderNaira } from "@/utils/currency";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Container,
  Grid2,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const PackageDetail = (props: any) => {
  const { item } = props;
  const router = useRouter();

  const handleSelect = () => {
    router.push(`/package/${item.id}`);
  };

  return (
    <Box
      key={`package-detail-view-${item.id}`}
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "50px 0px 0px 0px",
      }}
    >
      <Card
        sx={{
          position: "relative",
          width: "100%",
          borderRadius: 3,
          boxShadow: 5,
          bgcolor: "#e9f5ff",
          border: "1px solid #1a61ee",
          overflow: "visible",
        }}
      >
        <CardHeader
          title={item.name}
          sx={{
            fontSize: 28,
            fontWeight: 700,
            bgcolor: "#2755EB",
            p: 2,
            borderRadius: "10px 10px 0px 0px",
          }}
          titleTypographyProps={{
            color: "#fff",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "30px",
            right: "5px",
            transform: "rotate(-45deg)",
            zIndex: 10,
          }}
        >
          <Image
            src="/images/package/label.png"
            alt="label"
            width={60}
            height={60}
          />
          <Typography
            fontSize={30}
            fontWeight={700}
            color="#FFFFFF"
            sx={{
              position: "absolute",
              top: "76px",
              right: "0px",
              transform: "rotate(90deg)",
              zIndex: 10,
            }}
          >
            50%
          </Typography>
        </Box>
        <CardContent>
          <Grid2 container spacing={2}>
            <Grid2
              size={{
                xs: 12,
                sm: 12,
                md: 3,
                lg: 3,
                xl: 3,
              }}
            >
              <Typography
                variant="h6"
                fontWeight={600}
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
                      <ListItemText
                        primary={item.name}
                        sx={{ fontSize: "10px" }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid2>
            <Grid2
              size={{
                xs: 12,
                sm: 12,
                md: 3,
                lg: 3,
                xl: 3,
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                bgcolor="white"
                color="primary"
                p={1.5}
                sx={{ borderRadius: "10px 10px 0px 0px" }}
              >
                Runtime
              </Typography>
              <Box
                bgcolor="white"
                sx={{ marginTop: "8px", borderRadius: "0px 0px 10px 10px" }}
              >
                <Typography variant="body1" sx={{ padding: "15px" }}>
                  {item.runtime}
                </Typography>
              </Box>
            </Grid2>
            <Grid2
              size={{
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
                xl: 6,
              }}
            >
              <Box textAlign="center">
                <Typography
                  variant="subtitle1"
                  color="primary"
                  fontWeight="700"
                  mb={4}
                >
                  Save up to 50% on power bills
                </Typography>
                <Typography
                  variant="h4"
                  color="primary"
                  fontWeight="600"
                  mb={3}
                >
                  {renderNaira(item.price)}
                </Typography>

                <Button
                  variant="contained"
                  sx={{ borderRadius: 3, px: 5, py: 1 }}
                  onClick={() => handleSelect()}
                >
                  Buy Now
                </Button>

                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  mt={2}
                >
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Typography gutterBottom sx={{ fontSize: 14 }}>
                      Power up sustainably
                    </Typography>
                    <Image
                      src="/images/package/green.svg"
                      alt="solar-panel"
                      width={50}
                      height={50}
                      style={{ marginLeft: 4, marginRight: 4 }}
                    />
                    <Typography gutterBottom sx={{ fontSize: 14 }}>
                      cut your carbon footprint
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    </Box>
  );
};
