import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Menu, MenuItem, Stack } from '@mui/material';
import { NavbarButton } from '@/components/button/style';

interface Props {
    handleDrawerToggle?: () => void;
    navItems?: NavItemsModel[];
    mobileOpen?: boolean;
    drawerWidth?: number;
}

export default function DrawerAppBar(props: Props) {
    const { handleDrawerToggle, navItems } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar component="nav" color='inherit'>
            <Toolbar>
                <Box component={Link} href='/'
                    sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}>
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
                                <React.Fragment key={`nav-link-${index}`}>
                                    <NavbarButton
                                        variant="contained"
                                        LinkComponent={Link}
                                        href={item.href}
                                        onClick={handleClick}
                                    >
                                        {item.title}
                                    </NavbarButton>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                        sx={{
                                            width: 200,
                                            gap: "0px",
                                            opacity: "0px",
                                            '& .MuiPaper-root': {
                                                width: 200,
                                                boxShadow: 'none',
                                                borderRadius: "12px"
                                            },
                                            '& .MuiList-root': {
                                                justifyItems: 'center'
                                            }
                                        }}
                                    >
                                        <MenuItem onClick={handleClose} sx={{
                                            fontSize: "14px",
                                            fontWeight: 400,
                                            textUnderlinePosition: "from-font",
                                            textDecorationSkipInk: "none",
                                            color: "#555353",
                                        }}>Soon to come!</MenuItem>
                                    </Menu>
                                </React.Fragment>
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
        </AppBar >
    );
}