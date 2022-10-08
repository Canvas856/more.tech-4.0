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
import { useBalance } from '~/api/balance';
import { RewardComponent } from '~/components/RewardComponent';
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
              <PopoverBody>
                <Button colorScheme='blue'>Button</Button>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </Flex>
    </Flex>
  );
};
