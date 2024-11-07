import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Stack } from '@mui/material';

interface Props {
    window?: () => Window;
    handleDrawerToggle?: () => {};
    navItems?: NavItemsModel[];
    mobileOpen?: boolean;
    drawerWidth?: number;
}

export default function DrawerAppBar(props: Props) {
    const { handleDrawerToggle, navItems } = props;


    return (
        <AppBar component="nav" color='inherit'>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>


                <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                    <Image
                        src="/images/logo-blue.png"
                        alt="powerflex logo"
                        width={100}
                        height={100}
                    />
                </Box>

                <Stack sx={{ display: { xs: 'none', sm: 'block' } }} spacing={2} direction="row">
                    {navItems && navItems.map((item, index) => {
                        if (item.type == "link") {
                            return (
                                <Typography key={`nav-${index}`} component={Link} href={item.href}>
                                    {item.title}
                                </Typography>
                            )
                        } else {
                            return (
                                <Button key={`nav-${index}`} component={Link} href={item.href}>
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