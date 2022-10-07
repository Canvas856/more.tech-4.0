import { Flex, Text } from '@chakra-ui/react';
import { CoinsComponent } from '~/components/CoinsComponent';
import { colors } from '~/theme/colors';

export const AmountCoins = () => {
  return (
    <Flex flexDirection={'column'} alignItems={'flex-end'}>
      <Text color={colors.brand.blue[500]} fontWeight={'500'} fontSize={'20px'}>
        Баланс coin
      </Text>
      <CoinsComponent coins={253} />
    </Flex>
  );
};
