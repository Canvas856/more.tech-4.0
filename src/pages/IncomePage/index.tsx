import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import {
  LargeQuestComponent,
  MediumQuestComponent,
  SmallQuestComponent,
} from '~/components/QuestComponent';
import { SectionComponent } from '~/components/SectionComponent';

import likesImage from '~/assets/images/likes.png';
import movieСlapperImage from '~/assets/images/movie-clapper.png';
import coffeeImage from '~/assets/images/coffee.png';
import anchorImage from '~/assets/images/anchor.png';
import shape16Image from '~/assets/images/shape-16.png';
import helmImage from '~/assets/images/helm.png';

const IncomePage = () => {
  return (
    <Box as='section' mt='60px'>
      <LargeQuestComponent
        action={() => console.log('click')}
        disabled={{ isDisabled: false, label: 'заблокировано' }}
        title='Расскажи друзьям о нашей компании в соцсетях'
        sx={{
          background: `url(${likesImage}) right / auto no-repeat, linear-gradient(99.82deg, #347ACD 2.5%, #C487A4 100.84%)`,
          mb: '100px',
        }}
        deadline={new Date('03/11/2023 22:15:33')}
        subtitle='Напиши пост любви к нашей компании или выложи фото из офиса и сделай отметку аккаунта ВТБ в своём аккаунте'
        reward={75}
      />
      <SectionComponent title='Ежедневные квесты' sx={{ mb: '100px' }}>
        <Flex gap='25px'>
          <SmallQuestComponent
            action={() => console.log('click')}
            disabled={{ isDisabled: true, label: 'Требуется уровень 2' }}
            title='Кофе брейк'
            sx={{ backgroundColor: '#884637', backgroundImage: `url(${coffeeImage})`, flex: 1 }}
          />
          <SmallQuestComponent
            action={() => console.log('click')}
            disabled={{ isDisabled: true, label: 'Требуется уровень 2' }}
            title='Пригласи друга'
            sx={{ backgroundColor: '#4992FF', backgroundImage: `url(${anchorImage})`, flex: 1 }}
          />
          <SmallQuestComponent
            action={() => console.log('click')}
            disabled={{ isDisabled: true, label: 'Требуется уровень 2' }}
            title='Пригласи друга'
            sx={{ backgroundColor: '#FFDF6D', backgroundImage: `url(${anchorImage})`, flex: 1 }}
          />
          <SmallQuestComponent
            action={() => console.log('click')}
            disabled={{ isDisabled: true, label: 'Требуется уровень 2' }}
            title='Пригласи друга'
            sx={{ backgroundColor: '#CF4242', backgroundImage: `url(${anchorImage})`, flex: 1 }}
          />
        </Flex>
      </SectionComponent>
      <SectionComponent title='Все квесты'>
        <Grid templateColumns='repeat(2, 1fr)' gap='24px'>
          <GridItem>
            <MediumQuestComponent
              action={() => console.log('click')}
              disabled={{ isDisabled: false }}
              label='Глава 1'
              title='Добро пожаловать на борт! Онбординг для сотрудников'
              percent={62}
              sx={{
                backgroundColor: '#4992FF',
                backgroundImage: `url(${helmImage})`,
                backgroundPosition: '110% 160%',
              }}
            />
          </GridItem>
          <GridItem>
            <MediumQuestComponent
              action={() => console.log('click')}
              disabled={{ isDisabled: false }}
              label='Дополнительно'
              title='Посетить хакатон MORE.TECH 4.0'
              percent={0}
              sx={{
                backgroundColor: '#202981',
                backgroundImage: `url(${shape16Image})`,
                backgroundPosition: '95% 70%',
              }}
            />
          </GridItem>
          <GridItem>
            <MediumQuestComponent
              action={() => console.log('click')}
              disabled={{ isDisabled: true, label: 'Закончите «Глава 1»' }}
              label='Глава 2'
              title='Камера! Мотор! Изучаем корпоративную культуру'
              sx={{
                backgroundColor: '#4992FF',
                backgroundImage: `url(${movieСlapperImage})`,
                backgroundPosition: '100%',
              }}
            />
          </GridItem>
        </Grid>
      </SectionComponent>
    </Box>
  );
};

export default IncomePage;
