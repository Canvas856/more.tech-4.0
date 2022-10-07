import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Box,
  Text,
  Grid,
  GridItem,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { colors } from '~/theme/colors';
import { CoinsComponent } from '../CoinsComponent';
import { PanelComponent } from '../PanelComponent';
import { SectionComponent } from '../SectionComponent';
import { QuestModalHeaderComponent } from './components/QuestModalHeaderComponent';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const QuestModalComponent: React.FC<Props> = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} isCentered>
    <ModalOverlay bg='rgba(4, 4, 49, 0.62)' backdropFilter='blur(3.5px)' />
    <ModalContent bg={colors.brand.purple[200]} borderRadius='50px' maxWidth='994px'>
      <QuestModalHeaderComponent />
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
              >
                Agile – это не просто модное веяние, которое является последовательностью
                определенных шагов, а действенный способ управления человеческим ресурсом.
                <br /> <br />В Agile учтены недостатки его предшественников и заложены достоинства,
                позволяющие владельцам организаций рассчитывать на достижение их ожиданий от
                применения программных продуктов. Гибкие процессы – это ступень в развитии подходов
                к разработке информационных систем, от которых будет зависеть каждая современная
                успешная компания. Знание и умение оперировать понятиями и атрибутами Agile позволит
                менеджерам и профильным специалистам быть эффективными в мире создания программных
                продуктов любого объема и степени сложности.
              </Text>
            </SectionComponent>
          </GridItem>
          <GridItem display='flex' flexDirection='column' pt='40px'>
            <UnorderedList spacing='9px' mb='20px'>
              <ListItem
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                fontWeight='600'
                fontSize='18px'
                color={colors.brand.white}
              >
                <Box as='span'>Заданий</Box>
                <Box as='span'>10</Box>
              </ListItem>
              <ListItem
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                fontWeight='600'
                fontSize='18px'
                color={colors.brand.white}
              >
                <Box as='span'>Время прохождения</Box>
                <Box as='span'>5 часов</Box>
              </ListItem>
            </UnorderedList>
            <PanelComponent
              sx={{
                bg: colors.brand.purple[400],
                borderRadius: '20px',
                padding: '20px',
                mt: 'auto',
              }}
            >
              <Text fontSize='23px' fontWeight='700' color={colors.brand.white} mb='20px'>
                Награды квеста
              </Text>
              <CoinsComponent coins={75} />
            </PanelComponent>
          </GridItem>
        </Grid>
      </ModalBody>
    </ModalContent>
  </Modal>
);
