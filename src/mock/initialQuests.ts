import { colors } from '~/theme/colors';
import { Quest } from '~/types/quest';

import startImage from '~/assets/images/start.png';
import corporateCultureImage from '~/assets/images/corporate-culture.png';

export const quests: Quest[] = [
  {
    id: '1',
    name: 'Онбординг',
    bg: `${colors.brand.blue[200]} url(${startImage}) center / auto no-repeat`,
    completed: false,
    description:
      'Поздравляем с вступлением в нашу команду! :) В первые дни иногда непросто сориентироваться в новой компании, поэтому мы подготовили несколько welcome-писем, чтобы было легче адаптироваться.',
    rewardCoin: 0.003,
    rewardExperience: 2000,
    groupName: 'Глава 1',
    tasks: [
      {
        id: '1',
        name: 'Я в системе!',
        description:
          'Привет, чтобы начать работать тебе необходимо познакомиться с нашим рабочим окружением 😉 После получения доступов ко всем ресурсам выше подтверди выполнение квеста',
        rewardCoin: 0.003,
        rewardExperience: 1000,
        completed: false,
        hint: 'Для получения доступа тебе необходимо написать запрос в сд, если возникнут проблемы с доступом напиши в службу поддержки',
      },
      {
        id: '2',
        name: 'Есть контакт!',
        description:
          'Привет, чтобы начать работать тебе необходимо познакомиться с нашим рабочим окружением 😉 После получения доступов ко всем ресурсам выше подтверди выполнение квеста',
        rewardCoin: 0.003,
        rewardExperience: 1000,
        completed: false,
        hint: 'Для получения доступа тебе необходимо написать запрос в сд, если возникнут проблемы с доступом напиши в службу поддержки',
      },
      {
        id: '3',
        name: 'Welcome to the club, buddy!',
        description:
          'Привет, чтобы начать работать тебе необходимо познакомиться с нашим рабочим окружением 😉 После получения доступов ко всем ресурсам выше подтверди выполнение квеста',
        rewardCoin: 0.003,
        rewardExperience: 1000,
        completed: false,
        hint: 'Для получения доступа тебе необходимо написать запрос в сд, если возникнут проблемы с доступом напиши в службу поддержки',
      },
    ],
  },
  {
    id: '2',
    name: 'Корпоративная культура',
    bg: `#AFE276 url(${corporateCultureImage}) center / auto no-repeat`,
    completed: false,
    description:
      'Поздравляем с вступлением в нашу команду! :) В первые дни иногда непросто сориентироваться в новой компании, поэтому мы подготовили несколько welcome-писем, чтобы было легче адаптироваться.',
    rewardCoin: 5,
    rewardExperience: 2000,
    groupName: 'Глава 2',
    tasks: [],
  },
];
