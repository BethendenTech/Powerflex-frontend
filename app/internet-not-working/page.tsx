"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    const handleBack = () => {
        router.push("/")
    }

    return (
        <Container>
            <Box textAlign="center" mt={20} mb={20}>
                <Box mt={2} mb={2}>
                    <Typography
                        variant="h2"
                        component="h1"
                        fontWeight="bold"
                        fontSize={36}
                        color="#fff"
                        sx={{
                            textShadow: '2px 2px 5px #000',
                        }}
                    >Internet Not Working
                    </Typography>
                </Box>
                <Box mt={2} mb={2}>
                    <Typography
                        color="#fff"
                        mt={4}
                        sx={{
                            textShadow: '1px 1px 5px #000',
                        }}
                    >
                        Our system is temporarily offline. Please try again later.
                    </Typography>
                </Box>

                <Button variant="outlined" color="secondary" onClick={() => handleBack()}>Go to home</Button>
            </Box>
        </Container>
    );
}
