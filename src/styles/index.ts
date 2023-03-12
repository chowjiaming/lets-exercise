import {extendTheme} from '@chakra-ui/react';
import {colours, fonts} from '@/styles/styles';
import {layerStyles} from '@/styles/layerStyles';
import {textStyles} from '@/styles/textStyles';
import {formTheme} from '@/styles/components/form';
import {buttonTheme} from '@/styles/components/button';

export const theme = extendTheme({
  colors: colours,
  fonts,
  layerStyles,
  textStyles,
  components: {
    Button: buttonTheme,
    Form: formTheme,
  },
});
