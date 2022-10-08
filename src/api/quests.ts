import { useMutation, useQuery } from 'react-query';
import { Quest } from '~/types/quest';
import { invalidateBalance } from './balance';
import { queryClient } from './client';
import questService from './services/quest-service';

const KEY = 'quests';

export const invalidateQuests = () => queryClient.invalidateQueries(KEY);

export function useQuests() {
  return useQuery([KEY], () => questService.getQuests());
}

export function useSetQuests() {
  return useMutation(async (quests: Quest[]) => {
    await questService.setQuests(quests);
    invalidateQuests();
    invalidateBalance();
  });
}
