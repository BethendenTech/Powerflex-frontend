"use client"

import HomeAboutSection from "@/components/home/aboutSection";
import HomeFinanceSection from "@/components/home/financeSection";
import HomeMainSection from "@/components/home/mainSection";
import HomeMainVideoSection from "@/components/home/mainVideoSection";
import HomeProductSection from "@/components/home/productSection";
import HomeWorkSection from "@/components/home/workSection";
import { Box } from "@mui/material";

export default function Home() {

  return (
    <Box>
      <HomeMainVideoSection />
      <HomeMainSection />
      <HomeProductSection />
      <HomeFinanceSection />
      <HomeWorkSection />
      <HomeAboutSection />
    </Box>
  );
}
