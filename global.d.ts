import 'little-state-machine';

declare module 'little-state-machine' {
    interface GlobalState {
        name: string;
        email: string;
        phone_number: string;
        electricity_spend: string;
        price_band: string;
        additional_info: boolean;
        solar_load: number;
        battery_autonomy_hours_only: number;
        battery_autonomy_days: number;
        battery_autonomy_hours: number;
        breakdowns: Record<string, any>;
        payment_method: string;
        name_card: string;
        card_number: string;
        expiration_date: string;
        security_code: string;
        postcode: string;
        total_cost: number;
        business_role: string;
        finance: boolean;
        address_line_1: string;
        address_line_2: string;
    }
}