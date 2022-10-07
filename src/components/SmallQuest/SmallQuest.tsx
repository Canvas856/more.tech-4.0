import { Box, Image, Text } from '@chakra-ui/react';
import { UnlockIcon } from '@chakra-ui/icons';

type Props = {
  imgUrl: string;
  questName: string;
  disabled: boolean;
};
export const coffeeBrakeIcon = new URL('./coffee.svg', import.meta.url).href;

export const jakorIcon = new URL('./jakor.svg', import.meta.url).href;

export const SmallQuest = ({ imgUrl, questName, disabled }: Props) => {
  return (
    <>
      <Box
        bgColor={'rgba(4, 4, 49, 0.62)'}
        maxWidth={'250px'}
        maxHeight={'200px'}
        borderRadius={'20px'}
        filter={'blur(1.5px)'}
        position={'relative'}
        display={'flex'}
        padding={'10px'}
      >
        <Text whiteSpace={'pre'} width={'50%'} fontSize={'25px'}>
          {questName.split(' ').map((el) => {
            return (
              <>
                {el}
                <br />
              </>
            );
          })}
        </Text>
        <Image src={imgUrl} width={'150px'} alignSelf={'flex-end'} />
        <UnlockIcon
          boxSize={'70px'}
          position={'absolute'}
          top={'0'}
          left={'0'}
          bottom={'0'}
          margin={'auto'}
          right={'0'}
        ></UnlockIcon>
      </Box>
    </>
  );
};
