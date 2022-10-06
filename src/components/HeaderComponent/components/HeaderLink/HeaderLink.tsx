import { Text } from '@chakra-ui/react';
import { To, NavLink } from 'react-router-dom';
import { colors } from '~/theme/colors';

type Props = { to: To; children: React.ReactNode };

export const HeaderLink: React.FC<Props> = ({ to, children }) => (
  <NavLink to={to}>
    {({ isActive }) => (
      <Text
        sx={{
          fontWeight: 300,
          fontSize: '1.25rem',
          color: isActive ? colors.brand.blue[200] : colors.brand.white,
          '&:hover': {
            color: colors.brand.blue[200],
          },
          '&:active': {
            color: colors.brand.blue[300],
          },
        }}
      >
        {children}
      </Text>
    )}
  </NavLink>
);
