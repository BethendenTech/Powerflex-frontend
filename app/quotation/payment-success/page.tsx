"use client"; // This is a client component

import StatusImage from '@/components/StatusImage';
import { useStateMachine } from 'little-state-machine';
import updateAction from '@/little-state/action';

export default function Page() {

  const { state } = useStateMachine({ updateAction });

  console.log("state", state)

  return (
    <div>
      <StatusImage status={6} />
      <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <div className="w-full flex gap-4 items-center flex-col sm:flex-row">
          <div className="w-full pt-4">
            <div className="w-full container mx-auto flex flex-col gap-4 text-center">
              <div className="max-w-lg mx-auto p-4 bg-white rounded-lg px-10">
                <h4 className="heading text-center mb-5">Payment Succesful</h4>
                <p className="text-black font-harmonia text-[14px] font-normal leading-[17.11px] text-center">Installer will call you within the next few hours...
                  <br /><br />Please continue to create your Powerflex <br />Customer account.</p>
              </div>

              <div className="m-auto max-w-[570px] bottom-fixed fixed bottom-0 w-full p-5 pb-[10px]">
                <button
                  type='submit'
                  className="mt-[15px] btn self-center w-full text-white flex items-center justify-center text-xl sm:text-base px-4 sm:px-5"
                  rel="noopener noreferrer"
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
