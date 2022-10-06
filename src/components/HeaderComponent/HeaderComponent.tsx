import { Flex } from '@chakra-ui/react';
import { AmountCoins } from './components/AmountCoins';
import { Links } from './components/Links';
import { LogoVTB } from './components/LogoVTB';

export const HeaderComponent = () => {
  return (
    <Flex justifyContent={'space-between'}>
      <LogoVTB />
      <Links />
      <AmountCoins />
    </Flex>
  );
};
