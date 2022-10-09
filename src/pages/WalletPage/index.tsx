import { Grid, GridItem, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import { NavLink, Outlet, To } from 'react-router-dom';
import { PanelComponent } from '~/components/PanelComponent';
import { SectionComponent } from '~/components/SectionComponent';
import { Routes } from '~/router/routes';
import { colors } from '~/theme/colors';

const SidebarLink: React.FC<{ to: To; borderBottom?: string; children: React.ReactNode }> = ({
  to,
  borderBottom = '',
  children,
}) => (
  <ListItem>
    <NavLink end to={to}>
      {({ isActive }) => (
        <Text
          display='block'
          p='20px 25px'
          borderBottom={borderBottom}
          fontWeight='600'
          fontSize='18px'
          color={isActive ? colors.brand.blue[100] : colors.brand.white}
          sx={{ '&:hover': { color: colors.brand.blue[100] } }}
        >
          {children}
        </Text>
      )}
    </NavLink>
  </ListItem>
);

const WalletPage = () => {
  return (
    <SectionComponent size='lg' title='Мой кошелёк' sx={{ mt: '64px' }}>
      <Grid templateColumns='287px 1fr' gap='31px'>
        <GridItem>
          <PanelComponent sx={{ p: 0, bg: colors.brand.purple[200], borderRadius: '20px' }}>
            <UnorderedList styleType='none' m={0}>
              <SidebarLink to={`/${Routes.wallet}`} borderBottom='1px solid #161621'>
                Мои NFT
              </SidebarLink>
              <SidebarLink to={Routes.transfer} borderBottom='1px solid #161621'>
                Переводы
              </SidebarLink>
              <SidebarLink to={Routes.myTransactionHistory} borderBottom='1px solid #161621'>
                История
              </SidebarLink>
              <SidebarLink to={Routes.home}>Обмены</SidebarLink>
            </UnorderedList>
          </PanelComponent>
        </GridItem>
        <GridItem>
          <Outlet></Outlet>
        </GridItem>
      </Grid>
    </SectionComponent>
  );
};

export default WalletPage;
