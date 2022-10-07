import { Box, Flex } from '@chakra-ui/react';
import { colors } from '~/theme/colors';

export type ProfileInfoItem = { title: string; value: string | number };
type Props = {
  list: ProfileInfoItem[];
};

export const ProfileInfoListComponent: React.FC<Props> = ({ list }) => (
  <Box as='ul'>
    {list.map(({ title, value }, index) => (
      <Flex
        as='li'
        key={index}
        alignItems='center'
        gap='10px'
        justifyContent='space-between'
        fontSize='18px'
        padding='7px 0'
        sx={{
          '&:not(:last-child)': {
            borderBottom: `1px solid ${colors.brand.blue[600]}`,
          },
        }}
      >
        <Box as='span' fontWeight='500' color={colors.brand.blue[200]}>
          {title}
        </Box>
        <Box as='span' fontWeight='600' color={colors.brand.white}>
          {value}
        </Box>
      </Flex>
    ))}
  </Box>
);
