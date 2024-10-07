import React from "react";


interface SummaryObject {
    solar_panels: number;
    inverters?: number;
    batteries?: number;
    cost?: number;
    energy?: number;
}

export default function Summary(props: SummaryObject) {
    return (
            <div className="shadow rounded-lg p-[14px] summary w-full m-auto">
                <div className="flex flex-col items-center">
                    <h3 className="text-xl font-bold">Estimation</h3>
                    <div className="summary-row">
                        <div className="col">Energy Consumption</div>
                        <div className="col">{props.energy?.toFixed(2)} Kwh</div>
                    </div>
                    <div className="summary-row">
                        <div className="col">Total cost</div>
                        <div className="col">₦ {new Intl.NumberFormat().format(props.cost ?? 0)}</div>
                    </div>
                </div>
            </div>
    );
}