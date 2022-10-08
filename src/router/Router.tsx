import React from 'react';
import { BrowserRouter, Navigate, Route, Routes as BrowserRoutes } from 'react-router-dom';
import { HeaderComponent } from '~/components';
import { PageContainerComponent } from '~/components/PageContainerComponent';
import { Routes } from './routes';

// Pages
const ProfilePage = React.lazy(() => import('~/pages/ProfilePage'));

const Router = () => (
  <BrowserRouter>
    <PageContainerComponent>
      <HeaderComponent />
      <BrowserRoutes>
        <Route path={Routes.home} element={<div>1</div>} />
        <Route path={Routes.profile} element={<ProfilePage />} />
        <Route path={Routes.catalog} element={<div>Catalog</div>} />
        <Route path={Routes.coinKeeper} element={<div>CoinKeeper</div>} />
        <Route path={Routes.platformPrincip} element={<div>How earn coins</div>} />
        <Route path='*' element={<Navigate to={Routes.profile} replace />} />
      </BrowserRoutes>
    </PageContainerComponent>
  </BrowserRouter>
);

export default Router;
