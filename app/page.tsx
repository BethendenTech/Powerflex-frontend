"use client"

import HomeAboutVideoSection from "@/components/home/aboutVideoSection";
import HomeFinanceSection from "@/components/home/financeSection";
import HomeMainVideoSection from "@/components/home/mainVideoSection";
import HomeProductSection from "@/components/home/productSection";
import HomeWorkSection from "@/components/home/workSection";
import { Box } from "@mui/material";

export default function Home() {

  return (
    <Box>
      <HomeMainVideoSection />
      <HomeProductSection />
      <HomeFinanceSection />
      <HomeWorkSection />
      <HomeAboutVideoSection />
    </Box>
  );
}
