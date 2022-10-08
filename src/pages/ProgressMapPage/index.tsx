import { Box } from '@chakra-ui/react';
import { SectionComponent } from '~/components/SectionComponent';

import { Quest, Task } from '~/types/quest';
import { QuestModalComponent } from '~/components/QuestModalComponent';
import { useState } from 'react';
import { isQuest, isTask } from '~/utils/quest';
import { BalloonQuestComponent } from './components/BalloonQuestComponent';
import { useQuests, useSetQuests } from '~/api/quests';
import { useAddExp } from '~/api/exp';
import { useTransferDigitalRubles } from '~/api/balance';

const ProgressMapPage = () => {
  const { data: quests } = useQuests();
  const setQuests = useSetQuests();
  const addExp = useAddExp();
  const transferDigitalRubles = useTransferDigitalRubles();

  const [groupName, setGroupName] = useState('');
  const [openedTask, setOpenedTask] = useState<Task | undefined>(undefined);
  const [openedQuest, setOpenedQuest] = useState<Quest | undefined>(undefined);

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
      <QuestModalComponent
        isOpen={Boolean(openedTask) || Boolean(openedQuest)}
        onClose={closeQuest}
        task={openedTask}
        groupName={groupName}
        quest={openedQuest}
        action={openedQuest ? questAction : taskAction}
      />
      <SectionComponent sx={{ mt: '100px' }} size='md' title='Карта прогресса'>
        {quests &&
          quests.map((quest, index) => (
            <Box key={quest.id}>
              <BalloonQuestComponent
                disabled={index !== 0 && quests[index - 1]?.completed === false}
                variant='quest'
                title={quest.name}
                sx={{ bg: quest.bg }}
                action={() => openQuest(quest, quest.groupName)}
              />
              {quest.tasks.map((task, index) => (
                <BalloonQuestComponent
                  key={task.id + quest.id}
                  disabled={index !== 0 && quest.tasks[index - 1]?.completed === false}
                  variant='task'
                  title={task.name}
                  label={String(index + 1)}
                  action={() => openQuest(task, quest.groupName)}
                />
              ))}
            </Box>
          ))}
      </SectionComponent>
    </Box>
  );
};

export default ProgressMapPage;
