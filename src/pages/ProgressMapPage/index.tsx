import { Box } from '@chakra-ui/react';
import { SectionComponent } from '~/components/SectionComponent';

import { Quest, Task } from '~/types/quest';
import { QuestModalComponent } from '~/components/QuestModalComponent';
import { useState } from 'react';
import { quests as mockQuests } from '~/mock/initialQuests';
import { isQuest, isTask } from '~/utils/quest';
import { BalloonQuestComponent } from './components/BalloonQuestComponent';

const ProgressMapPage = () => {
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
    console.log('task click');
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
        {mockQuests.map((quest, index) => (
          <Box key={quest.id}>
            <BalloonQuestComponent
              disabled={index !== 0 && mockQuests[index - 1]?.completed === false}
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
