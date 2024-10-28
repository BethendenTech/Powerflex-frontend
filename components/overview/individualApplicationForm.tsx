"use client";

import { useRouter } from "next/navigation";
import React from "react";

const IndividualApplicationForm = () => {
    const router = useRouter();

    return (
        <>
            <div className='gap-6 flex flex-col mt-6 pt-4'>
                <h5 className="font-harmonia text-base font-bold leading-[19.79px] text-left text-black pb-4">
                    Individual Application
                </h5>
            </div>
        </>
    );
};

export default IndividualApplicationForm;
