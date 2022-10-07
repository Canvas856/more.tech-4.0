import { SystemStyleObject, Flex, Heading, Box } from '@chakra-ui/react';
import { colors } from '~/theme/colors';

type Props = {
  children: React.ReactNode;
  title: string;
  size: 'md' | 'lg';
  headerControls?: React.ReactNode;
  sx?: SystemStyleObject;
};

export const SectionComponent: React.FC<Props> = ({
  children,
  headerControls,
  title,
  size,
  sx,
}) => {
  const styles: { mb?: string; fontSize?: string } = {};
  switch (size) {
    case 'lg':
      styles.fontSize = '48px';
      styles.mb = '33px';
      break;
    case 'md':
    default:
      styles.fontSize = '32px';
      styles.mb = '13px';
      break;
  }
  return (
    <Box as='section' sx={sx}>
      <Flex alignItems='center' mb={styles.mb}>
        <Heading
          as='h2'
          fontWeight='600'
          fontSize={styles.fontSize}
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
};
