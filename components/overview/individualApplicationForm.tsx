"use client";

import updateAction from "@/little-state/action";
import { useStateMachine } from "little-state-machine";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const IndividualApplicationForm = () => {
    const router = useRouter();
    const { actions, state } = useStateMachine({ updateAction });

    // Set up react-hook-form with default values for the inputs
    const { register, handleSubmit, formState: { errors }, setError, setValue, watch } = useForm({
        defaultValues: {
            first_name: '',
            last_name: '',
            phone_number: '',
            email: '',
            house_number: '',
            street_address: '',
            landmark: '',
            nearest_bus_stop: '',
            town: '',
            city: '',
            state: '',
            lga: '',
            occupation: '',
            work_address: '',
            how_heard_about: ''
        }
    });

    // Handle form submission
    const onSubmit = (data: any) => {
        console.log("Form Data:", data);
        // You can trigger the update action or route navigation here
        // actions.updateAction(data);
        router.push("/quotation/payment-summary");
    };

    return (
        <>
            <div className='gap-6 flex flex-col mt-6 pt-4'>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <h5 className="font-harmonia text-base font-bold leading-[19.79px] text-left text-black pb-4">
                        Individual Application
                    </h5>

                    {/* First Name */}
                    <div className='input-group'>
                        <label className="label">First Name*</label>
                        <input
                            type="text"
                            {...register("first_name", { required: "First name is required" })}
                            className={errors.first_name ? "input w-full border border-red-500" : "input w-full"}
                        />
                        {errors.first_name && <p className="text-red-500 text-sm mt-1">{errors.first_name.message}</p>}
                    </div>

                    {/* Last Name */}
                    <div className='input-group'>
                        <label className="label">Last Name*</label>
                        <input
                            type="text"
                            {...register("last_name", { required: "Last name is required" })}
                            className={errors.last_name ? "input w-full border border-red-500" : "input w-full"}
                        />
                        {errors.last_name && <p className="text-red-500 text-sm mt-1">{errors.last_name.message}</p>}
                    </div>

                    {/* Phone Number */}
                    <div className='input-group'>
                        <label className="label">Phone Number*</label>
                        <input
                            type="text"
                            {...register("phone_number", { required: "Phone number is required" })}
                            className={errors.phone_number ? "input w-full border border-red-500" : "input w-full"}
                        />
                        {errors.phone_number && <p className="text-red-500 text-sm mt-1">{errors.phone_number.message}</p>}
                    </div>

                    {/* Email Address */}
                    <div className='input-group'>
                        <label className="label">Email Address*</label>
                        <input
                            type="email"
                            {...register("email", { required: "Email address is required" })}
                            className={errors.email ? "input w-full border border-red-500" : "input w-full"}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    {/* House Number */}
                    <div className='input-group'>
                        <label className="label">House Number*</label>
                        <input
                            type="text"
                            {...register("house_number", { required: "House number is required" })}
                            className={errors.house_number ? "input w-full border border-red-500" : "input w-full"}
                        />
                        {errors.house_number && <p className="text-red-500 text-sm mt-1">{errors.house_number.message}</p>}
                    </div>

                    {/* Street Address */}
                    <div className='input-group'>
                        <label className="label">Street Address*</label>
                        <input
                            type="text"
                            {...register("street_address", { required: "Street address is required" })}
                            className={errors.street_address ? "input w-full border border-red-500" : "input w-full"}
                        />
                        {errors.street_address && <p className="text-red-500 text-sm mt-1">{errors.street_address.message}</p>}
                    </div>

                    {/* Landmark */}
                    <div className='input-group'>
                        <label className="label">Landmark</label>
                        <input
                            type="text"
                            {...register("landmark")}
                            className={errors.landmark ? "input w-full border border-red-500" : "input w-full"}
                        />
                    </div>

                    {/* Nearest Bus Stop */}
                    <div className='input-group'>
                        <label className="label">Nearest Bus Stop</label>
                        <input
                            type="text"
                            {...register("nearest_bus_stop")}
                            className={errors.nearest_bus_stop ? "input w-full border border-red-500" : "input w-full"}
                        />
                    </div>

                    {/* Town */}
                    <div className='input-group'>
                        <label className="label">Town*</label>
                        <input
                            type="text"
                            {...register("town", { required: "Town is required" })}
                            className={errors.town ? "input w-full border border-red-500" : "input w-full"}
                        />
                        {errors.town && <p className="text-red-500 text-sm mt-1">{errors.town.message}</p>}
                    </div>

                    {/* City */}
                    <div className='input-group'>
                        <label className="label">City*</label>
                        <input
                            type="text"
                            {...register("city", { required: "City is required" })}
                            className={errors.city ? "input w-full border border-red-500" : "input w-full"}
                        />
                        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
                    </div>

                    {/* State */}
                    <div className='input-group'>
                        <label className="label">State*</label>
                        <input
                            type="text"
                            {...register("state", { required: "State is required" })}
                            className={errors.state ? "input w-full border border-red-500" : "input w-full"}
                        />
                        {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
                    </div>

                    {/* LGA */}
                    <div className='input-group'>
                        <label className="label">LGA (Local Government Area)*</label>
                        <input
                            type="text"
                            {...register("lga", { required: "LGA is required" })}
                            className={errors.lga ? "input w-full border border-red-500" : "input w-full"}
                        />
                        {errors.lga && <p className="text-red-500 text-sm mt-1">{errors.lga.message}</p>}
                    </div>

                    {/* Occupation */}
                    <div className='input-group'>
                        <label className="label">Occupation*</label>
                        <input
                            type="text"
                            {...register("occupation", { required: "Occupation is required" })}
                            className={errors.occupation ? "input w-full border border-red-500" : "input w-full"}
                        />
                        {errors.occupation && <p className="text-red-500 text-sm mt-1">{errors.occupation.message}</p>}
                    </div>

                    {/* Full Work or Business Address */}
                    <div className='input-group'>
                        <label className="label">Full Work or Business Address*</label>
                        <input
                            type="text"
                            {...register("work_address", { required: "Work or Business address is required" })}
                            className={errors.work_address ? "input w-full border border-red-500" : "input w-full"}
                        />
                        {errors.work_address && <p className="text-red-500 text-sm mt-1">{errors.work_address.message}</p>}
                    </div>

                    {/* "How did you hear about Powerflex?" */}
                    <div className='input-group'>
                        <label className="label">How did you hear about Powerflex?*</label>
                        <input
                            type="text"
                            {...register("how_heard_about", { required: "This field is required" })}
                            className={errors.how_heard_about ? "input w-full border border-red-500" : "input w-full"}
                        />
                        {errors.how_heard_about && <p className="text-red-500 text-sm mt-1">{errors.how_heard_about.message}</p>}
                    </div>

                    <div className="m-auto max-w-[570px] bottom-fixed fixed bottom-0 w-full p-5 pb-[10px]">
                        <button
                            type='submit'
                            className="mt-[15px] btn self-center w-full text-white flex items-center justify-center text-xl sm:text-base px-4 sm:px-5"
                            rel="noopener noreferrer"
                        >
                            Apply for Financing
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default IndividualApplicationForm;
