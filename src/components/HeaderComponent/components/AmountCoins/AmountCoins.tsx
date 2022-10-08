import { Flex, Text } from '@chakra-ui/react';
import { useBalance } from '~/api/balance';
import { RewardComponent } from '~/components/RewardComponent';
import { colors } from '~/theme/colors';

export const AmountCoins = () => {
  const { data: balance } = useBalance();

  return (
    <Flex flexDirection={'column'} alignItems={'flex-end'}>
      <Text color={colors.brand.blue[500]} fontWeight={'500'} fontSize={'20px'}>
        Баланс
      </Text>
      <RewardComponent type='coin' reward={balance ? balance.coinsAmount : 0} />
    </Flex>
  );
};
