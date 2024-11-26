"use client"

import HomeMainSection from "@/components/home/mainSection";
import HomeProductSection from "@/components/home/productSection";
import VerticalSwiperComponent from "@/components/swipper/VerticalSwiper";
import { Box, Button, Grid2, Stack, Typography } from "@mui/material";
import Link from "next/link";



export default function Home() {


  const sliderComponents = [
    {
      title: "Home",
      component: () => <HomeMainSection />
    },
    {
      title: "Products",
      component: () => <HomeProductSection />
    }
  ]

  return (
    <Box>

      <VerticalSwiperComponent sliderComponents={sliderComponents}/>


    </Box>
  );
}
