"use client"

import { FaqComponent } from "@/components/cms/faqComponent";
import HomeAboutSection from "@/components/home/aboutSection";
import HomeFinanceSection from "@/components/home/financeSection";
import HomeMainSection from "@/components/home/mainSection";
import HomeProductSection from "@/components/home/productSection";
import HomeWorkSection from "@/components/home/workSection";
import { Box } from "@mui/material";

export default function Home() {

  return (
    <Box>
      <HomeMainSection />
      <HomeProductSection />
      <FaqComponent />
      <HomeFinanceSection />
      <HomeWorkSection />
      <HomeAboutSection />
    </Box>
  );
}
