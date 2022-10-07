import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { colors } from '~/theme/colors';
import { UserRating } from './components';
import { mockUsersForRating } from './mockUsers';

export const RatingComponent = () => {
  return (
    <Box
      borderRadius={'50px'}
      background={colors.brand.blue[700]}
      maxWidth={'450px'}
      padding={'32px 19px 42px'}
    >
      <Flex justifyContent={'space-between'} marginBottom={'20px'}>
        <Heading>Рейтинг</Heading>
        <Text color={colors.brand.blue[800]} alignSelf='center'>
          Весь список
        </Text>
      </Flex>
      <Flex flexDirection={'column'} gap={'10px'}>
        {mockUsersForRating.map((user) => {
          return (
            <UserRating
              name={user.name}
              level={user.level}
              amountCoin={user.coinAmount}
              key={user.level}
            />
          );
        })}
      </Flex>
    </Box>
  );
};
