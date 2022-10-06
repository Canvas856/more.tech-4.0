import { Flex, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Routes } from '~/router/routers';

const imgUrl = new URL('./VTB_Logo_2018 1.svg', import.meta.url).href;

export const LogoVTB = () => {
  return (
    <Flex alignItems={'center'}>
      <Link to={Routes.personalAccount}>
        <Image src={imgUrl} alt='VTB logo' />
      </Link>
    </Flex>
  );
};
