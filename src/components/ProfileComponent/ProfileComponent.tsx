import { Box, Flex, Text } from '@chakra-ui/react';
import { colors } from '~/theme/colors';
import { ProfileInfoItem, ProfileInfoListComponent } from './components/ProfileInfoListComponent';
import { PanelComponent } from '../PanelComponent';
import { ProfileProgressComponent } from './components/ProfileProgressComponent';
import { AchievementListComponent } from '../AchievementListComponent';

const profileInfoList: ProfileInfoItem[] = [
  {
    title: 'всего выполнено заданий',
    value: 36,
  },
  {
    title: 'заработано монет за всё время',
    value: 253,
  },
  {
    title: 'потрачено монет за всё время',
    value: 27,
  },
  {
    title: 'проведено кофебрейков',
    value: 2,
  },
  {
    title: 'проведено спринтеров',
    value: 0,
  },
];

export const ProfileComponent = () => {
  return (
    <PanelComponent sx={{ padding: '47px 24px 24px 24px', position: 'relative', mt: '103px' }}>
      <Box
        position='absolute'
        left='50%'
        top='50%'
        transform='translate(-50%, -50%)'
        background='#0085FF'
        width='80%'
        height='70%'
        opacity='0.7'
        filter='blur(145px)'
        zIndex='-1'
      />
      <Flex gap='50px'>
        <Box flex='0 416px'>
          <ProfileProgressComponent
            title='Артамонов Александр'
            subtitle='Продуктовый дизайнер'
            level={1}
            progress={{ current: 36, total: 50, label: 'заданий' }}
          />
        </Box>
        <Box flex='1'>
          <Text as='h2' fontSize='40px' fontWeight='600' color={colors.brand.white}>
            Твои достижения
          </Text>
          <Text as='p' mb='29px' fontSize='16px' fontWeight='500' color={colors.brand.gray[300]}>
            Отслеживай свой прогресс и получай особые значки и награды
          </Text>
          <Box mb='9px'>
            <AchievementListComponent />
          </Box>
          <ProfileInfoListComponent list={profileInfoList} />
        </Box>
      </Flex>
    </PanelComponent>
  );
};
