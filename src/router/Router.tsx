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
        <Route path='/' element={<div>Personal Cabinet</div>} />

        <Route path={Routes.personalAccount} element={<div>Personal Cabinet</div>} />
        <Route path={Routes.income} element={<div>How earn coins</div>} />
        <Route path={Routes.catalog} element={<div>Catalog</div>} />
        <Route path={Routes.coinKeeper} element={<div>CoinKeeper</div>} />
        <Route path={Routes.platformPrincip} element={<div>How earn coins</div>} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </BrowserRoutes>
    </PageContainerComponent>
  </BrowserRouter>
);

export default Router;
