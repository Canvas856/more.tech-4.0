import {
  Button,
  Flex,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useBalance } from '~/api/balance';
import { RewardComponent } from '~/components/RewardComponent';
import Router from '~/router/Router';
import { Routes } from '~/router/routes';
import { colors } from '~/theme/colors';

const userImageUrl = new URL('./user.svg', import.meta.url).href;

export const AmountCoins = () => {
  const { data: balance } = useBalance();

  return (
    <Flex flexDirection={'column'} alignItems={'flex-end'} gap={'10px'}>
      <Text color={colors.brand.blue[500]} fontWeight={'500'} fontSize={'20px'}>
        Баланс
      </Text>
      <Flex gap={'40px'}>
        <RewardComponent type='coin' reward={balance ? balance.coinsAmount : 0} />
        <Popover>
          <PopoverTrigger>
            <Image alt='user' src={userImageUrl} />
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody
                padding={'10px'}
                display={'flex'}
                bgColor={colors.brand.black}
                flexDirection={'column'}
              >
                <Link to={Routes.profile} color={colors.brand.white}>
                  Личный кабинет
                </Link>
                <Link to={Routes.wallet} color={colors.brand.white}>
                  Мой кошелек
                </Link>
                <Link to={''} color={colors.brand.white}>
                  Выйти из аккаунта
                </Link>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </Flex>
    </Flex>
  );
};
