import { QuotationContext } from "@/contexts/QuotationProvider";
import { QuotationContextType } from "@/types/quotation";
import { useContext } from "react";

const useQuotation = (): QuotationContextType => {
  const context = useContext(QuotationContext);
  if (context === undefined) {
      throw new Error('useQuotation must be used within a QuotationProvider');
  }
  return context;
};

export default useQuotation;