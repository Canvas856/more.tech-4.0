import { ComponentStyleConfig } from '@chakra-ui/react';
import { colors } from '../colors';

// https://chakra-ui.com/docs/styled-system/customize-theme#customizing-component-styles
// Пример изменения стилей компонента
export const Button: ComponentStyleConfig = {
  variants: {
    'brand-outline': {
      border: `2px solid ${colors.brand.white}`,
      borderRadius: '12px',
      fontSize: '24px',
      lineHeight: '120%',
      letterSpacing: '0.015em',
      padding: '14px 25px',
      height: 'auto',
      fontWeight: '800',
      '&:hover': {
        background: colors.brand.white,
        color: colors.brand.blue[200],
      },
      '&:active': {
        background: colors.brand.gray[50],
        borderColor: colors.brand.gray[50],
      },
      '&:disabled': {
        color: colors.brand.gray[200],
        borderColor: colors.brand.gray[200],
        background: 'transparent',
      },
    },
    'brand-fill': {
      border: `2px solid ${colors.brand.white}`,
      borderRadius: '12px',
      fontSize: '24px',
      lineHeight: '120%',
      letterSpacing: '0.015em',
      padding: '14px 25px',
      height: 'auto',
      fontWeight: '800',
      background: colors.brand.white,
      color: colors.brand.blue[200],
      '&:hover': {
        background: colors.brand.blue[200],
        borderColor: colors.brand.blue[200],
        color: colors.brand.white,
      },
      '&:active': {
        background: colors.brand.blue[300],
        borderColor: colors.brand.blue[300],
      },
      '&:disabled': {
        color: colors.brand.gray[200],
        borderColor: colors.brand.gray[100],
        background: colors.brand.gray[100],
      },
    },
  },
};
