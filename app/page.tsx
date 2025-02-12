"use client";

import { FaqComponent } from "@/components/cms/faqComponent";
import ContactUsMainPage from "@/components/contact-us/page";
import HomeAboutSection from "@/components/home/aboutSection";
import HomeFinanceSection from "@/components/home/financeSection";
import HomeMainSection from "@/components/home/mainSection";
import HomeProductSection from "@/components/home/productSection";
import HomeWorkSection from "@/components/home/workSection";
import { PackageList } from "@/components/package/packageList";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <HomeMainSection />
      <PackageList />
      <HomeProductSection />
      <HomeFinanceSection />
      <HomeWorkSection />
      <HomeAboutSection />
      <FaqComponent />
      <ContactUsMainPage />
    </Box>
  );
}
