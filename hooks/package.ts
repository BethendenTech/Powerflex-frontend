import { PackageContext } from "@/contexts/packageContext";
import { PackageContextProps } from "@/types/packageType";
import { useContext } from "react";

const usePackage = (): PackageContextProps => {
  const context = useContext(PackageContext);
  if (context === undefined) {
    throw new Error('usePackage must be used within a PackageProvider');
  }
  return context;
};

export default usePackage;