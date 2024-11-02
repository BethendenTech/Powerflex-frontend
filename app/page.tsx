import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Container>
        <Image
          className="bg-img"
          src="/images/solar-bg.png"
          alt="powerflex logo"
          width={1500}
          height={100}
        />

        <Box textAlign="center">
          <Button LinkComponent={Link} href="/quotation/details">
            Get a quote
          </Button>

          <Typography>
            Start your journey to cleaner, more affordable energy.
          </Typography>
        </Box>

      </Container>
    </>
  );
}
