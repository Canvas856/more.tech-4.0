import axios from 'axios';
import { useQuery } from 'react-query';
import { TransactionHistoryItem } from '~/types/transaction-history';
import { queryClient } from './client';

const baseUrl = import.meta.env.VITE_VTB_API_BASE_URL;
const publicWalletKey = import.meta.env.VITE_WALLET_PUBLIC_KEY;
const HISTORY_KEY = 'history';

export const invalidateHistory = () => queryClient.invalidateQueries(HISTORY_KEY);

async function getTransactionHistory(): Promise<TransactionHistoryItem[]> {
  const res = await axios.post<{ history: TransactionHistoryItem[] }>(
    `${baseUrl}/v1/wallets/${publicWalletKey}/history`,
    JSON.stringify({
      page: 100,
      offset: 20,
      sort: 'asc',
    }),
  );
  const data = res.data.history;
  return data;
}

export function useTransactionHistory() {
  return useQuery([HISTORY_KEY], getTransactionHistory, { retry: 3 });
}
