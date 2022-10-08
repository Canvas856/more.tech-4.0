import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import { colors } from '~/theme/colors';

type Props = {
  title: string;
  subTitle: string;
  imgUrl: string;
};
export const ImageLinkComponent = ({ title, subTitle, imgUrl }: Props) => {
  return (
    <Flex
      padding={'23px 19px'}
      width={'298px'}
      height={'138px'}
      bgColor={colors.brand.blue[700]}
      borderRadius={'20px'}
      margin={'0'}
      position={'relative'}
    >
      <Flex justifyContent={'space-between'} flexDir={'column'} position={'relative'} zIndex={'2'}>
        <Text fontSize={'18px'}>{title}</Text>
        <Heading fontSize={'28px'}>{subTitle}</Heading>
      </Flex>
      <Box position={'absolute'} right={'0'} bottom={'0'}>
        <Image alt={title} src={imgUrl} />
      </Box>
    </Flex>
  );
};
