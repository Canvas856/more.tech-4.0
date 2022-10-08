import { Flex } from '@chakra-ui/react';
import { Routes } from '~/router/routes';
import { HeaderLink } from '../HeaderLink/HeaderLink';

export const Links = () => (
  <Flex gap='30px' alignItems={'center'}>
    <HeaderLink to={Routes.profile}>Личный кабинет</HeaderLink>
    <HeaderLink to={Routes.progressMap}>Карта прогресса</HeaderLink>
    <HeaderLink to={Routes.marketPlace}>Маркетплейс</HeaderLink>
    <HeaderLink to={Routes.wallet}>Мой кошелек</HeaderLink>
    <HeaderLink to={Routes.platformPrincip}>Как работает платформа</HeaderLink>
  </Flex>
);
