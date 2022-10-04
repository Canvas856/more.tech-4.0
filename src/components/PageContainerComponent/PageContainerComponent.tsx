import { Container } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
};

export const PageContainerComponent: React.FC<Props> = ({ children }) => {
  return (
    <Container maxWidth={'100%'} paddingLeft={'175'} paddingTop={'30'} paddingRight={'175'}>
      {children}
    </Container>
  );
};
