import { Flex, Image, Text } from '@chakra-ui/react';
import { colors } from '~/theme/colors';

const imgUrl = new URL('./coin-svgrepo-com 1.svg', import.meta.url).href;

export const AmountCoins = () => {
  return (
    <Flex flexDirection={'column'} alignItems={'flex-end'}>
      <Text color={colors.brand.blue[500]} fontWeight={'500'} fontSize={'20px'}>
        Баланс coin
      </Text>
      <Flex gap={'13px'} alignItems={'center'}>
        <Text color={colors.brand.white} fontWeight={'700'} fontSize={'40px'} lineHeight={'normal'}>
          253
        </Text>
        <Image src={imgUrl} alt='coin' width={'45'} height={'45'} />
      </Flex>
    </Flex>
  );
};
