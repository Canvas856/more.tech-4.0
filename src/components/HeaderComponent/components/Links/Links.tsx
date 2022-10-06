import { Flex } from '@chakra-ui/react';
import { Routes } from '~/router/routes';
import { HeaderLink } from '../HeaderLink/HeaderLink';

export const Links = () => (
  <Flex gap='30px' alignItems={'center'}>
    <HeaderLink to={Routes.personalAccount}>Личный кабинет</HeaderLink>
    <HeaderLink to={Routes.income}>Как заработать на монеты</HeaderLink>
    <HeaderLink to={Routes.catalog}>Каталог</HeaderLink>
    <HeaderLink to={Routes.coinKeeper}>Мой кошелек</HeaderLink>
    <HeaderLink to={Routes.platformPrincip}>Как работает платформа</HeaderLink>
  </Flex>
);
