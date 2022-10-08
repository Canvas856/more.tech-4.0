import { ComponentStyleConfig } from '@chakra-ui/react';
import { colors } from '../colors';

// https://chakra-ui.com/docs/styled-system/customize-theme#customizing-component-styles
// Пример изменения стилей компонента
export const Button: ComponentStyleConfig = {
  variants: {
    'brand-outline': {
      '--color': colors.brand.blue[200],
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
        color: 'var(--color)',
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
      '--color': colors.brand.blue[200],
      '--second-color': colors.brand.white,
      '--active-color': colors.brand.blue[300],
      border: `2px solid var(--second-color)`,
      borderRadius: '12px',
      fontSize: '24px',
      lineHeight: '120%',
      letterSpacing: '0.015em',
      padding: '14px 25px',
      height: 'auto',
      fontWeight: '800',
      background: 'var(--second-color)',
      color: 'var(--color)',
      '&:hover': {
        background: 'var(--color)',
        borderColor: 'var(--color)',
        color: 'var(--second-color)',
      },
      '&:active': {
        background: 'var(--active-color)',
        borderColor: 'var(--active-color)',
      },
      '&:disabled': {
        color: colors.brand.gray[200],
        borderColor: colors.brand.gray[100],
        background: colors.brand.gray[100],
      },
    },
  },
};
