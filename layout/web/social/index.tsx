import { Box, Modal, Paper, Stack, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export const SocialIcon = () => {
    const [open, setOpen] = useState(false);
    const [showGif, setShowGif] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    // const CallNumber = "+2347074109549";

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const gifTimer = setTimeout(() => {
            setShowGif(true);
            setShowTooltip(true);
        }, 6000);

        const hideGifTimer = setTimeout(() => {
            setShowGif(false);
            setShowTooltip(false);
        }, 21000);

        return () => {
            clearTimeout(gifTimer);
            clearTimeout(hideGifTimer);
        };
    }, []);

    return (
        <>
            {/* Floating Chat Icon */}
            <Box
                sx={{
                    position: "fixed",
                    bottom: {
                        lg:20,
                        md:20,
                        sm:60,
                        xs:60,
                    },
                    right: 20,
                    zIndex: 1400,
                }}
            >
                <Tooltip
                    placement="left"
                    title="How can I help you?"
                    open={showTooltip}
                    arrow
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
                        {showGif ? (
                            <Box
                                component="img"
                                src="/images/icon/typing.gif"
                                width={50}
                                height={50}
                            />
                        ) : (
                            <Box
                                component="img"
                                src="/images/icon/chat-icon.png"
                                width={50}
                                height={50}
                            />
                        )}
                    </Box>
                </Tooltip>
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
                            Team Powerflex
                        </Typography>
                        <Typography variant="body2" color="grey">
                            just now
                        </Typography>
                    </Stack>
                    <Typography variant="body2" mb={2} fontWeight="bold">
                        Welcome to Powerflex! How can we help you?
                    </Typography>
                </Box>
            </Modal>
        </>
    );
};
