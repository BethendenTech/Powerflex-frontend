"use client"; // This is a client component

import { ChangeEvent, useState, useEffect, useRef, FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import StatusImage from '../components/StatusImage';
import Tooltip from '../components/Tooltip';
import useResizeObserver from "use-resize-observer";
import { useStateMachine } from 'little-state-machine';
import updateAction from '@/little-state/action';
import { useForm } from 'react-hook-form';
import { OutRightPurchase } from '@/components/overview/outrightPurchase';
import { FinancingPurchase } from '@/components/overview/financing';
import PaymentMethodCard from '@/components/payment/paymentMethodCard';
import PaymentSummaryCard from '@/components/payment/paymentSummary';
import PaymentCardDetails from '@/components/payment/paymentCardDetails';

export default function Page() {

  const router = useRouter();
  const { state } = useStateMachine({ updateAction });


  const onBack = () => {
    router.push(`/overview`);
  }

  console.log("state", state)

  return (
    <div className="pb-[260px] w-full p-[25px] m-auto max-w-[580px] sm:w-full items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">

      <StatusImage status={6} />
      <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <div className="w-full flex gap-4 items-center flex-col sm:flex-row">
          <div className="w-full pt-4">


            <div className="w-full container mx-auto flex flex-col gap-4">

              <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">

                <h4 className="text-center">Payment Succesful</h4>

                <p>Installer will call you within the next few hours...Please continue to create your Powerflex Customer account.</p>
              </div>


            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
