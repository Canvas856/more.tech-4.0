import { Center, Image, Text } from '@chakra-ui/react';
import { colors } from '~/theme/colors';
import { Disabled } from '~/types/disabled';
import { PanelComponent } from '../PanelComponent';
import lockImage from '~/assets/images/lock.png';

export const DisabledPanelComponent: React.FC<Disabled> = ({ isDisabled, label }) => {
  if (!isDisabled) return null;
  return (
    <PanelComponent
      sx={{
        position: 'absolute',
        zIndex: 1,
        background: 'rgba(4, 4, 49, 0.62)',
        backdropFilter: 'blur(3.5px)',
        top: '-1px',
        right: '-1px',
        bottom: '-1px',
        left: '-1px',
        padding: '1rem',
      }}
    >
      <Center h='100%' flexDirection='column'>
        <Image w='94px' h='94px' pb='10px' src={lockImage} alt='' />
        <Text fontWeight='600' fontSize='1.8em' textAlign='center' color={colors.brand.white}>
          {label}
        </Text>
      </Center>
    </PanelComponent>
  );
};
