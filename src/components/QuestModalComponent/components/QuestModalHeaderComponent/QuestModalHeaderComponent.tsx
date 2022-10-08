import { ModalHeader, Text } from '@chakra-ui/react';
import { colors } from '~/theme/colors';
import shape343Image from '~/assets/images/shape-343.png';
import { Quest, Task } from '~/types/quest';
import { ProgressBarComponent } from '~/components/ProgressBarComponent';

type Props = { groupName: string; task?: Task; quest?: Quest };

export const QuestModalHeaderComponent: React.FC<Props> = ({ groupName, quest, task }) => (
  <ModalHeader
    borderRadius='50'
    padding='38px'
    paddingBottom='33px'
    position='relative'
    color={colors.brand.white}
    bg={`${colors.brand.blue[200]} url(${shape343Image}) right / auto no-repeat`}
  >
    <Text fontWeight='500' fontSize='18px' mb='20px' lineHeight='120%'>
      {groupName}
    </Text>
    <Text fontWeight='700' fontSize='42px' mb='30px' lineHeight='120%' maxWidth='406px'>
      {task?.name || quest?.name || ''}
    </Text>
    {quest && (
      <ProgressBarComponent
        percent={(quest.tasks.filter((task) => task.completed).length / quest.tasks.length) * 100}
      />
    )}
  </ModalHeader>
);
