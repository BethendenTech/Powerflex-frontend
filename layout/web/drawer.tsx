import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"
import Image from "next/image";


interface Props {
    window?: () => Window;
    handleDrawerToggle?: () => {};
    navItems?: NavItemsModel[];
    mobileOpen?: boolean;
    drawerWidth?: number;
}

export const AppDrawer = (props: Props) => {
    const { window, navItems, mobileOpen, handleDrawerToggle, drawerWidth } = props;

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <nav>
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                    <Image
                        src="/images/logo-blue.png"
                        alt="powerflex logo"
                        width={100}
                        height={100}
                    />

                    <Divider />
                    <List>
                        {navItems && navItems.map((item, index) => (
                            <ListItem key={`nav-${index}`} disablePadding>
                                <ListItemButton sx={{ textAlign: 'center' }}>
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