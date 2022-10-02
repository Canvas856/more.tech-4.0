import { SystemStyleInterpolation } from '@chakra-ui/react';

// https://chakra-ui.com/docs/styled-system/global-styles
// Изменение глобальных стилей
export const global: SystemStyleInterpolation = {
  body: {
    bg: 'brand.black',
    color: 'brand.white',
    fontFamily: 'Gilroy, PT Sans, sans-serif',
  },
};
