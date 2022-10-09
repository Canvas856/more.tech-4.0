import { Button } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes as BrowserRoutes } from 'react-router-dom';
import { HeaderComponent } from '~/components';
import { PageContainerComponent } from '~/components/PageContainerComponent';
import { MarketPage } from '~/pages';
import { Routes } from './routes';

// Pages
const ProfilePage = React.lazy(() => import('~/pages/ProfilePage'));
const ProgressMapPage = React.lazy(() => import('~/pages/ProgressMapPage'));
const WalletPage = React.lazy(() => import('~/pages/WalletPage'));
const MyNftPage = React.lazy(() => import('~/pages/MyNftPage'));
const MyTransactionHistoryPage = React.lazy(() => import('~/pages/MyTransactionHistoryPage'));
const TransferPage = React.lazy(() => import('~/pages/TransferPage'));

const Router = () => (
  <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
    <PageContainerComponent>
      <HeaderComponent />
      <BrowserRoutes>
        <Route path={Routes.home} element={<div>Тут должен быть лендинг</div>} />
        <Route path={Routes.profile} element={<ProfilePage />} />
        <Route path={Routes.progressMap} element={<ProgressMapPage />} />
        <Route path={Routes.marketPlace} element={<MarketPage />} />
        <Route path={Routes.wallet} element={<WalletPage />}>
          <Route index element={<MyNftPage />} />
          <Route path={Routes.myTransactionHistory} element={<MyTransactionHistoryPage />} />
          <Route path={Routes.transfer} element={<TransferPage />} />
        </Route>
        <Route
          path={Routes.platformPrincip}
          element={
            <Button
              variant='brand-fill'
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
            >
              очистить профиль (для теста)
            </Button>
          }
        />
        <Route path='*' element={<Navigate to={Routes.profile} replace />} />
      </BrowserRoutes>
    </PageContainerComponent>
  </BrowserRouter>
);

export default Router;
