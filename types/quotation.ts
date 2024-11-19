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
    error: any;
    isLoading: boolean;
    quote: QuoteInterface;
}
export interface QuoteInterface {
    total_cost_naira: number;
    total_cost_usd: number;
    total_equipments: number;
    number_of_panels: number;
    number_of_inverters: number;
    number_of_batteries: number;
    total_cost_with_profit: number;
    total_load_kwh: number;
    load_covered_by_solar: number;
    total_panel_cost_usd: number;
    total_inverter_cost_usd: number;
    total_battery_cost_usd: number;
    total_panel_cost_naira: number;
    total_inverter_cost_naira: number;
    total_battery_cost_naira: number;
    installation_and_cabling: number;
    vat: number;
    miscellaneous_cost: number;
}