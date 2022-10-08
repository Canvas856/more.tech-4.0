import { colors } from '~/theme/colors';
import { Quest } from '~/types/quest';

import startImage from '~/assets/images/start.png';

export const quests: Quest[] = [
  {
    id: '1',
    name: 'Онбординг',
    bg: `${colors.brand.blue[200]} url(${startImage}) center / auto no-repeat`,
    completed: false,
    description:
      'Поздравляем с вступлением в нашу команду! :) В первые дни иногда непросто сориентироваться в новой компании, поэтому мы подготовили несколько welcome-писем, чтобы было легче адаптироваться.',
    rewardCoin: 2500,
    rewardExperience: 1500,
    groupName: 'Глава 1',
    tasks: [
      {
        id: '1',
        name: 'Я в системе!',
        description:
          'Привет, чтобы начать работать тебе необходимо познакомиться с нашим рабочим окружением 😉 После получения доступов ко всем ресурсам выше подтверди выполнение квеста',
        rewardCoin: 250,
        rewardExperience: 1000,
        completed: true,
        hint: 'Для получения доступа тебе необходимо написать запрос в сд, если возникнут проблемы с доступом напиши в службу поддержки',
      },
      {
        id: '2',
        name: 'Я в системе! 2',
        description:
          'Привет, чтобы начать работать тебе необходимо познакомиться с нашим рабочим окружением 😉 После получения доступов ко всем ресурсам выше подтверди выполнение квеста',
        rewardCoin: 250,
        rewardExperience: 1000,
        completed: false,
        hint: 'Для получения доступа тебе необходимо написать запрос в сд, если возникнут проблемы с доступом напиши в службу поддержки',
      },
      {
        id: '3',
        name: 'Я в системе! 3',
        description:
          'Привет, чтобы начать работать тебе необходимо познакомиться с нашим рабочим окружением 😉 После получения доступов ко всем ресурсам выше подтверди выполнение квеста',
        rewardCoin: 250,
        rewardExperience: 1000,
        completed: false,
        hint: 'Для получения доступа тебе необходимо написать запрос в сд, если возникнут проблемы с доступом напиши в службу поддержки',
      },
    ],
  },
];