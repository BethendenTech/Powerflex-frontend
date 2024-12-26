import React, { useState, ReactNode } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { DialogContext } from "@/contexts/dialogContext";
import { DialogState } from "@/types/dialogType";
import { useMediaQuery, useTheme } from "@mui/material";


// Provider Component
export const DialogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


    const [dialogState, setDialogState] = useState<DialogState>({
        open: false,
        title: null,
        content: null,
        actions: null,
    });

    const openDialog = ({ title, content, actions }: Omit<DialogState, "open">) => {
        setDialogState({ open: true, title, content, actions });
    };

    const closeDialog = () => {
        setDialogState((prev) => ({ ...prev, open: false }));
    };

    return (
        <DialogContext.Provider value={{ openDialog, closeDialog }}>
            {children}
            <Dialog fullScreen={fullScreen} open={dialogState.open}>
                <DialogTitle>{dialogState.title}</DialogTitle>
                <DialogContent dividers>{dialogState.content}</DialogContent>
                <DialogActions>
                    {dialogState.actions || (
                        <Button onClick={closeDialog}>Close</Button>
                    )}
                </DialogActions>
            </Dialog>
        </DialogContext.Provider>
    );
};