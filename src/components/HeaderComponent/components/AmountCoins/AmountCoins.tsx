import { Flex, Image, Text } from '@chakra-ui/react';
import { colors } from '~/theme/colors';

const imgUrl = new URL('./coin-svgrepo-com 1.svg', import.meta.url).href;

export const AmountCoins = () => {
  return (
    <Flex flexDirection={'column'}>
      <Text style={{ color: colors.brand.gray[300] }}>Баланс coin</Text>
      <Flex gap={'13px'}>
        <Text style={{ color: colors.brand.white, fontWeight: 700, fontSize: '40px' }}>253</Text>
        <Image src={imgUrl} alt='coin' width={'45'} height={'45'} />
      </Flex>
    </Flex>
  );
};
