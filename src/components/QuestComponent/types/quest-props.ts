import { SystemStyleObject } from '@chakra-ui/react';
import { Disabled } from '~/types/disabled';

export type QuestProps = {
  title: string;
  disabled: Disabled;
  action: () => void;
  subtitle?: string;
  sx?: SystemStyleObject;
};
