import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Routers } from './routers';

// Pages
const ProfilePage = React.lazy(() => import('~/pages/ProfilePage'));

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<ProfilePage />} />
      <Route path={Routers.income} element={<Navigate to={Routers.income} />} />
      <Route path={Routers.catalog} element={<Navigate to={Routers.catalog} />} />
      <Route path={Routers.coinKeeper} element={<Navigate to={Routers.coinKeeper} />} />
      <Route path={Routers.platformPrincip} element={<Navigate to={Routers.platformPrincip} />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
