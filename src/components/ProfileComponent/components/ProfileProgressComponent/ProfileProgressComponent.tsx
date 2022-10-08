import { Box, Center, Flex, Image, Text } from '@chakra-ui/react';
import { PanelComponent } from '~/components/PanelComponent';
import { colors } from '~/theme/colors';
import userImage from '~/assets/images/user.png';

export type ProfileProgress = { current: number; total: number; label: string };
type Props = {
  progress: ProfileProgress;
  title: string;
  subtitle: string;
  level: number;
};

export const ProfileProgressComponent: React.FC<Props> = ({ progress, subtitle, title, level }) => (
  <PanelComponent
    sx={{
      bg: colors.brand.blue[50],
      padding: '25px 30px',
      border: `1px solid ${colors.brand.сyan[100]}`,
      position: 'relative',
    }}
  >
    <Center
      position='absolute'
      top='-150px'
      left='50%'
      transform='translateX(-50%)'
      w='340px'
      h='340px'
      bg={`conic-gradient(${colors.brand.blue[200]} ${
        (360 / 100) * ((progress.current / progress.total) * 100)
      }deg, ${colors.brand.blue[700]} 0deg)`}
      borderRadius='50%'
    >
      <Image src={userImage} alt='' w='85%' h='85%' borderRadius='50%' bg={colors.brand.black} />
    </Center>
    <Text
      pt='170px'
      mb='6px'
      fontWeight='600'
      textAlign='center'
      fontSize='32px'
      color={colors.brand.white}
    >
      {title}
    </Text>
    <Text
      mb='47px'
      textAlign='center'
      fontWeight='400'
      fontSize='20px'
      color={colors.brand.purple[100]}
    >
      {subtitle}
    </Text>
    <Flex
      border={`3px solid ${colors.brand.blue[200]}`}
      borderRadius='50px'
      fontSize='20px'
      color={colors.brand.white}
    >
      <Box ml='auto' p='6px 10px' fontWeight='400'>
        {progress.current}
        <Text as='span' color={colors.brand.gray[100]}>
          /{progress.total}
        </Text>{' '}
        {progress.label}
      </Box>
      <Box
        ml='auto'
        fontWeight='600'
        bg={colors.brand.blue[200]}
        borderRadius='40px'
        mr='-1px'
        p='6px 26px'
      >
        {level} уровень
      </Box>
    </Flex>
  </PanelComponent>
);
