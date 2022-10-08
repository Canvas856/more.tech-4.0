import { Avatar, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import { imgUrl as coinIcon } from '~/components/CoinsComponent/CoinsComponent';
import { colors } from '~/theme/colors';

const avatarUrl = new URL('./Ellipse 3.svg', import.meta.url).href;

type Props = {
  name: string;
  level: number;
  amountCoin: number;
};

export const UserRating: React.FC<Props> = ({ name, level, amountCoin }) => {
  return (
    <Grid templateColumns='auto auto 1fr' alignItems='center' columnGap='23px'>
      <GridItem colStart={1} rowStart={1} rowEnd={3}>
        <Avatar src={avatarUrl} size='77px' />
      </GridItem>
      <GridItem colStart={2} rowStart={1}>
        <Heading size={'md'}>{name}</Heading>
      </GridItem>
      <GridItem colStart={2}>
        <Text color={colors.brand.yellow[100]} fontSize='xl'>
          {level} уровень
        </Text>
      </GridItem>
      <GridItem colStart={3} rowStart={1}>
        <Flex justifyContent={'flex-end'}>
          <Heading size={'md'}>{amountCoin}</Heading>
          <Image src={coinIcon} boxSize={'20px'} width={'10'} alt={'coin'} alignSelf={'center'} />
        </Flex>
      </GridItem>
    </Grid>
  );
};
