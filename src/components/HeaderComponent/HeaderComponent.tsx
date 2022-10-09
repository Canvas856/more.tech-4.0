import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Flex,
  Image,
  Box,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Link, To } from 'react-router-dom';
import { AmountCoins } from './components/AmountCoins';
import { Links } from './components/Links';
import { LogoVTB } from './components/LogoVTB';
import { Routes } from '~/router/routes';
import { colors } from '~/theme/colors';

const userImageUrl = new URL('./user.svg', import.meta.url).href;

const DropdownLink: React.FC<{
  children: React.ReactNode;
  to: To;
  borderBottom?: string;
  onClick?: () => void;
}> = ({ children, to, borderBottom = '', onClick }) => (
  <Text
    as={Link}
    onClick={onClick}
    fontSize='16px'
    fontWeight='300'
    color={colors.brand.white}
    to={to}
    borderBottom={borderBottom}
    pt='10px'
    pb='10px'
    sx={{ '&:hover': { color: colors.brand.blue[100] } }}
  >
    {children}
  </Text>
);

const DropdownComponent = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Popover isOpen={isOpen} onClose={onClose}>
      <PopoverTrigger>
        <Box as='button' onClick={onToggle} pl='20px' pr='20px'>
          <Image w='50px' h='50px' cursor='pointer' alt='user' src={userImageUrl} />
        </Box>
      </PopoverTrigger>
      <Portal>
        <PopoverContent
          maxWidth='250px'
          bg={colors.brand.blue[700]}
          borderRadius='20px'
          p='10px 20px'
          border='none'
        >
          <DropdownLink
            onClick={onClose}
            to={Routes.profile}
            borderBottom={`1px solid ${colors.brand.black}`}
          >
            Личный кабинет
          </DropdownLink>
          <DropdownLink
            onClick={onClose}
            to={Routes.wallet}
            borderBottom={`1px solid ${colors.brand.black}`}
          >
            Мой кошелек
          </DropdownLink>
          <DropdownLink onClick={onClose} to={''}>
            Выйти из аккаунта
          </DropdownLink>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export const HeaderComponent = () => {
  return (
    <Flex>
      <LogoVTB />
      <Box m='auto 0 auto auto'>
        <Links />
      </Box>
      <Box ml='auto' mr='20px'>
        <AmountCoins />
      </Box>
      <DropdownComponent />
    </Flex>
  );
};
