import { useMutation, useQuery } from 'react-query';
import { queryClient } from './client';
import expService from './services/exp-service';

const KEY = 'exp';

export const invalidateExp = () => queryClient.invalidateQueries(KEY);

export function useExp() {
  return useQuery([KEY], () => expService.getExp());
}
export function useAddExp() {
  return useMutation(async (amount: number) => {
    await expService.addExp(amount);
    invalidateExp();
  });
}
