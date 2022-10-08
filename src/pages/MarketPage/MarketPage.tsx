import { Flex, Heading } from '@chakra-ui/react';
import { ImageLinkComponent } from '~/components/ImageLinkComponent';
import { marketPlaces } from './constants';

const imgUserUrl = new URL('./icons/User.svg', import.meta.url).href;

export const MarketPage = () => {
  return (
    <>
      <Heading marginTop={'97px'} marginBottom={'44px'} fontSize={'48px'}>
        Маркетплейс
      </Heading>
      <Flex gap={'20px'}>
        {marketPlaces.map((el) => {
          return (
            <ImageLinkComponent
              key={el.title}
              title={el.title}
              subTitle={el.subTitle}
              imgUrl={el.imgUrl}
            />
          );
        })}
      </Flex>
    </>
  );
};
