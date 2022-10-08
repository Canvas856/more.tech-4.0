import { Quest, Task } from '~/types/quest';

export function isTask(obj: any): obj is Task {
  return !obj.tasks;
}

export function isQuest(obj: any): obj is Quest {
  return obj.tasks;
}
