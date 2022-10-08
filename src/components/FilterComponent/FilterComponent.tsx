import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import React from 'react';

interface Props {
  children: React.ReactNode;
}
export const FilterComponent: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};
