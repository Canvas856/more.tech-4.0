import React from 'react';
import { BrowserRouter, Navigate, Route, Routes as BrowserRoutes } from 'react-router-dom';
import { HeaderComponent } from '~/components';
import { PageContainerComponent } from '~/components/PageContainerComponent';
import { Routes } from './routes';

// Pages
const ProfilePage = React.lazy(() => import('~/pages/ProfilePage'));
const ProgressMapPage = React.lazy(() => import('~/pages/ProgressMapPage'));

const Router = () => (
  <BrowserRouter>
    <PageContainerComponent>
      <HeaderComponent />
      <BrowserRoutes>
        <Route path={Routes.home} element={<div>Тут должен быть лендинг</div>} />
        <Route path={Routes.profile} element={<ProfilePage />} />
        <Route path={Routes.progressMap} element={<ProgressMapPage />} />
        <Route path={Routes.catalog} element={<div>Маркетплейс</div>} />
        <Route path={Routes.wallet} element={<div>Мой кошелёк</div>} />
        <Route path={Routes.platformPrincip} element={<div>Как работает платформа</div>} />
        <Route path='*' element={<Navigate to={Routes.profile} replace />} />
      </BrowserRoutes>
    </PageContainerComponent>
  </BrowserRouter>
);

export default Router;
