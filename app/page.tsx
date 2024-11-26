"use client"

import HomeFinanceSection from "@/components/home/financeSection";
import HomeMainSection from "@/components/home/mainSection";
import HomeProductSection from "@/components/home/productSection";
import { Box } from "@mui/material";

export default function Home() {
  
  return (
    <Box>

      <HomeMainSection />
      <HomeProductSection />
      <HomeFinanceSection />
    </Box>
  );
}
