import { ComponentStyleConfig, extendTheme } from '@chakra-ui/react';
import { global } from './global';
import { colors } from './colors';

// https://chakra-ui.com/docs/styled-system/customize-theme#customizing-component-styles
// Пример изменения стилей компонента
const ButtonStyle: ComponentStyleConfig = {
  variants: {
    white: {
      bg: '#333',
      color: '#fff',
      border: '1px solid #333',
    },
  },
};

// https://chakra-ui.com/docs/styled-system/advanced-theming#theme-typings
// каждый раз после изменения темы надо запускать команду npm run gen:theme-typings
// для добавления типов
export default extendTheme({
  colors,
  styles: { global },
  components: {
    Button: ButtonStyle,
  },
});
