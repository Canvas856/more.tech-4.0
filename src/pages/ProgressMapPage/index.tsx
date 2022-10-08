import { Box, Button, Flex, SystemStyleObject, Text } from '@chakra-ui/react';
import { SectionComponent } from '~/components/SectionComponent';

import { Quest, Task } from '~/types/quest';
import { QuestModalComponent } from '~/components/QuestModalComponent';
import React, { useEffect, useState } from 'react';
import { isQuest, isTask } from '~/utils/quest';
import { BalloonQuestComponent } from './components/BalloonQuestComponent';
import { useQuests, useSetQuests } from '~/api/quests';
import { useAddExp } from '~/api/exp';
import { useTransferDigitalRubles } from '~/api/balance';
import { colors } from '~/theme/colors';

const pathLeftIcon = new URL('../../assets/images/path-left.svg', import.meta.url).href;
const pathRightIcon = new URL('../../assets/images/path-right.svg', import.meta.url).href;

const WithPathRowComponent: React.FC<{
  children: React.ReactNode;
  position: 'left' | 'right';
  sx?: SystemStyleObject;
}> = ({ children, position, sx }) => (
  <Flex
    sx={{
      m: 'auto',
      maxWidth: '1000px',
      width: '100%',
      position: 'relative',
      justifyContent: position === 'left' ? 'flex-start' : 'flex-end',
      '&::after': {
        position: 'absolute',
        content: '""',
        width: '785px',
        height: '151px',
        bg: `url(${position === 'left' ? pathRightIcon : pathLeftIcon}) top / contain no-repeat`,
        left: position === 'left' ? '11%' : 'auto',
        right: position === 'right' ? '11%' : 'auto',
        top: '-65%',
        zIndex: '1',
      },
      ...sx,
    }}
  >
    <Box zIndex='2'>{children}</Box>
  </Flex>
);

const ProgressMapPage = () => {
  const { data: quests } = useQuests();
  const setQuests = useSetQuests();
  const addExp = useAddExp();
  const transferDigitalRubles = useTransferDigitalRubles();

  const [groupName, setGroupName] = useState('');
  const [openedTask, setOpenedTask] = useState<Task | undefined>(undefined);
  const [openedQuest, setOpenedQuest] = useState<Quest | undefined>(undefined);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        behavior: 'smooth',
        left: 0,
        top: document.body.scrollHeight,
      });
    }, 10);
  }, []);

  function openQuest(quest: Task | Quest, groupName: string) {
    setGroupName(groupName);
    if (isQuest(quest)) setOpenedQuest(quest);
    if (isTask(quest)) setOpenedTask(quest);
  }

  function closeQuest() {
    setOpenedQuest(undefined);
    setOpenedTask(undefined);
    setGroupName('');
  }

  function questAction() {
    closeQuest();
  }

  function taskAction() {
    if (!quests) return;
    const taskIndex = quests[0].tasks.findIndex((task) => task.id === openedTask?.id);
    const task = quests[0].tasks[taskIndex];
    task.completed = true;
    const isQuestCompleted = quests[0].tasks.filter((task) => !task.completed).length === 0;
    let exp: number = task.rewardExperience;
    let digitalRublesAmount: number = task.rewardCoin;
    if (isQuestCompleted) {
      exp += quests[0].rewardExperience;
      digitalRublesAmount += quests[0].rewardCoin;
    }
    setQuests.mutate(quests);
    addExp.mutate(exp);
    transferDigitalRubles.mutate(digitalRublesAmount);
  }

  return (
    <Box position='relative'>
      <Button variant='brand-fill' onClick={() => localStorage.clear()}>
        очистить профиль
      </Button>
      <QuestModalComponent
        isOpen={Boolean(openedTask) || Boolean(openedQuest)}
        onClose={closeQuest}
        task={openedTask}
        groupName={groupName}
        quest={openedQuest}
        action={openedQuest ? questAction : taskAction}
      />
      <SectionComponent sx={{ mt: '100px' }} size='md' title='Карта прогресса'>
        <Flex mt='100px' flexDirection='column-reverse'>
          {quests &&
            quests.map((quest, questIndex) => (
              <>
                <WithPathRowComponent
                  position={(questIndex + quest.tasks.length) % 2 === 0 ? 'right' : 'left'}
                >
                  <BalloonQuestComponent
                    key={quest.id}
                    disabled={questIndex !== 0 && quests[questIndex - 1]?.completed === false}
                    variant='quest'
                    title={quest.name}
                    sx={{ bg: quest.bg }}
                    action={() => openQuest(quest, quest.groupName)}
                  />
                </WithPathRowComponent>
                {quest.tasks.map((task, taskIndex) => (
                  <WithPathRowComponent
                    key={task.id + quest.id}
                    position={(questIndex + taskIndex) % 2 === 0 ? 'right' : 'left'}
                  >
                    <BalloonQuestComponent
                      disabled={taskIndex !== 0 && quest.tasks[taskIndex - 1]?.completed === false}
                      variant='task'
                      title={task.name}
                      label={String(taskIndex + 1)}
                      action={() => openQuest(task, quest.groupName)}
                    />
                  </WithPathRowComponent>
                ))}
              </>
            ))}
          <Flex h={200} alignItems='flex-start' justifyContent='flex-end' mr='300px'>
            <Text
              padding='13px 32px'
              borderRadius='50px'
              color={colors.brand.black}
              bg={colors.brand.white}
            >
              To be continued
            </Text>
          </Flex>
        </Flex>
      </SectionComponent>
    </Box>
  );
};

export default ProgressMapPage;
