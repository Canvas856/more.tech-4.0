import { useQuery } from 'react-query';
import { Balance } from '~/types/balance';
import { queryClient } from './client';

const KEY = 'balance';

function floorBalance(balance: Balance): Balance {
  return {
    coinsAmount: Math.floor(balance.coinsAmount),
    maticAmount: Math.floor(balance.maticAmount),
  };
}

async function getBalance(): Promise<Balance> {
  const baseUrl = import.meta.env.VITE_VTB_API_BASE_URL;
  const publicKey = import.meta.env.VITE_WALLET_PUBLIC_KEY;
  const res = await fetch(`${baseUrl}/v1/wallets/${publicKey}/balance`);
  const balance: Balance = await res.json();
  return floorBalance(balance);
}

export function useBalance() {
  return useQuery([KEY], getBalance);
}

export const invalidateBalance = () => queryClient.invalidateQueries(KEY);
