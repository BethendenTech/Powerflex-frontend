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
            <Box textAlign="center" mt={4}>
                <Box mt={2} mb={2}>
                    <Typography component="h1" variant="h3">Internet Not Working</Typography>
                </Box>
                <Box mt={2} mb={2}>
                    <Typography component="h6" variant="h6">Our system is temporarily offline. Please try again
                        later.</Typography>
                </Box>

                <Button onClick={() => handleBack()}>Go to home</Button>
            </Box>
        </Container>
    );
}
