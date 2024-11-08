import { Box, Button, Container, Grid2, Typography } from "@mui/material";
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
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 'grow', md: 4 }} offset={{ md: 4 }}>

              <Button variant="contained" LinkComponent={Link} href="/quotation/details" fullWidth>
                Get a quote
              </Button>

              <Typography>
                Start your journey to cleaner, more affordable energy.
              </Typography>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </>
  );
}
