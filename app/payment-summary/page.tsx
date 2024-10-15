"use client"; // This is a client component

import { useRouter, useSearchParams } from 'next/navigation';
import StatusImage from '../components/StatusImage';
import useResizeObserver from "use-resize-observer";
import { useStateMachine } from 'little-state-machine';
import updateAction from '@/little-state/action';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import PaymentSummaryCard from '@/components/payment/paymentSummary';

export default function Page() {

  const router = useRouter();
  const { actions, state } = useStateMachine({ updateAction });

  const { register, handleSubmit, formState: { errors }, setError, setValue, watch } = useForm({
    defaultValues: {
      total_cost: 1000,
    }
  });

  const allValues = watch();

  const onSubmit = async (formData: any) => {
    try {
      console.log('formData', formData)
      actions.updateAction(formData);

      router.push(`/payment-process`);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const onBack = () => {
    router.push(`/overview`);
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
          <div className="w-full pt-4">

            <h4 className="heading text-center">Payment Summary</h4>

            <div className="w-full container mx-auto flex flex-col gap-4 mt-4">
              <form className="w-full details-form flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>

                <h5 className='font-harmonia text-base font-bold leading-[19.79px] text-left text-black'>Outright Purchase</h5>
                <div className='bg-[#ffffff] rounded-[7px] p-3'>
                  <table className="table-auto w-full">
                    <tbody>
                      <tr>
                        <td className="sub-content text-left">Equipment</td>
                        <th className="sub-content text-right">value</th>
                      </tr>
                    </tbody>
                  </table>

                  <table className="table-auto w-full">
                    <tbody>
                      <tr className='pl-4 flex justify-around'>
                        <td className="sub-content text-left">Solar panels</td>
                        <th className="sub-content text-left">value</th>
                      </tr>
                      <tr className='pl-4 flex justify-around'>
                        <td className="sub-content text-left">Inverters</td>
                        <th className="sub-content text-left">value</th>
                      </tr>
                      <tr className='pl-4 flex justify-around'>
                        <td className="sub-content text-left">Batteries</td>
                        <th className="sub-content text-left">value</th>
                      </tr>
                    </tbody>
                  </table>

                  <PaymentSummaryCard />


                  <button
                    type='submit'
                    className="mt-[15px] btn self-center w-full text-white flex items-center justify-center text-xl sm:text-base px-4 sm:px-5"
                    rel="noopener noreferrer"
                  >
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
