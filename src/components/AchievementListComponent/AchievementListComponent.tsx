import { Flex, Center, Box } from '@chakra-ui/react';
import { AchievementComponent } from '../AchievementComponent';

export const AchievementListComponent = () => (
  <Flex as='ul' gap='16px'>
    <Box as='li' listStyleType='none'>
      <AchievementComponent />
    </Box>
    <Center as='li'>
      <Box borderRadius='15px' borderWidth='1px' borderColor='black' w='73px' h='71px' as='button'>
        +100
      </Box>
    </Center>
  </Flex>
);
