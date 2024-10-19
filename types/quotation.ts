// types/quotation.ts
export interface Quotation {
    electricity_spend: string;
    price_band: string;
    additional_info: boolean;
    solar_load: number;
    battery_autonomy_hours_only: number;
    battery_autonomy_days: number;
    battery_autonomy_hours: number;
    breakdowns: Record<string, any>;
}

export interface QuotationContextType {
    data: Quotation | undefined;
    error: any;
    isLoading: boolean;
}
