import { Flex, Image } from '@chakra-ui/react';

const imgUrl = new URL('./VTB_Logo_2018 1.svg', import.meta.url).href;

export const LogoVTB = () => {
  return (
    <Flex alignItems={'center'}>
      <Image src={imgUrl} alt='VTB logo' />
    </Flex>
  );
};
