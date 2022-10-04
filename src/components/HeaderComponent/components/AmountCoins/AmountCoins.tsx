import { Flex, Image, Text } from '@chakra-ui/react';

const imgUrl = new URL('./coin-svgrepo-com 1.svg', import.meta.url).href;

export const AmountCoins = () => {
  return (
    <Flex flexDirection={'column'}>
      <Text>Баланс coin</Text>
      <Flex gap={'13px'}>
        <Text>253</Text>
        <Image src={imgUrl} alt='coin' width={'45'} height={'45'} />
      </Flex>
    </Flex>
  );
};
