import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Box>

      <Box textAlign="center" mt={20} mb={20}>
        <Typography
          variant="h2"
          component="h1"
          fontWeight="bold"
          fontSize={36}
          color="#fff"
          sx={{
            textShadow: '2px 2px 5px #000',
          }}
        >
          Powering your world
        </Typography>

        <Typography
          variant="h2"
          component="h2"
          fontWeight="bold"
          fontSize={33}
          color="#fff"
          sx={{
            textShadow: '2px 2px 5px #000',
          }}
        >
          with clean energy solutions
        </Typography>

        <Typography
          color="#fff"
          mt={4}
          sx={{
            textShadow: '1px 1px 5px #000',
          }}
        >
          Affordable, reliable and tailored solar solutions for every home and business
        </Typography>
      </Box>



      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <Stack direction="row" spacing={5}>
          <Button variant="outlined" LinkComponent={Link} href="/quotation/details" color="secondary" sx={{ width: 200 }}>
            Explore Products
          </Button>
          <Button variant="outlined" LinkComponent={Link} href="/quotation/details" color="secondary" sx={{ width: 200 }}>
            Get a quote
          </Button>
        </Stack>
      </Box>

    </Box>
  );
}
