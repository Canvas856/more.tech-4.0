import { Flex, Image, Text } from '@chakra-ui/react';
import { colors } from '~/theme/colors';

const coinIcon = new URL('../../assets/images/ditital-rubles-icon.svg', import.meta.url).href;
const expIcon = new URL('../../assets/images/exp-icon.svg', import.meta.url).href;

type Props = { reward: number; type: 'coin' | 'exp' };

export const RewardComponent: React.FC<Props> = ({ reward, type }) => (
  <Flex gap={'13px'} alignItems={'center'}>
    <Text color={colors.brand.white} fontWeight={'700'} fontSize={'40px'} lineHeight={'normal'}>
      {reward}
    </Text>
    <Image src={type === 'coin' ? coinIcon : expIcon} alt='coin' width={'35'} height={'35'} />
  </Flex>
);
