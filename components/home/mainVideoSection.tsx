import { Box, Button, Grid2, Typography } from "@mui/material"
import Link from "next/link"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const HomeMainVideoSection = () => {

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <Box sx={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
                    {/* Background Video */}
                    <video
                        autoPlay
                        loop
                        muted
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            zIndex: -1,
                        }}
                    >
                        <source
                            src="/videos/mixkit-view-of-a-solar-panel-farm-generating-sustainable-energy-47097-hd-ready.mp4"
                            type="video/mp4"
                        />
                    </video>

                    {/* Foreground Content */}
                    <Box
                        sx={{
                            position: "relative",
                            zIndex: 1,
                            color: "#fff",
                            textAlign: "center",
                            px: 2,
                            pt: {
                                xs: 20,
                                md: 20,
                            },
                            pb: {
                                xs: 10,
                                md: 20,
                            },
                        }}
                    >
                        {/* Main Heading */}
                        <Typography
                            variant="h2"
                            fontWeight="bold"
                            fontSize={{ xs: 30, md: 36 }}
                            sx={{ color: "#fff", textShadow: "2px 2px 5px #000" }}
                        >
                            Powering your world
                        </Typography>

                        {/* Subheading */}
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            fontSize={{ xs: 28, md: 33 }}
                            sx={{ color: "#fff", textShadow: "2px 2px 5px #000" }}
                        >
                            with clean energy solutions
                        </Typography>

                        {/* Description */}
                        <Typography
                            mt={4}
                            sx={{
                                color: "#fff",
                                textShadow: "1px 1px 5px #000",
                                fontSize: { xs: 14, md: 16 },
                            }}
                        >
                            Affordable, reliable and tailored solar solutions for every home and business
                        </Typography>

                        {/* Buttons */}
                        <Grid2 container spacing={2} justifyContent="center" mt={6}>
                            <Grid2 size={{ xs: 12, md: 3 }}>
                                <Button
                                    variant="outlined"
                                    component={Link}
                                    href="/quotation/details"
                                    color="secondary"
                                    fullWidth
                                >
                                    Explore Products
                                </Button>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }}>
                                <Button
                                    variant="outlined"
                                    component={Link}
                                    href="/quotation/details"
                                    color="secondary"
                                    fullWidth
                                >
                                    Get a quote
                                </Button>
                            </Grid2>
                        </Grid2>
                    </Box>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box sx={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
                    {/* Background Video */}
                    <video
                        autoPlay
                        loop
                        muted
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            zIndex: -1,
                        }}
                    >
                        <source
                            src="/videos/mixkit-view-of-a-solar-panel-farm-generating-sustainable-energy-47097-hd-ready.mp4"
                            type="video/mp4"
                        />
                    </video>

                    {/* Foreground Content */}
                    <Box
                        sx={{
                            position: "relative",
                            zIndex: 1,
                            color: "#fff",
                            textAlign: "center",
                            px: 2,
                            pt: {
                                xs: 20,
                                md: 20,
                            },
                            pb: {
                                xs: 10,
                                md: 20,
                            },
                        }}
                    >
                        {/* Main Heading */}
                        <Typography
                            variant="h2"
                            fontWeight="bold"
                            fontSize={{ xs: 30, md: 36 }}
                            sx={{ color: "#fff", textShadow: "2px 2px 5px #000" }}
                        >
                            Powering your world
                        </Typography>

                        {/* Subheading */}
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            fontSize={{ xs: 28, md: 33 }}
                            sx={{ color: "#fff", textShadow: "2px 2px 5px #000" }}
                        >
                            with clean energy solutions
                        </Typography>

                        {/* Description */}
                        <Typography
                            mt={4}
                            sx={{
                                color: "#fff",
                                textShadow: "1px 1px 5px #000",
                                fontSize: { xs: 14, md: 16 },
                            }}
                        >
                            Affordable, reliable and tailored solar solutions for every home and business
                        </Typography>

                        {/* Buttons */}
                        <Grid2 container spacing={2} justifyContent="center" mt={6}>
                            <Grid2 size={{ xs: 12, md: 3 }}>
                                <Button
                                    variant="outlined"
                                    component={Link}
                                    href="/quotation/details"
                                    color="secondary"
                                    fullWidth
                                >
                                    Explore Products
                                </Button>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }}>
                                <Button
                                    variant="outlined"
                                    component={Link}
                                    href="/quotation/details"
                                    color="secondary"
                                    fullWidth
                                >
                                    Get a quote
                                </Button>
                            </Grid2>
                        </Grid2>
                    </Box>
                </Box>
            </SwiperSlide>

        </Swiper>
    )
}

export default HomeMainVideoSection