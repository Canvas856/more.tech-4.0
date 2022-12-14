import axios from 'axios';
import { useQuery, useMutation } from 'react-query';
import { Balance } from '~/types/balance';
import { fixBalance } from '~/utils/balance';
import { queryClient } from './client';
import { invalidateHistory } from './transaction-history';
import { Nft } from '~/types/nft-balance';
import { transferDigitalRubles } from './transfer';

const baseUrl = import.meta.env.VITE_VTB_API_BASE_URL;
const publicWalletKey = import.meta.env.VITE_WALLET_PUBLIC_KEY;
const privateAdminWalletKey = import.meta.env.VITE_ADMIN_WALLET_PRIVATE_KEY;
const BALANCE_KEY = 'balance';
const NFT_KEY = 'nft-balance';

export const invalidateBalance = () => queryClient.invalidateQueries(BALANCE_KEY);
export const invalidateNftBalance = () => queryClient.invalidateQueries(NFT_KEY);

async function getBalance(): Promise<Balance> {
  const res = await axios.get<Balance>(`${baseUrl}/v1/wallets/${publicWalletKey}/balance`);
  return fixBalance(res.data);
}
async function getNft(): Promise<Nft[]> {
  const res = await axios.get<{ balance: Nft[] }>(
    `${baseUrl}/v1/wallets/${publicWalletKey}/nft/balance`,
  );
  return res.data.balance;
}
async function addRubles(amount: number) {
  return transferDigitalRubles({
    amount,
    fromPrivateKey: privateAdminWalletKey,
    toPublicKey: publicWalletKey,
  });
}

export function useBalance() {
  return useQuery([BALANCE_KEY], getBalance, { retry: 3 });
}
export function useNftBalance() {
  return useQuery([NFT_KEY], getNft, { retry: 3 });
}
export function useAddRubles() {
  return useMutation(
    async (amount: number) => {
      await addRubles(amount);
      invalidateBalance();
      invalidateHistory();
    },
    { retry: 3 },
  );
}
