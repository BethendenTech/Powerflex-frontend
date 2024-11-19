export const allElements = [
    {
        name: "Kitchen Appliance",
        type: "accordian",
        items: [
            {
                displayName: "Coffee Maker",
                name: "coffee_maker",
                power_w: 600,
                hours_per_day: 0,
                quantity: 0,
                type: "row"
            },
            {
                displayName: "Microwave",
                name: "microwave",
                power_w: 400,
                hours_per_day: 0,
                quantity: 0,
                type: "row"
            },
            {
                displayName: "Toaster",
                name: "toaster",
                power_w: 300,
                hours_per_day: 0,
                quantity: 0,
                type: "row"
            },
            {
                displayName: "Oven",
                name: "oven",
                power_w: 900,
                hours_per_day: 0,
                quantity: 0,
                type: "row"
            },
            {
                displayName: "Blender",
                name: "blender",
                power_w: 300,
                hours_per_day: 0,
                quantity: 0,
                type: "row"
            },
            {
                displayName: "Kettle",
                name: "kettle",
                power_w: 3000,
                hours_per_day: 0,
                quantity: 0,
                type: "row"
            },
        ],
    },
    {
        name: "Refrigeration",
        type: "accordian",
        items: [
            {
                displayName: "Fridge",
                name: "fridge",
                power_w: 150,
                hours_per_day: 0,
                quantity: 0,
                type: "row"
            },
            {
                displayName: "Freezer",
                name: "freezer",
                power_w: 200,
                hours_per_day: 0,
                quantity: 0,
                type: "row"
            },
        ]
    },
    {
        name: "Laundry",
        type: "accordian",
        items: [
            {
                displayName: "Washing Machine",
                name: "washing_machine",
                power_w: 500,
                hours_per_day: 0,
                quantity: 0,
                type: "row"
            },
            {
                displayName: "Dryer",
                name: "dryer",
                power_w: 2160,
                hours_per_day: 0,
                quantity: 0,
                type: "row"
            },
        ],
    },
    {
        name: "Lighting",
        type: "accordian",
        items: [
            {
                displayName: "Lighting (LED bulb)",
                name: "lighting",
                power_w: 8,
                hours_per_day: 0,
                quantity: 0,
                type: "row",
            },
        ]
    },
    {
        name: "HVAC",
        type: "accordian",
        items: [
            {
                displayName: "Air Conditioning",
                name: "air_conditioning",
                power_w: 1500,
                hours_per_day: 0,
                quantity: 0,
                type: "row"
            },
        ]
    },
    {
        name: "Electrical Appliances",
        type: "accordian",
        items: [
            {
                displayName: "Laptop",
                name: "laptop",
                power_w: 75,
                hours_per_day: 0,
                quantity: 0,
                type: "row"
            },
            {
                displayName: "Television",
                name: "television",
                power_w: 300,
                hours_per_day: 0,
                quantity: 0,
                type: "row"
            },
            {
                displayName: "Desktop Computer",
                name: "desktop_computer",
                power_w: 200,
                hours_per_day: 0,
                quantity: 0,
                type: "row"
            },
            {
                displayName: "Electric Car",
                name: "electric_car",
                power_w: 6500,
                hours_per_day: 0,
                quantity: 0,
                type: "row"
            },
            {
                displayName: "Other",
                name: "other",
                power_w: 0,
                hours_per_day: 0,
                quantity: 0,
                type: "row"
            }
        ]
    },
]


export const financeTermTears = [
    {
        label: "1 Year",
        value: 1
    },
    {
        label: "2 Years",
        value: 2
    },
    {
        label: "3 Years",
        value: 3
    },
    {
        label: "4 Years",
        value: 4
    },
]

export const defaultQuoteData: any = {
    total_cost_naira: 0,
    total_cost_usd: 0,
    total_equipments: 0,
    number_of_panels: 0,
    number_of_inverters: 0,
    number_of_batteries: 0,
    total_cost_with_profit_outright: 0,
    total_cost_with_profit_financing: 0,
    total_load_kwh: 0,
    load_covered_by_solar: 0,
    total_panel_cost_usd: 0,
    total_inverter_cost_usd: 0,
    total_battery_cost_usd: 0,
    total_panel_cost_naira: 0,
    total_inverter_cost_naira: 0,
    total_battery_cost_naira: 0,
    installer_cost: 0,
}

export const interestRateValue = 6
export const vatRateValue = 7.5
export const interestTermValue = 4


export const businessRoles = [
    { id: "business", title: 'Business' },
    { id: "individual", title: 'Individual' },
];