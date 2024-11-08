"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const BusinessApplicationForm = () => {
    const router = useRouter();
    
    // Set up react-hook-form with default values for the inputs
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            first_name: '',
            last_name: '',
            phone_number: '',
            email: '',
            role: 'Director',
            business_name: '',
            house_number: '',
            street_name: '',
            nearest_bus_stop: '',
            lga: '',
            state: '',
            bvn: '',
            documents:""
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
        <div className='gap-6 flex flex-col mt-6 pt-4'>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <h5 className="font-harmonia text-base font-bold leading-[19.79px] text-left text-black pb-4">
                    Business Application
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

                {/* Role (Dropdown) */}
                <div className='input-group'>
                    <label className="label">Role*</label>
                    <select
                        {...register("role", { required: "Role is required" })}
                        className="input w-full"
                    >
                        <option value="Director">Director</option>
                    </select>
                    {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>}
                </div>

                {/* Business Name */}
                <div className='input-group'>
                    <label className="label">Business Name*</label>
                    <input
                        type="text"
                        {...register("business_name", { required: "Business name is required" })}
                        className={errors.business_name ? "input w-full border border-red-500" : "input w-full"}
                    />
                    {errors.business_name && <p className="text-red-500 text-sm mt-1">{errors.business_name.message}</p>}
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

                {/* Street Name */}
                <div className='input-group'>
                    <label className="label">Street Name*</label>
                    <input
                        type="text"
                        {...register("street_name", { required: "Street name is required" })}
                        className={errors.street_name ? "input w-full border border-red-500" : "input w-full"}
                    />
                    {errors.street_name && <p className="text-red-500 text-sm mt-1">{errors.street_name.message}</p>}
                </div>

                {/* Nearest Bus Stop */}
                <div className='input-group'>
                    <label className="label">Nearest Bus Stop*</label>
                    <input
                        type="text"
                        {...register("nearest_bus_stop", { required: "Nearest bus stop is required" })}
                        className={errors.nearest_bus_stop ? "input w-full border border-red-500" : "input w-full"}
                    />
                    {errors.nearest_bus_stop && <p className="text-red-500 text-sm mt-1">{errors.nearest_bus_stop.message}</p>}
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

                {/* BVN */}
                <div className='input-group'>
                    <label className="label">BVN (Bank Verification Number)*</label>
                    <input
                        type="text"
                        {...register("bvn", { required: "BVN is required" })}
                        className={errors.bvn ? "input w-full border border-red-500" : "input w-full"}
                    />
                    {errors.bvn && <p className="text-red-500 text-sm mt-1">{errors.bvn.message}</p>}
                </div>
                {/* BVN */}
                <div className='input-group'>
                    <label className="label">Upload Documents*</label>
                    <input
                        type="file"
                        multiple
                        {...register("documents", { required: "Document is required" })}
                        className={errors.documents ? "input w-full border border-red-500" : "input w-full"}
                    />
                    {errors.bvn && <p className="text-red-500 text-sm mt-1">{errors.documents.message}</p>}
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
    );
};

export default BusinessApplicationForm;
