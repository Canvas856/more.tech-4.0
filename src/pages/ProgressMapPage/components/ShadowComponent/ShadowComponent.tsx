import { Box, SystemStyleObject } from '@chakra-ui/react';
import { colors } from '~/theme/colors';

type Props = { size: 'md' | 'lg'; sx?: SystemStyleObject };

export const ShadowComponent: React.FC<Props> = ({ size, sx }) => (
  <Box
    boxSize={size === 'lg' ? '413px' : '253px'}
    bg={colors.brand.blue[900]}
    opacity='0.8'
    filter='blur(170px)'
    zIndex='-1'
    position='absolute'
    sx={sx}
  ></Box>
);
