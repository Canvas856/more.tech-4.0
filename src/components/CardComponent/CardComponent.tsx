import { Badge, Box, Flex, Heading, Image } from '@chakra-ui/react';
import React, { Suspense } from 'react';
import { colors } from '~/theme/colors';

type Props = {
  amountCoins: number;
  cardName: string;
  badges?: string[];
  footer?: React.ReactNode;
  imageUrl: string;
};

const digitalRubleUrl = new URL('./digital rubles.svg', import.meta.url).href;

export const CardComponent: React.FC<Props> = ({
  amountCoins,
  cardName,
  badges,
  footer,
  imageUrl,
}) => {
  return (
    <Flex
      bgColor={colors.brand.purple[200]}
      flexDirection='column'
      padding={'11px 13px 19px'}
      gap={'16px'}
      maxWidth={'298px'}
      borderRadius='20px'
    >
      <Suspense>
        <Box position={'relative'}>
          <Image h='270px' alt={cardName} src={imageUrl} />
          {badges?.length !== 0 && (
            <Flex
              gap={'8px'}
              flexWrap={'wrap'}
              position={'absolute'}
              left={'-10px'}
              transform={'translate(10px,-35px);'}
            >
              {badges?.map((el) => {
                return (
                  <Badge
                    key={el}
                    borderRadius={'43px'}
                    padding={'5px 15px'}
                    color={colors.brand.blue[400]}
                    bgColor={colors.brand.gray[400]}
                    fontWeight={'500'}
                    borderEndRadius={'20px'}
                  >
                    {el}
                  </Badge>
                );
              })}
            </Flex>
          )}
        </Box>
      </Suspense>
      <Heading fontSize={'24px'} fontWeight={'600'}>
        {cardName}
      </Heading>
      <Flex gap={'5px'} alignItems={'flex-end'} lineHeight={'30px'}>
        <Box fontSize={'32px'} fontWeight={'700'}>
          {amountCoins}
        </Box>
        <Image alt={'coin'} src={digitalRubleUrl} />
      </Flex>
      {footer}
    </Flex>
  );
};
