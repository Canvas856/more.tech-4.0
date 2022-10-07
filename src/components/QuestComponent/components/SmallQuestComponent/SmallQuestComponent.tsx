import { Text } from '@chakra-ui/react';
import { DisabledPanelComponent } from '~/components/DisabledPanelComponent';
import { PanelComponent } from '~/components/PanelComponent';
import { colors } from '~/theme/colors';
import { QuestProps } from '../../types/quest-props';

export const SmallQuestComponent: React.FC<QuestProps> = ({ action, disabled, title, sx }) => (
  <PanelComponent
    sx={{
      padding: '32px 29px',
      position: 'relative',
      maxWidth: '374px',
      minHeight: '249px',
      backgroundPosition: 'right',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      ...sx,
    }}
  >
    <DisabledPanelComponent {...disabled} />
    <Text
      maxW='195px'
      fontWeight='600'
      fontSize='36px'
      color={colors.brand.white}
      lineHeight='100%'
    >
      {title}
    </Text>
  </PanelComponent>
);
