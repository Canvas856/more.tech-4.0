import { Center, SystemStyleObject, Text } from '@chakra-ui/react';
import { colors } from '~/theme/colors';

type Props = {
  variant: 'quest' | 'task';
  title: string;
  disabled: boolean;
  label?: string;
  action?: () => void;
  sx?: SystemStyleObject;
};

export const BalloonQuestComponent: React.FC<Props> = ({
  label,
  title,
  disabled,
  variant,
  action,
  sx,
}) => (
  <Center
    w={variant === 'task' ? '162px' : '231px'}
    h={variant === 'task' ? '162px' : '231px'}
    bg={disabled ? colors.brand.gray[200] : colors.brand.blue[100]}
    position='relative'
    borderRadius='50%'
    boxShadow='0px 0px 100px rgba(112, 169, 255, 0.5)'
    cursor={disabled ? 'default' : 'pointer'}
    sx={sx}
    onClick={() => !disabled && action?.()}
  >
    <Text fontWeight='800' fontSize='60px' lineHeight='100%' letterSpacing='0.015em'>
      {label}
    </Text>
    <Text
      borderRadius='50px'
      fontWeight='700'
      fontSize='18px'
      width='max-content'
      color={variant === 'task' ? colors.brand.black : colors.brand.blue[300]}
      letterSpacing='0.015em'
      bg={colors.brand.white}
      padding={variant === 'task' ? '13px 32px' : '13px 75px'}
      position='absolute'
      bottom='0'
    >
      {title}
    </Text>
  </Center>
);
