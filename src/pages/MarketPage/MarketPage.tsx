import { Flex, Heading } from '@chakra-ui/react';
import { CardComponent, ContentWidthSidebarComponent, FilterComponent } from '~/components';
import { ImageLinkComponent } from '~/components/ImageLinkComponent';
import { AccordeonNft } from './components';
import { marketPlaces } from './constants';

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
      <ContentWidthSidebarComponent
        sidebar={
          <FilterComponent>
            <AccordeonNft
              sectionOneTitle='Стоимость'
              sectionTwoTitle='Часть аватара'
              sectionThirdTitle='Коллекция'
            />
          </FilterComponent>
        }
        content={<div></div>}
      />
    </>
  );
};
