import { ModalHeader, Button, Text } from '@chakra-ui/react';
import { colors } from '~/theme/colors';
import shape343Image from '~/assets/images/shape-343.png';

export const QuestModalHeaderComponent = () => (
  <ModalHeader
    borderRadius='50'
    padding='38px'
    paddingBottom='33px'
    position='relative'
    color={colors.brand.white}
    bg={`#812048 url(${shape343Image}) right / auto no-repeat`}
  >
    <Text fontWeight='500' fontSize='18px' mb='20px' lineHeight='120%'>
      Дополнительно
    </Text>
    <Text fontWeight='700' fontSize='42px' mb='30px' lineHeight='120%' maxWidth='406px'>
      Пройти курс Ajile. Гибкие методологии
    </Text>
    <Button sx={{ '--color': '#812048' }} variant='brand-outline'>
      начать квест
    </Button>
  </ModalHeader>
);
