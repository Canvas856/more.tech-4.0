import { Container } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
};

const PageContainerComponent: React.FC<Props> = ({ children }) => {
  return <Container maxW='1570px'>{children}</Container>;
};

export default PageContainerComponent;
