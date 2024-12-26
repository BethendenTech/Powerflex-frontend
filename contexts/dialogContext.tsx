import { DialogContextProps } from "@/types/dialogType";
import { createContext } from "react";

// Create Context
export const DialogContext = createContext<DialogContextProps | undefined>(undefined);

