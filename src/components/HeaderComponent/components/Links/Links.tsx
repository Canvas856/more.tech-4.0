import { Box, Flex } from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';
import { Routers } from '~/router/routers';
import { colors } from '~/theme/colors';

export const Links = () => {
  const navLinkStyles = ({isActive}) => {
    return
  }
  return (
    <Flex gap='30px'>
      <NavLink
        style={(isActive) => ({
          color: isActive ? colors.brand.blue[200] : colors.brand.white,
        })}
        
        to={Routers.personalAccount}
      >
        {Routers.personalAccount}
      </NavLink>
      <NavLink
        style={(isActive) => ({
          color: isActive ? colors.brand.blue[200] : colors.brand.white,
        })}
        to={Routers.income}
      >
        {Routers.income}
      </NavLink>
      <NavLink
        style={(isActive) => ({
          color: isActive ? colors.brand.blue[200] : colors.brand.white,
        })}
        to={Routers.catalog}
      >
        {Routers.catalog}{' '}
      </NavLink>
      <NavLink
        style={(isActive) => ({
          color: isActive ? colors.brand.blue[200] : colors.brand.white,
        })}
        to={Routers.coinKeeper}
      >
        {Routers.coinKeeper}{' '}
      </NavLink>
      <NavLink
        style={(isActive) => ({
          color: isActive ? colors.brand.blue[200] : colors.brand.white,
        })}
        to={Routers.platformPrincip}
      >
        {Routers.platformPrincip}{' '}
      </NavLink>
    </Flex>
  );
};
