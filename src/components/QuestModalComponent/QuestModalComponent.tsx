import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Text,
  Grid,
  GridItem,
  Button,
} from '@chakra-ui/react';
import { colors } from '~/theme/colors';
import { Quest, Task } from '~/types/quest';
import { RewardComponent } from '../RewardComponent';
import { PanelComponent } from '../PanelComponent';
import { SectionComponent } from '../SectionComponent';
import { QuestModalHeaderComponent } from './components/QuestModalHeaderComponent';

type Props = {
  task?: Task;
  quest?: Quest;
  groupName: string;
  isOpen: boolean;
  action: () => void;
  onClose: () => void;
};

export const QuestModalComponent: React.FC<Props> = ({
  isOpen,
  onClose,
  task,
  quest,
  groupName,
  action,
}) => (
  <Modal isOpen={isOpen} onClose={onClose} isCentered>
    <ModalOverlay bg='rgba(4, 4, 49, 0.62)' backdropFilter='blur(3.5px)' />
    <ModalContent bg={colors.brand.purple[200]} borderRadius='50px' maxWidth='994px'>
      <QuestModalHeaderComponent groupName={groupName} task={task} quest={quest} />
      <ModalCloseButton size='lg' top='30px' />
      <ModalBody pt='28px' pb='40px'>
        <Grid templateColumns='1fr 306px' gap='60px'>
          <GridItem>
            <SectionComponent size='md' title='Описание'>
              <Text
                fontWeight='500'
                fontSize='16px'
                lineHeight='160%'
                color={colors.brand.purple[300]}
                whiteSpace='pre-wrap'
              >
                {task?.description || quest?.description}
              </Text>
            </SectionComponent>
          </GridItem>
          <GridItem display='flex' flexDirection='column' pt='40px'>
            <PanelComponent
              sx={{
                bg: colors.brand.purple[400],
                borderRadius: '20px',
                padding: '20px',
                mb: '20px',
              }}
            >
              <Text fontSize='23px' fontWeight='700' color={colors.brand.white} mb='10px'>
                Награды квеста
              </Text>
              <RewardComponent type='coin' reward={task?.rewardCoin || quest?.rewardCoin || 0} />
              <RewardComponent
                type='exp'
                reward={task?.rewardExperience || quest?.rewardExperience || 0}
              />
            </PanelComponent>
            {(task?.hint || quest?.hint) && (
              <PanelComponent
                sx={{
                  bg: colors.brand.purple[500],
                  borderRadius: '20px',
                  padding: '20px',
                  mb: '20px',
                }}
              >
                <Text fontSize='23px' fontWeight='700' color={colors.brand.white} mb='10px'>
                  Подсказка
                </Text>
                <Text fontSize='14px' fontWeight='300' color={colors.brand.purple[300]}>
                  {task?.hint || quest?.hint}
                </Text>
              </PanelComponent>
            )}
            <Button
              variant='brand-fill'
              onClick={action}
              disabled={task?.completed || quest?.completed}
              sx={{
                '--second-color': colors.brand.blue[200],
                '--color': colors.brand.white,
                '--active-color': colors.brand.gray[50],
              }}
            >
              {task?.completed || quest?.completed
                ? 'завершено'
                : quest
                ? 'перейти к заданиям'
                : 'завершить'}
            </Button>
          </GridItem>
        </Grid>
      </ModalBody>
    </ModalContent>
  </Modal>
);
