import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Stack } from '@mui/material';

interface Props {
    handleDrawerToggle?: () => void;
    navItems?: NavItemsModel[];
    mobileOpen?: boolean;
    drawerWidth?: number;
}

export default function DrawerAppBar(props: Props) {
    const { handleDrawerToggle, navItems } = props;

    return (
        <AppBar component="nav" color='inherit'>
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}>
                    <Image
                        src="/images/logo-blue.png"
                        alt="PowerFlex"
                        width={100}
                        height={50}
                    />
                </Box>

                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ display: { lg: 'none', md: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>

                <Stack sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }} spacing={2} direction="row">
                    {navItems && navItems.map((item, index) => {
                        if (item.type == "button") {
                            return (
                                <Button
                                    variant="contained"
                                    key={`nav-link-${index}`}
                                    LinkComponent={Link}
                                    href={item.href}
                                    sx={{
                                        background: `linear-gradient(90deg, #0078DC -0.01%, #BE4BA0 100%)`,
                                        border: `1px solid #1072F2`,
                                        backdropFilter: "blur(12px)",
                                        borderColor: `1px solid rgba(255, 255, 255, 1)`,
                                        borderRadius: '25px',
                                        '&:hover': {
                                            background: `linear-gradient(90deg, #0078DC -0.01%, #BE4BA0 100%)`,
                                        },
                                        '&:before': {
                                            content: '""',
                                            position: "absolute",
                                            top: "6px",
                                            left: "6px",
                                            right: "6px",
                                            bottom: "6px",
                                            border: "1px solid #FFFFFF",
                                            borderRadius: "inherit",
                                        },
                                    }}
                                >
                                    {item.title}
                                </Button>
                            )
                        } else {
                            return (
                                <Button
                                    variant="text"
                                    key={`nav-link-${index}`}
                                    LinkComponent={Link}
                                    href={item.href}
                                    sx={{ color: '#555353' }}
                                >
                                    {item.title}
                                </Button>
                            )
                        }
                    })}
                </Stack>
            </Toolbar>
        </AppBar>
    );
}