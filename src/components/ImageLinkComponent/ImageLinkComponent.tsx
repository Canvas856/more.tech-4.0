import { Box, Flex, Heading, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import { colors } from '~/theme/colors';

type Props = {
  title: string;
  subTitle: string;
  imgUrl: string;
};
export const ImageLinkComponent = ({ title, subTitle, imgUrl }: Props) => {
  return (
    <LinkBox
      _hover={{
        backgroundColor: colors.brand.blue[200],
      }}
      bgColor={colors.brand.blue[700]}
      borderRadius={'20px'}
    >
      <LinkOverlay href='#'>
        <Flex padding={'23px 19px'} width={'298px'} height={'138px'} position={'relative'}>
          <Flex
            justifyContent={'space-between'}
            flexDir={'column'}
            position={'relative'}
            zIndex={'2'}
          >
            <Text fontSize={'18px'}>{title}</Text>
            <Heading fontSize={'28px'}>{subTitle}</Heading>
          </Flex>
          <Box position={'absolute'} right={'0'} bottom={'0'}>
            <Image alt={title} src={imgUrl} />
          </Box>
        </Flex>
      </LinkOverlay>
    </LinkBox>
  );
};
