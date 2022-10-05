import { Box, Flex } from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';
import { Routers } from '~/router/routers';
import { colors } from '~/theme/colors';

export const Links = () => {
  return (
    <Flex gap='30px' alignItems={'center'}>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? colors.brand.white : colors.brand.blue[200],
          fontWeight: 600,
        })}
        to={Routers.personalAccount}
      >
        Личный кабинет
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? colors.brand.white : colors.brand.blue[200],
          fontWeight: 600,
        })}
        to={Routers.income}
      >
        Как заработать на монеты
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? colors.brand.white : colors.brand.blue[200],
          fontWeight: 600,
        })}
        to={Routers.catalog}
      >
        Каталог
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? colors.brand.white : colors.brand.blue[200],
          fontWeight: 600,
        })}
        to={Routers.coinKeeper}
      >
        Мой кошелек
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? colors.brand.white : colors.brand.blue[200],
          fontWeight: 600,
        })}
        to={Routers.platformPrincip}
      >
        Как работает платформа
      </NavLink>
    </Flex>
  );
};
