import { Flex, Image, Text } from '@chakra-ui/react';
import { colors } from '~/theme/colors';

const imgUrl = new URL('./coin-svgrepo-com 1.svg', import.meta.url).href;

type Props = { coins: number };

export const CoinsComponent: React.FC<Props> = ({ coins }) => (
  <Flex gap={'13px'} alignItems={'center'}>
    <Text color={colors.brand.white} fontWeight={'700'} fontSize={'40px'} lineHeight={'normal'}>
      {coins}
    </Text>
    <Image src={imgUrl} alt='coin' width={'45'} height={'45'} />
  </Flex>
);
