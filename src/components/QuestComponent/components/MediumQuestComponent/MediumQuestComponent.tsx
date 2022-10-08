import { Box, Button, Text } from '@chakra-ui/react';
import { DisabledPanelComponent } from '~/components/DisabledPanelComponent';
import { PanelComponent } from '~/components/PanelComponent';
import { ProgressBarComponent } from '~/components/ProgressBarComponent';
import { colors } from '~/theme/colors';
import { QuestProps } from '../../types/quest-props';

export type MediumQuestProps = {
  actionLabel: string;
  label?: string;
  percent?: number;
} & QuestProps;

export const MediumQuestComponent: React.FC<MediumQuestProps> = ({
  action,
  actionLabel,
  disabled,
  title,
  label,
  percent,
  sx,
}) => (
  <PanelComponent
    sx={{
      padding: '38px',
      paddingBottom: '44px',
      position: 'relative',
      maxWidth: '773px',
      minHeight: '389px',
      backgroundPosition: 'right',
      backgroundSize: 'auto',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      ...sx,
    }}
  >
    <DisabledPanelComponent {...disabled} />
    {label && (
      <Text fontWeight='500' fontSize='18px' color={colors.brand.white} mb='12px'>
        {label}
      </Text>
    )}
    <Text
      as='h3'
      maxW='413px'
      fontWeight='700'
      fontSize='42px'
      color={colors.brand.white}
      lineHeight='110%'
    >
      {title}
    </Text>
    <Box mt='auto'>
      {percent ? (
        <ProgressBarComponent percent={percent} />
      ) : (
        <Button
          sx={{ '--color': sx?.backgroundColor?.toString() || colors.brand.blue[200] }}
          variant='brand-outline'
        >
          {actionLabel}
        </Button>
      )}
    </Box>
  </PanelComponent>
);
