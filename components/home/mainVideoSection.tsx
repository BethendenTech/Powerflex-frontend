import { Box, Grid2, Typography } from "@mui/material"
import Link from "next/link"
// import Swiper core and required modules
import { Pagination, A11y } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { BannerGlowingButton, BannerNormalButton } from "../button/style";

const HomeMainVideoSection = () => {

    return (
        <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            pagination={{
                clickable: true,
                renderBullet: (index, className) =>
                    `<span class="${className}" 
                  style="width: 27px; height: 7px; background-color: #FFFFFF; border-radius: 5px; margin: 0 4px; transition: all 0.3s ease;"></span>`,
            }}
            style={{ height: '100%' }}
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
                        <Grid2 container spacing={2} justifyContent="center" mt={20}>
                            <Grid2 size={{ xs: 6, md: 3 }}>
                                <BannerNormalButton
                                    variant="outlined"
                                    LinkComponent={Link}
                                    href="/quotation/details"
                                    color="secondary"
                                    fullWidth
                                >
                                    Explore Products
                                </BannerNormalButton>
                            </Grid2>
                            <Grid2 size={{ xs: 6, md: 3 }}>
                                <BannerGlowingButton
                                    variant="outlined"
                                    LinkComponent={Link}
                                    href="/quotation/details"
                                    color="secondary"
                                    fullWidth
                                >
                                    Get a quote
                                </BannerGlowingButton>
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
                            src="/videos/mixkit-view-of-a-farm-with-solar-panels-on-its-roofs-47091-hd-ready.mp4"
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
                        <Grid2 container spacing={2} justifyContent="center" mt={20}>
                            <Grid2 size={{ xs: 6, md: 3 }}>
                                <BannerNormalButton
                                    variant="outlined"
                                    LinkComponent={Link}
                                    href="/quotation/details"
                                    color="secondary"
                                    fullWidth
                                >
                                    Explore Products
                                </BannerNormalButton>
                            </Grid2>
                            <Grid2 size={{ xs: 6, md: 3 }}>
                                <BannerGlowingButton
                                    variant="outlined"
                                    LinkComponent={Link}
                                    href="/quotation/details"
                                    color="secondary"
                                    fullWidth
                                >
                                    Get a quote
                                </BannerGlowingButton>
                            </Grid2>
                        </Grid2>
                    </Box>
                </Box>
            </SwiperSlide>

        </Swiper>
    )
}

export default HomeMainVideoSection