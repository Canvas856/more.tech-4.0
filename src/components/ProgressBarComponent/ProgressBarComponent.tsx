import { Box, Text } from '@chakra-ui/react';
import { colors } from '~/theme/colors';

type Props = { percent: number };

export const ProgressBarComponent: React.FC<Props> = ({ percent }) => (
  <Box>
    <Text mb='0.3em' fontWeight='600' fontSize='1.6em'>
      {Math.floor(percent)}%
    </Text>
    <Box
      h='8px'
      w='100%'
      maxW='350px'
      backgroundColor={colors.brand.blue[400]}
      borderRadius='100px'
      overflow='hidden'
    >
      <Box
        h='100%'
        w={`${percent}%`}
        backgroundColor={colors.brand.white}
        borderRadius='100px'
      ></Box>
    </Box>
  </Box>
);
