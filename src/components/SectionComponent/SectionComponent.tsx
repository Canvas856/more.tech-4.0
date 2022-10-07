import { SystemStyleObject, Flex, Heading, Box } from '@chakra-ui/react';
import { colors } from '~/theme/colors';

type Props = {
  children: React.ReactNode;
  title: string;
  headerControls?: React.ReactNode;
  sx?: SystemStyleObject;
};

export const SectionComponent: React.FC<Props> = ({ children, headerControls, title, sx }) => (
  <Box as='section' sx={sx}>
    <Flex alignItems='center' mb='33px'>
      <Heading
        as='h2'
        fontWeight='600'
        fontSize='48px'
        lineHeight='100%'
        color={colors.brand.white}
      >
        {title}
      </Heading>
      {headerControls}
    </Flex>
    {children}
  </Box>
);
