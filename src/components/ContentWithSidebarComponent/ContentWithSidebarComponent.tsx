import { Flex } from '@chakra-ui/react';

type Props = {
  sidebar: JSX.Element;
  content: JSX.Element;
};
export const ContentWidthSidebarComponent = ({ sidebar, content }: Props) => {
  return (
    <>
      <Flex gap={'30px'} marginTop={'50px'}>
        {sidebar}
        {content}
      </Flex>
    </>
  );
};
