import { useQuery, useMutation } from 'react-query';
import { Balance } from '~/types/balance';
import { queryClient } from './client';

type TransferDigitalRublesRequest = {
  fromPrivateKey: string;
  toPublicKey: string;
  amount: number;
};

const baseUrl = import.meta.env.VITE_VTB_API_BASE_URL;
const publicWalletKey = import.meta.env.VITE_WALLET_PUBLIC_KEY;
const privateAdminWalletKey = import.meta.env.VITE_ADMIN_WALLET_PRIVATE_KEY;
const KEY = 'balance';

export const invalidateBalance = () => queryClient.invalidateQueries(KEY);

function fixBalance(balance: Balance): Balance {
  return {
    coinsAmount: Number(balance.coinsAmount.toFixed(4)),
    maticAmount: Number(balance.maticAmount.toFixed(4)),
  };
}

async function getBalance(): Promise<Balance> {
  const res = await fetch(`${baseUrl}/v1/wallets/${publicWalletKey}/balance`);
  const balance: Balance = await res.json();
  return fixBalance(balance);
}

async function transferDigitalRubles(amount: number) {
  const body: TransferDigitalRublesRequest = {
    amount,
    fromPrivateKey: privateAdminWalletKey,
    toPublicKey: publicWalletKey,
  };
  return fetch(`${baseUrl}/v1/transfers/ruble`, {
    body: JSON.stringify(body),
    method: 'POST',
  });
}

export function useBalance() {
  return useQuery([KEY], getBalance, { refetchInterval: 2000 });
}

export function useTransferDigitalRubles() {
  return useMutation(async (amount: number) => {
    await transferDigitalRubles(amount);
    invalidateBalance();
  });
}
