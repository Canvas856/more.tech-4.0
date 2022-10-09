import axios from 'axios';
import { useMutation } from 'react-query';
import { invalidateBalance } from './balance';
import { invalidateHistory } from './transaction-history';

type TransferDigitalRublesRequest = {
  fromPrivateKey: string;
  toPublicKey: string;
  amount: number;
};

const baseUrl = import.meta.env.VITE_VTB_API_BASE_URL;

export async function transferDigitalRubles(body: TransferDigitalRublesRequest) {
  return axios.post(`${baseUrl}/v1/transfers/ruble`, JSON.stringify(body));
}

export function useTransferDigitalRubles() {
  return useMutation(
    async (body: TransferDigitalRublesRequest) => {
      await transferDigitalRubles(body);
      invalidateBalance();
      invalidateHistory();
    },
    { retry: 3 },
  );
}
