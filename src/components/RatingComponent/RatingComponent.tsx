import { Flex, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Routes } from '~/router/routes';
import { colors } from '~/theme/colors';
import { PanelComponent } from '../PanelComponent';
import { UserRating } from './components';
import { mockUsersForRating } from './mockUsers';

export const RatingComponent = () => {
  return (
    <PanelComponent sx={{ padding: '40px 25px' }}>
      <Flex justifyContent={'space-between'} alignItems='center' marginBottom={'40px'}>
        <Heading as='h3' fontSize='32px' fontWeight='700'>
          Рейтинг
        </Heading>
        <Text
          as={Link}
          to={Routes.profile}
          sx={{ color: colors.brand.blue[800], '&:hover': { textDecoration: 'underline' } }}
        >
          Весь список
        </Text>
      </Flex>
      <UnorderedList margin='0' listStyleType='none' spacing={'10px'}>
        {mockUsersForRating
          .sort((a, b) => b.coinAmount - a.coinAmount)
          .map((user) => (
            <ListItem
              sx={{
                paddingBottom: '13px',
                paddingTop: '13px',
                '&:first-child': {
                  paddingTop: 0,
                },
                '&:last-child': {
                  paddingBottom: 0,
                },
                '&:not(:last-child)': {
                  borderBottom: `1px solid ${colors.brand.blue[600]}`,
                },
              }}
              key={user.level}
            >
              <UserRating name={user.name} level={user.level} amountCoin={user.coinAmount} />
            </ListItem>
          ))}
      </UnorderedList>
    </PanelComponent>
  );
};
