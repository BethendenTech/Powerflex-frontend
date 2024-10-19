"use client"; // This is a client component

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import StatusImage from '@/components/StatusImage';
import { useStateMachine } from 'little-state-machine';
import updateAction from '@/little-state/action';
import { OutRightPurchase } from '@/components/overview/outrightPurchase';
import { FinancingPurchase } from '@/components/overview/financing';
import Image from 'next/image';
import { OverviewData } from '@/components/overview/overview';
import { EstimatedEnergyRequirement } from '@/components/overview/estimatedEnergyRequirement';
import { defaultQuoteData } from '@/utils/formData';

export default function Page() {

  const router = useRouter();
  const { actions, state } = useStateMachine({ updateAction });

  const [quote, setQuote] = useState<QuoteInterface>(defaultQuoteData);

  useEffect(() => {
    calculateQuote()
  }, [state]);

  const calculateQuote = async () => {
    let data = { ...state }
    data.battery_autonomy_hours = state.battery_autonomy_hours_only + state.battery_autonomy_days * 24;
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/calculate-quote/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const data = await response.json();
        setQuote(data);
      } else {
        console.error('Failed to save user details');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handleToggle = (id: any) => {
    let formData = {
      finance: id
    }
    actions.updateAction(formData);
  };

  const onBack = () => {
    router.push(`/quotation/breakdown`);
  }

  return (
    <div className="pb-[260px] w-full p-[25px] m-auto max-w-[580px] sm:w-full items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <button className='flex items-center text-[#AEAEAE] font-bold' onClick={() => onBack()}>
        <Image
          src="/images/collaps-arrow-right.svg"
          alt="arrow icon"
          width={24}
          height={24}
          className="mr-2"
        />
        Back
      </button>

      <StatusImage status={4} />
      <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <div className="w-full flex gap-4 items-center flex-col sm:flex-row">
          <div className="w-full pt-4 pb-4 mb-2">
            <h4 className="heading text-center">Overview</h4>
            <div className="w-full container mx-auto flex flex-col gap-4">


              <OverviewData />

              <EstimatedEnergyRequirement quote={quote} />

              <div className="rounded-[12px] flex border-b border-gray-300 bg-[#FFFFFF] p-1" style={{ boxShadow: 'inset 0px 2px 8px 0px #00000040', justifyContent: 'space-between' }}>
                <button type='button' className={`px-7 py-2.5 text-sm font-harmonia font-normal leading-[1.3] ${state.finance ? "text-black text-[#424242]" : "tab-btn text-white"}`} onClick={() => { handleToggle(false) }}>
                  Outright Purchase
                </button>

                <button type='button' className={`px-7 py-2.5 text-sm font-harmonia font-normal leading-[1.3] ${state.finance ? "tab-btn text-white" : "text-black text-[#424242]"}`} onClick={() => { handleToggle(true) }}>
                  Financing
                </button>
              </div>

              {!state.finance && <OutRightPurchase quote={quote} />}
              {state.finance && <FinancingPurchase quote={quote} />}


            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
