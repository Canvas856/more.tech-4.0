import { Flex, Image, Text } from '@chakra-ui/react';
import { colors } from '~/theme/colors';

const coinIcon = new URL('../../assets/images/ditital-rubles-icon.svg', import.meta.url).href;

type Props = { coins: number };

export const CoinsComponent: React.FC<Props> = ({ coins }) => (
  <Flex gap={'13px'} alignItems={'center'}>
    <Text color={colors.brand.white} fontWeight={'700'} fontSize={'40px'} lineHeight={'normal'}>
      {coins}
    </Text>
    <Image src={coinIcon} alt='coin' width={'35'} height={'35'} />
  </Flex>
);
