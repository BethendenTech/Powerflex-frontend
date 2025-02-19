import { PackageContextProps } from "@/types/packageType";
import { createContext } from "react";

// Create Context
export const PackageContext = createContext<PackageContextProps | undefined>(undefined);