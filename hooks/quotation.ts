import { Quotation } from '@/types/quotation';
import useSWR from 'swr';

// Fetcher function with options for a POST request
const fetcher = (url: string, options: RequestInit) =>
  fetch(url, options).then((res) => res.json());

const useQuotation = (quotationData?: any) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/calculate-quote/`;

  // Prepare the options for the POST request
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(quotationData),
  };

  // Use SWR with dynamic data
  const { data, error, isLoading } = useSWR<Quotation>(
    [url, options],
    fetcher
  );
  return { data, error, isLoading };
};

export default useQuotation;
