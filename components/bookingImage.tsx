import React from "react";
import Image from "next/image";

export default function TruckImage() {

    return (
        <div className="w-10/12 m-auto">
            <Image
                src={`/images/truck.svg`}
                alt="powerflex"
                width={150}
                height={150}
                className="m-auto"
            />
        </div>
    );
}
