import { Box, Flex } from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';
import { Routers } from '~/router/routers';
import { colors } from '~/theme/colors';

export const Links = () => {
  return (
    <Flex gap='30px'>
      <NavLink
        style={(isActive) => ({
          color: isActive ? colors.brand.white : colors.brand.blue[200],
        })}
        to={Routers.personalAccount}
      >
        {Routers.personalAccount}
      </NavLink>
      <NavLink
        style={(isActive) => ({
          color: isActive ? colors.brand.white : colors.brand.blue[200],
        })}
        to={Routers.income}
      >
        {Routers.income}
      </NavLink>
      <NavLink
        style={(isActive) => ({
          color: isActive ? colors.brand.white : colors.brand.blue[200],
        })}
        to={Routers.catalog}
      >
        {Routers.catalog}{' '}
      </NavLink>
      <NavLink
        style={(isActive) => ({
          color: isActive ? colors.brand.white : colors.brand.blue[200],
        })}
        to={Routers.coinKeeper}
      >
        {Routers.coinKeeper}{' '}
      </NavLink>
      <NavLink
        style={(isActive) => ({
          color: isActive ? colors.brand.white : colors.brand.blue[200],
        })}
        to={Routers.platformPrincip}
      >
        {Routers.platformPrincip}{' '}
      </NavLink>
    </Flex>
  );
};
