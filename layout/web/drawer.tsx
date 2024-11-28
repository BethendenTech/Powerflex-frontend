import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"
import Image from "next/image";
import Link from "next/link";


interface Props {
    handleDrawerToggle?: () => void;
    navItems?: NavItemsModel[];
    mobileOpen?: boolean;
    drawerWidth?: number;
}

export const AppDrawer = (props: Props) => {
    const { navItems, mobileOpen, handleDrawerToggle, drawerWidth } = props;

    return (
        <nav>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>

                    <Image
                        src="/images/logo-blue.png"
                        alt="PowerFlex"
                        width={100}
                        height={100}
                    />

                    <Divider />
                    <List>
                        {navItems && navItems.map((item, index) => (
                            <ListItem key={`nav-${index}`} disablePadding>
                                <ListItemButton sx={{ textAlign: 'center' }} LinkComponent={Link} href={item.href}>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </nav>
    )
}