import { Flex, Button, Text, Box } from '@chakra-ui/react';
import { formatDuration, intervalToDuration, format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import { useState } from 'react';
import { CoinsComponent } from '~/components/CoinsComponent';
import { DisabledPanelComponent } from '~/components/DisabledPanelComponent';
import { PanelComponent } from '~/components/PanelComponent';
import { ProgressBarComponent } from '~/components/ProgressBarComponent';
import { colors } from '~/theme/colors';
import { QuestProps } from '../../types/quest-props';

export type LargeQuestProps = {
  subtitle: string;
  deadline: Date;
  reward: number;
  label?: string;
  percent?: number;
} & QuestProps;

export const LargeQuestComponent: React.FC<LargeQuestProps> = ({
  action,
  disabled,
  title,
  label,
  percent,
  deadline,
  reward,
  subtitle,
  sx,
}) => {
  const [formattedDeadline, setFormattedDeadline] = useState<string>(formatDeadline());

  function formatDeadline(): string {
    const duration = intervalToDuration({
      start: new Date(Date.now()),
      end: deadline,
    });
    return (
      formatDuration(duration, { locale: ru, format: ['years', 'months', 'days'] }) +
      ' ' +
      format(deadline, 'HH:mm:ss')
    );
  }

  return (
    <PanelComponent
      sx={{
        padding: '47px 67px',
        paddingBottom: '39px',
        position: 'relative',
        minHeight: '480px',
        backgroundPosition: 'right',
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        w: '100%',
        ...sx,
      }}
    >
      <DisabledPanelComponent {...disabled} />
      {label && (
        <Text fontWeight='500' fontSize='18px' color={colors.brand.white} mb='12px'>
          {label}
        </Text>
      )}
      <Flex justifyContent='space-between'>
        <Text
          as='h3'
          maxW='685px'
          fontWeight='700'
          fontSize='42px'
          color={colors.brand.white}
          lineHeight='110%'
          mb='0.8em'
        >
          {title}
        </Text>
        <Box>
          <Text
            borderRadius='55px'
            backdropFilter='blur(5.12952px)'
            boxShadow='0px 0px 3.15663px rgba(0, 0, 0, 0.25)'
            background='rgba(255, 255, 255, 0.8)'
            padding='8px 26px'
            color={colors.brand.blue[200]}
            fontWeight='700'
            fontSize='27px'
            pb='4px'
          >
            {formattedDeadline}
          </Text>
          <Text textAlign='right' fontWeight='700' fontSize='14px' pr='1em'>
            до конца ивента осталось
          </Text>
        </Box>
      </Flex>
      <Text
        maxW='455px'
        fontWeight='400'
        fontSize='20px'
        color={colors.brand.white}
        lineHeight='130%'
      >
        {subtitle}
      </Text>
      <Flex mt='auto' justifyContent='space-between' alignItems='center'>
        {percent ? (
          <ProgressBarComponent percent={percent} />
        ) : (
          <Button variant='brand-outline'>участвовать</Button>
        )}
        <CoinsComponent coins={reward} />
      </Flex>
    </PanelComponent>
  );
};
