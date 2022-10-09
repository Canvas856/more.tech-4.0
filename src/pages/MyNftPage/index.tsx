import { Grid, GridItem } from '@chakra-ui/react';
import { CardComponent } from '~/components';

import userImage from '~/assets/images/user.png';
import { useNftBalance } from '~/api/balance';

const MyNftPage = () => {
  const { data: nftList, isLoading, isError } = useNftBalance();

  if (isLoading) return 'Загрузка...';
  if (isError) return 'Ошибка';

  return (
    nftList && (
      <Grid templateColumns='repeat(4, 1fr)' gap='20px'>
        {nftList
          .sort((a, b) => b.tokens[0] - a.tokens[0])
          .map((nft) => (
            <GridItem key={nft.uri}>
              <CardComponent
                amountCoins={nft.tokens[0]}
                cardName='№12. Житель в железном шлеме'
                imageUrl={nft.uri}
                badges={['Minecraft', 'Голова']}
              ></CardComponent>
            </GridItem>
          ))}
      </Grid>
    )
  );
};

export default MyNftPage;
