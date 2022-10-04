import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { AmountCoins } from './components/AmountCoins';
import { Links } from './components/Links';
import { LogoVTB } from './components/LogoVTB';

export const HeaderComponent = () => {
  return (
    <Flex gap={'116px'}>
      <LogoVTB />
      <Links />
      <AmountCoins />
    </Flex>
  );
};
