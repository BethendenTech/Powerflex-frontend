import { ReactNode } from "react";

// Define the types
export interface DialogState {
    open: boolean;
    title: ReactNode;
    content: ReactNode;
    actions: ReactNode;
}

export interface DialogContextProps {
    openDialog: (options: Omit<DialogState, "open">) => void;
    closeDialog: () => void;
}