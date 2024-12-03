import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import DrawerAppBar from "./navbar";
import { AppDrawer } from "./drawer";
import { drawerWidth, navItems } from "@/utils/navBar";
import WebFooter from "./footer";

interface Props {
    children: ReactNode;
}


export const WebLayout: React.FC<Props> = ({ children }) => {

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };


    return (
        <Box>
            <DrawerAppBar navItems={navItems} handleDrawerToggle={handleDrawerToggle} />

            <nav>
                <AppDrawer drawerWidth={drawerWidth} navItems={navItems} handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
            </nav>


            {children}

            <WebFooter />

        </Box>
    );
};
