import { Box, SystemStyleObject } from '@chakra-ui/react';
import { colors } from '~/theme/colors';

type Props = {
  children: React.ReactNode;
  sx?: SystemStyleObject;
};

export const PanelComponent: React.FC<Props> = ({ children, sx }) => (
  <Box
    sx={{
      bg: colors.brand.blue[700],
      borderRadius: '50px',
      ...sx,
    }}
  >
    {children}
  </Box>
);
