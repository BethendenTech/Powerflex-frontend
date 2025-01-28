import { Box, Container, Grid2, Typography } from "@mui/material"
// import Swiper core and required modules
import { Pagination, A11y } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const HomeAboutVideoSection = () => {

    return (
        <Box id="about">
            <Swiper
                modules={[Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) =>
                        `<span class="${className}" 
                      style="width: 27px; height: 7px; background-color: #FFFFFF; border-radius: 5px; margin: 0 4px; transition: all 0.3s ease;"></span>`,
                }}
                style={{ height: '100%' }}
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
                                src="/videos/mixkit-installing-a-solar-panel-close-up-23276-hd-ready.mp4"
                                type="video/mp4"
                            />
                        </video>
                        <Container
                            maxWidth="md"
                            sx={{
                                position: "relative",
                                zIndex: 1,
                                color: "#fff",
                                textAlign: "center",
                                px: 2,
                                pt: {
                                    xs: 10,
                                    md: 5,
                                },
                                pb: {
                                    xs: 10,
                                    md: 5,
                                },
                            }}
                        >
                            <Grid2 container spacing={2}>
                                <Grid2 size={{ xs: 12, md: 6 }}>
                                    <Typography
                                        variant="h2"
                                        component="h1"
                                        fontWeight="bold"
                                        fontSize={32}
                                        color="#191919"
                                        mb={3}
                                    >
                                        Powering Nigeria One home at a Time
                                    </Typography>

                                    <Typography
                                        variant="h2"
                                        component="h2"
                                        fontSize={16}
                                        color="#191919"
                                    >
                                        At PowerFlexNG, we’re dedicated to delivering sustainable energy solutions tailored for Nigerian homes and businesses. From advanced technology to exceptional customer service. We’re redefining how you experiance energy.
                                    </Typography>
                                </Grid2>
                            </Grid2>

                            <Grid2 mt={1} container spacing={2}>
                                <Grid2 size={{ xs: 12, md: 6 }}>
                                    <Box p={2}>
                                        <Box
                                            component="img"
                                            src="/images/about/nigeria-3.svg"
                                        />
                                    </Box>
                                </Grid2>
                            </Grid2>

                        </Container>
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
                                src="/videos/mixkit-three-engineers-working-on-a-solar-panel-field-23236-hd-ready.mp4"
                                type="video/mp4"
                            />
                        </video>
                        <Container
                            maxWidth="md"
                            sx={{
                                position: "relative",
                                zIndex: 1,
                                color: "#fff",
                                textAlign: "center",
                                px: 2,
                                pt: {
                                    xs: 10,
                                    md: 5,
                                },
                                pb: {
                                    xs: 10,
                                    md: 5,
                                },
                            }}
                        >
                            <Grid2 container spacing={2}>
                                <Grid2 size={{ xs: 12, md: 6 }}>
                                    <Typography
                                        variant="h2"
                                        component="h1"
                                        fontWeight="bold"
                                        fontSize={32}
                                        color="#191919"
                                        mb={3}
                                    >
                                        Powering Nigeria One home at a Time
                                    </Typography>

                                    <Typography
                                        variant="h2"
                                        component="h2"
                                        fontSize={16}
                                        color="#191919"
                                    >
                                        At PowerFlexNG, we’re dedicated to delivering sustainable energy solutions tailored for Nigerian homes and businesses. From advanced technology to exceptional customer service. We’re redefining how you experiance energy.
                                    </Typography>
                                </Grid2>
                            </Grid2>

                            <Grid2 mt={1} container spacing={2}>
                                <Grid2 size={{ xs: 12, md: 6 }}>
                                    <Box p={2}>
                                        <Box
                                            component="img"
                                            src="/images/about/nigeria-3.svg"
                                        />
                                    </Box>
                                </Grid2>
                            </Grid2>

                        </Container>
                    </Box>
                </SwiperSlide>
            </Swiper>
        </Box>
    )
}

export default HomeAboutVideoSection