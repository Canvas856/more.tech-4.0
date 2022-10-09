import { Balance } from '~/types/balance';

export function fixBalance(balance: Balance): Balance {
  return {
    coinsAmount: Number(balance.coinsAmount.toFixed(4)),
    maticAmount: Number(balance.maticAmount.toFixed(4)),
  };
}
