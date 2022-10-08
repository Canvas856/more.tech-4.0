import { Box, Grid, GridItem, SystemStyleObject } from '@chakra-ui/react';
import { ProfileComponent } from '~/components/ProfileComponent';
import {
  LargeQuestComponent,
  MediumQuestComponent,
  SmallQuestComponent,
} from '~/components/QuestComponent';
import { SectionComponent } from '~/components/SectionComponent';
import { RatingComponent } from '~/components/RatingComponent';

import likesImage from '~/assets/images/likes.png';
import anchorImage from '~/assets/images/anchor.png';
import coffeeImage from '~/assets/images/coffee.png';
import helmImage from '~/assets/images/helm.png';
import mouseImage from '~/assets/images/mouse.png';
import backpackImage from '~/assets/images/backpack.png';

const TwoColumnsLayout: React.FC<{
  leftColumn: React.ReactNode;
  rightColumn: React.ReactNode;
  sx?: SystemStyleObject;
}> = ({ leftColumn, rightColumn, sx }) => (
  <Grid sx={sx} templateColumns='1fr 450px' gap='22px'>
    <GridItem>{leftColumn}</GridItem>
    <GridItem>{rightColumn}</GridItem>
  </Grid>
);

const ProfilePage = () => {
  return (
    <Box as='section' mt='70px'>
      <TwoColumnsLayout
        sx={{ alignItems: 'flex-end' }}
        leftColumn={<ProfileComponent />}
        rightColumn={
          <MediumQuestComponent
            action={() => console.log('click')}
            actionLabel='открыть карту'
            disabled={{ isDisabled: false }}
            label='Глава 1'
            title='Добро пожаловать на борт! Онбординг для сотрудников'
            sx={{
              backgroundColor: '#4992FF',
              backgroundImage: `url(${helmImage})`,
              backgroundPosition: '330% 160%',
              minHeight: '473px',
            }}
          />
        }
      />

      <SectionComponent sx={{ mt: '60px' }} size='lg' title='Активности'>
        <TwoColumnsLayout
          leftColumn={
            <>
              <LargeQuestComponent
                action={() => console.log('click')}
                actionLabel='участвовать'
                disabled={{ isDisabled: false, label: 'заблокировано' }}
                title='Расскажи друзьям о нашей компании в соцсетях'
                sx={{
                  background: `url(${likesImage}) right / auto no-repeat, linear-gradient(99.82deg, #347ACD 2.5%, #C487A4 100.84%)`,
                  paddingLeft: '38px',
                  paddingRight: '38px',
                  mb: '30px',
                }}
                deadline={new Date('10/10/2022 22:15:33')}
                subtitle='Напиши пост любви к нашей компании или выложи фото из офиса и сделай отметку аккаунта ВТБ в своём аккаунте'
                reward={75}
              />

              <Grid templateColumns='repeat(2, 1fr)' gap='30px'>
                <GridItem>
                  <SmallQuestComponent
                    action={() => console.log('click')}
                    disabled={{ isDisabled: false }}
                    title='Кофе брейк'
                    subtitle='Поболтай с коллегой за чашкой кофе'
                    sx={{
                      backgroundColor: '#884637',
                      backgroundImage: `url(${coffeeImage})`,
                      maxWidth: 'auto',
                    }}
                  />
                </GridItem>
                <GridItem>
                  <SmallQuestComponent
                    action={() => console.log('click')}
                    disabled={{ isDisabled: true, label: 'Доступно со 2 главы' }}
                    title='Пригласи друга'
                    subtitle='Отправь приглашение на собеседование своему другу и получи за него баллы'
                    sx={{
                      backgroundColor: '#4992FF',
                      backgroundImage: `url(${anchorImage})`,
                      maxWidth: 'auto',
                    }}
                  />
                </GridItem>
                <GridItem>
                  <SmallQuestComponent
                    action={() => console.log('click')}
                    disabled={{ isDisabled: true, label: 'Доступно со 2 главы' }}
                    title='Тестирование продуктов ВТБ'
                    subtitle='Найди баги и ошибки и распиши их, чтобы улучшить качество наших сервисов'
                    sx={{
                      backgroundColor: '#2CA054',
                      backgroundImage: `url(${mouseImage})`,
                      maxWidth: 'auto',
                    }}
                  />
                </GridItem>
                <GridItem>
                  <SmallQuestComponent
                    action={() => console.log('click')}
                    disabled={{ isDisabled: true, label: 'Доступно со 2 главы' }}
                    title='Вклад в образование'
                    subtitle='Выступи с презентацией, напиши статью, дополни документацию и получи награду'
                    sx={{
                      backgroundColor: '#E9A250',
                      backgroundImage: `url(${backpackImage})`,
                      maxWidth: 'auto',
                    }}
                  />
                </GridItem>
              </Grid>
            </>
          }
          rightColumn={<RatingComponent />}
        />
      </SectionComponent>
    </Box>
  );
};

export default ProfilePage;
