import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Menu, MenuItem, Stack } from '@mui/material';

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
                                <React.Fragment key={`nav-link-${index}`}>
                                    <Button
                                        variant="contained"
                                        LinkComponent={Link}
                                        href={item.href}
                                        onClick={handleClick}
                                        sx={{
                                            fontSize: "12.36px",
                                            fontWeight: 700,
                                            textAlign: "left",
                                            textUnderlinePosition: "from-font",
                                            textDecorationSkipInk: "none",
                                            boxShadow: 'none',
                                            width: 200,
                                            background: "linear-gradient(90deg, #0087FF 0%, #EF238D 100%)",
                                            backdropFilter: "blur(12px)",
                                            borderColor: `1px solid rgba(255, 255, 255, 1)`,
                                            borderRadius: '25px',
                                            '&:hover': {
                                                background: "linear-gradient(90deg, #0087FF 0%, #EF238D 100%)",
                                                boxShadow: 'none',
                                            },
                                            '&:before': {
                                                content: '""',
                                                position: "absolute",
                                                top: "6px",
                                                left: "6px",
                                                right: "6px",
                                                bottom: "6px",
                                                border: "2px solid #FFFFFF80",
                                                borderRadius: "inherit",
                                            },
                                        }}
                                    >
                                        {item.title}
                                    </Button>
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