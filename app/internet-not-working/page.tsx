"use client";

import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
const backgroundImage = "/images/home/bg-homes.svg";

export default function Page() {
    const router = useRouter();

    const handleBack = () => {
        router.push("/")
    }

    return (
        <Box style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <Box textAlign="center" pt={20} pb={20}>
                <Box mt={5} mb={5}>
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

                <Box mt={10}>
                    <Button variant="outlined" color="secondary" onClick={() => handleBack()}>Go to home</Button>
                </Box>
            </Box>
        </Box>
    );
}
