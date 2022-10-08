export interface Task {
  id: string;
  name: string;
  description: string;
  hint?: string;
  rewardCoin: number;
  rewardExperience: number;
  completed: boolean;
}

export interface Quest extends Task {
  bg: string;
  groupName: string;
  tasks: Task[];
}
