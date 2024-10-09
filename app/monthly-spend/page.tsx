"use client"; // This is a client component

import { ChangeEvent, useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import StatusImage from '../components/StatusImage';

export default function Page() {

  const router = useRouter();
  const [formData, setFormData] = useState({
    electricity_spend: '',
    price_band: 'A',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
        router.push(`/breakdown?electricity_spend=${formData.electricity_spend}&price_band=${formData.price_band}`);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
      <div className="pb-[260px] w-full p-[25px] m-auto max-w-[580px] sm:w-full items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <StatusImage status={2} />
      <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-center">
      <div className="w-full flex gap-4 items-center flex-col sm:flex-row">
          <div className="w-full pt-4">
            <div className="w-full container mx-auto text-center flex flex-col gap-4">
              <form className="w-full details-form flex flex-col gap-6 items-center" onSubmit={handleSubmit}>
              <div className='input-group'>
                  <label htmlFor="electricity_spend" className="label">
                    How much do you spend on electricity each month?
                  </label>
                  <input
                    id="electricity_spend"
                    className="input w-full"
                    type="number"
                    name="electricity_spend"
                    value={formData.electricity_spend}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='input-group'>
                  <label htmlFor="price_band" className="label">
                    Select your electricity band group
                  </label>
                  <div className="input-group input-group-background radio-group p-[20px]">
                    <div className="input-group items-center gap-[5px]">
                      <label htmlFor="band_a" className="label !font-bold">
                        Band A
                      </label>
                      <input
                        id="band_a"
                        type="radio"
                        className="input w-full radio-input"
                        name="price_band"
                        onChange={handleChange}
                        required
                        value="A"
                        />
                    </div>
                    <div className="input-group items-center gap-[5px]">
                      <label htmlFor="band_b" className="label !font-bold">
                        Band B
                      </label>
                      <input
                        id="band_b"
                        type="radio"
                        className="input w-full radio-input"
                        name="price_band"
                        onChange={handleChange}
                        required
                        value="B"
                      />
                    </div>
                    <div className="input-group items-center gap-[5px]">
                      <label htmlFor="band_c" className="label !font-bold">
                        Band C
                      </label>
                      
                      <input
                        id="band_c"
                        type="radio"
                        className="input w-full radio-input"
                        name="price_band"
                        onChange={handleChange}
                        required
                        value="C"
                      />
                    </div>
                  </div>
                </div>
                <input
                  type="submit"
                  className="btn self-center w-full text-white flex items-center justify-center text-xl sm:text-base px-4 sm:px-5"
                  rel="noopener noreferrer"
                  value="Next"
                />
              </form>
            </div>
          </div>
        </div>
       </main>
    </div>
  );
}
