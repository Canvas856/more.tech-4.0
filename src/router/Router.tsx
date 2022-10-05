import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HeaderComponent } from '~/components';
import { PageContainerComponent } from '~/components/PageContainerComponent';
import { Routers } from './routers';

// Pages
const ProfilePage = React.lazy(() => import('~/pages/ProfilePage'));

const Router = () => (
  <BrowserRouter>
    <PageContainerComponent>
      <HeaderComponent />
      <Routes>
        <Route path='/' element={<div>Personal Cabinet</div>} />

        <Route path={Routers.personalAccount} element={<div>Personal Cabinet</div>} />
        <Route path={Routers.income} element={<div>How earn coins</div>} />
        <Route path={Routers.catalog} element={<div>Catalog</div>} />
        <Route path={Routers.coinKeeper} element={<div>CoinKeeper</div>} />
        <Route path={Routers.platformPrincip} element={<div>How earn coins</div>} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </PageContainerComponent>
  </BrowserRouter>
);

export default Router;
