"use client"; // This is a client component

import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import allElements from './allAppliances';

interface BreakdownProps {
    onBreakdownChange: (sata: Object) => void;
  }

  export default function Breakdown({ onBreakdownChange, ...props }: BreakdownProps) {

    const router = useRouter();
    const [formData, setFormData] = useState({});
    const [isCheckedObject, setIsChecked] = useState({});

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked({
            ...isCheckedObject,
            [e.target.name]: e.target.checked,
        });
        if(!e.target.checked) {
            setFormData({
                ...formData,
                [e.target.name+'_quantity']: 0,
                [e.target.name+'_usage']: 0,
            });
        }
    };  
    
    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        onBreakdownChange(formData);
    }, [formData]);

    interface RowObject {
        name: string;
        displayName: string;
        value: string;
        power_w: number;
        hours_per_day: number;
        quantity: number;
    }

    interface AccordianObject {
        name: string;
        displayName: string;
        items: RowObject[];
    }

    const renderRow = (props: RowObject) => {
        return (
            <>
                <div></div>
                <div className="first-col col-span-2">
                    <label htmlFor={props.name}>
                        <input
                            id={props.name}
                            className="mr-[8px] border-[#257FE6] border-2 custom-checkbox"
                            type='checkbox'
                            name={props.name}
                            value={formData[props.name as keyof typeof formData]}
                            onChange={handleCheckboxChange}
                        />
                        {props.displayName}
                    </label>
                </div>
                <div>
                    <select
                        className="select mini-select w-4/5"
                        name={`${props.name}_quantity`}
                        value={formData[`${props.name}_quantity` as keyof typeof formData]}
                        onChange={handleSelectChange}
                        disabled={!isCheckedObject[props.name as keyof typeof isCheckedObject]}
                    >
                    {Array.from({ length: 11 }, (_, i) => (
                        <option key={props.name+i} value={i}>
                        {i}
                        </option>
                    ))}
                    </select>
                </div>
                <div>
                    <select
                        className="select mini-select w-4/5"
                        name={`${props.name}_usage`}
                        value={formData[`${props.name}_usage` as keyof typeof formData]}
                        onChange={handleSelectChange}
                        disabled={!isCheckedObject[props.name as keyof typeof isCheckedObject]}
                    >
                    {Array.from({ length: 25 }, (_, i) => (
                        <option key={props.name+'u'+i} value={i}>
                        {i}
                        </option>
                    ))}
                    </select>
                </div>
                <div></div>
            </>
        );
    }

    const renderAccordianWithRows = (props: AccordianObject) => {
        return (
            <details className="group text-sm">
                <summary className="flex justify-between items-center p cursor-pointer list-none px-10 pb-[5px]">
                    <p className="textg font-semibld">{props.name}</p>
                    <span className="text-lg font-bold group-open:hidden">
                        <Image
                            src="/images/collaps-arrow-down.svg"
                            alt="chevron"
                            width={36}
                            height={36}
                        />
                    </span>
                    <span className="text-lg font-bold hidden group-open:block">
                        <Image
                            src="/images/collaps-arrow-up.svg"
                            alt="chevron"
                            width={36}
                            height={36}
                        />
                    </span>
                </summary>
                <div className="grid grid-cols-6 gap-2 auto-cols-auto items-center table-row">
                    <div/>
                    <div className="first-col col-span-2"></div>
                    <div>Qtuantity</div>
                    <div>Hours</div>
                    <div/>
                </div>
                <div>
                    {props.items.map((row: any) => {
                        return (
                            <div key={row.name} className="grid grid-cols-6 gap-2 auto-cols-auto items-center table-row">
                                {renderRow(row)}
                            </div>
                        )}
                    )}
                </div>
            </details>
        );
    }

    return (
        <div className='w-full'>
            
            <>
                {allElements.map((row: any) => {
                   if(row.type === "accordian") {
                       return renderAccordianWithRows(row)
                   }
                   else {
                       return (
                            <div key={row.name} className="grid grid-cols-6 gap-2 auto-cols-auto items-center table-row">
                                {renderRow(row)}
                            </div>
                       )
                   }
                })}
            </>
        </div>
    )

}
