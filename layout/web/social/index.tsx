import { Box, Modal, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

export const SocialIcon = () => {
    const [open, setOpen] = useState(false);
    // const CallNumber = "+2347074109549";

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            {/* Floating Chat Icon */}
            <Box
                sx={{
                    position: "fixed",
                    bottom: 20,
                    right: 20,
                    zIndex: 1400,
                }}
            >
                <Box
                    component={Paper}
                    sx={{
                        borderRadius: "50%",
                        cursor: "pointer",
                        overflow: "hidden",
                    }}
                    onClick={handleOpen}
                >
                    <Box component="img" src="/images/icon/chat-icon.png" width={50} height={50} />
                </Box>
            </Box>

            {/* Bottom-Right Modal */}
            <Modal
                open={open}
                onClose={handleClose}
                sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                    marginBottom: "20px",
                    marginRight: "20px",
                    bottom: 55,
                    right: 10,
                }}
            >
                <Box
                    sx={{
                        width: 300,
                        backgroundColor: "background.paper",
                        boxShadow: 24,
                        p: 2,
                        borderRadius: 2,
                    }}
                >
                    <Stack direction="row" justifyContent="space-between" mb={2}>
                        <Typography variant="body2" color="grey">
                            Team Murtiya
                        </Typography>
                        <Typography variant="body2" color="grey">
                            just now
                        </Typography>
                    </Stack>
                    <Typography variant="body2" mb={2} fontWeight="bold">
                        Welcome to Murtiya! How can we help you?
                    </Typography>
                </Box>
            </Modal>
        </>
    );
};
