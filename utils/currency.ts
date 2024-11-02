import currency from "currency.js"

export const renderNaira = (value: number) => {
    return currency(value, {
        symbol: '₦',      // Set the Naira symbol
        precision: 2,     // Set precision to 2 decimal places
        separator: ',',   // Thousands separator
        decimal: '.',     // Decimal separator
    }).format();
}


export const formatKWhWithCurrency = (value: number, precision: number = 2): string => {
    return `${currency(value, {
        symbol: '',                    // No currency symbol
        precision: precision,
        separator: ',',                // Thousands separator
        decimal: '.',                  // Decimal separator
    }).format()} kWh`;
};