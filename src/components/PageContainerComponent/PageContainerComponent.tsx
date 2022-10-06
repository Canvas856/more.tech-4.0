import { Container } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
};

export const PageContainerComponent: React.FC<Props> = ({ children }) => {
  return (
    <Container maxWidth={'1602px'} pt={'30px'} pb={'55px'}>
      {children}
    </Container>
  );
};
