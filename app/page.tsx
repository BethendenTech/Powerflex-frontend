import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Box>
      <Image
        className="bg-img"
        src="/images/solar-bg.png"
        alt="powerflex logo"
        width={1500}
        height={100}
      />



      <Button variant="contained" LinkComponent={Link} href="/quotation/details" fullWidth>
        Get a quote
      </Button>

      <Typography>
        Start your journey to cleaner, more affordable energy.
      </Typography>

    </Box>
  );
}
