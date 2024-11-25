import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Box textAlign="center"
    >

      <Box mt={2} mb={2}>
        <Image
          className="bg-img"
          src="/images/solar-bg.png"
          alt="powerflex logo"
          width={500}
          height={500}
        />
      </Box>

      <Button variant="contained" LinkComponent={Link} href="/quotation/details" fullWidth>
        Get a quote
      </Button>

      <Typography textAlign="center" mt={2} mb={2}>
        Start your journey to cleaner, more affordable energy.
      </Typography>

    </Box>
  );
}
