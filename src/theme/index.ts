import { extendTheme } from '@chakra-ui/react';
import { global } from './global';
import { colors } from './colors';
import { Button } from './components/button';

// https://chakra-ui.com/docs/styled-system/advanced-theming#theme-typings
// каждый раз после изменения темы надо запускать команду npm run gen:theme-typings
// для добавления типов
export default extendTheme({
  colors,
  styles: { global },
  components: {
    Button,
  },
});
