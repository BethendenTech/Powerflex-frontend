"use client"; // This is a client component

import { useRouter } from 'next/navigation';
import StatusImage from '@/components/StatusImage';
import { useStateMachine } from 'little-state-machine';
import updateAction from '@/little-state/action';
import PaymentMethodCard from '@/components/payment/paymentMethodCard';
import PaymentSummaryCard from '@/components/payment/paymentSummary';
import PaymentCardDetails from '@/components/payment/paymentCardDetails';
import Image from 'next/image';
import useQuotation from '@/hooks/quotation';
import PayStackPayment from '@/components/payment/payStack';

export default function Page() {

  const router = useRouter();
  const { state } = useStateMachine({ updateAction });

  const { quote } = useQuotation();

  const onBack = () => {
    router.push(`/quotation/payment-summary`);
  }

  console.log("state", state)

  return (
    <div>
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

      <StatusImage status={5} />
      <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <div className="w-full flex gap-4 items-center flex-col sm:flex-row">
          <div className="w-full pt-4">
            <h4 className="heading text-center">Payment Summary</h4>
            <div className="w-full container mx-auto flex flex-col gap-4 mt-4">
              <PaymentSummaryCard quote={quote} />
              <PaymentMethodCard />
              {state.payment_method == "credit_debit_card" && (
                <PaymentCardDetails quote={quote}/>
              )}
              {state.payment_method == "paystack" && (
                <PayStackPayment quote={quote}/>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
