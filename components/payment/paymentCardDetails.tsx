import React from "react";
import updateAction from "@/little-state/action";
import { useStateMachine } from "little-state-machine";
import { useForm } from "react-hook-form";

const PaymentCardDetails = () => {
    const { actions, state } = useStateMachine({ updateAction });

    // Set up react-hook-form
    const { register, handleSubmit, formState: { errors }, setError, setValue, watch } = useForm({
        defaultValues: {
            name_card: "",
            card_number: "",
            expiration_date: "",
            security_code: "",
            postcode: "",
        }
    });

    // Handle form submission
    const onSubmit = (data) => {
        console.log(data);
        actions.updateAction(data);  // Pass form data to state machine action
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <h2 className="text-xl font-semibold mb-4">Card Details</h2>

            {/* Cardholder Name */}
            <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="name_card">
                    Name on Card
                </label>
                <input
                    id="name_card"
                    type="text"
                    {...register("name_card", { required: "Cardholder name is required" })}
                    className={`mt-1 p-2 block w-full border ${errors.name_card ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                />
                {errors.name_card && <p className="text-red-500 text-sm mt-1">{errors.name_card.message}</p>}
            </div>

            {/* Card Number */}
            <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="card_number">
                    Card Number
                </label>
                <input
                    id="card_number"
                    type="text"
                    {...register("card_number", {
                        required: "Card number is required",
                        pattern: {
                            value: /^[0-9]{16}$/,
                            message: "Card number must be 16 digits"
                        }
                    })}
                    className={`mt-1 p-2 block w-full border ${errors.card_number ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                />
                {errors.card_number && <p className="text-red-500 text-sm mt-1">{errors.card_number.message}</p>}
            </div>

            {/* Expiration Date */}
            <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="expiration_date">
                    Expiration Date (MM/YY)
                </label>
                <input
                    id="expiration_date"
                    type="text"
                    {...register("expiration_date", {
                        required: "Expiration date is required",
                        pattern: {
                            value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                            message: "Invalid date format (MM/YY)"
                        }
                    })}
                    className={`mt-1 p-2 block w-full border ${errors.expiration_date ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                />
                {errors.expiration_date && <p className="text-red-500 text-sm mt-1">{errors.expiration_date.message}</p>}
            </div>

            {/* Security Code */}
            <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="security_code">
                    Security Code (CVV)
                </label>
                <input
                    id="security_code"
                    type="text"
                    {...register("security_code", {
                        required: "Security code is required",
                        pattern: {
                            value: /^[0-9]{3,4}$/,
                            message: "Security code must be 3 or 4 digits"
                        }
                    })}
                    className={`mt-1 p-2 block w-full border ${errors.security_code ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                />
                {errors.security_code && <p className="text-red-500 text-sm mt-1">{errors.security_code.message}</p>}
            </div>

            {/* Postcode */}
            <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="postcode">
                    Postcode
                </label>
                <input
                    id="postcode"
                    type="text"
                    {...register("postcode", { required: "Postcode is required" })}
                    className={`mt-1 p-2 block w-full border ${errors.postcode ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                />
                {errors.postcode && <p className="text-red-500 text-sm mt-1">{errors.postcode.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Confirm
                </button>
            </div>
        </form>
    );
};

export default PaymentCardDetails;
