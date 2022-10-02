import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// Pages
const ProfilePage = React.lazy(() => import('~/pages/ProfilePage'));

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<ProfilePage />} />
      <Route path='/quests' element={<Navigate to='/' />} />
      <Route path='/catalog' element={<Navigate to='/' />} />
      <Route path='/wallet' element={<Navigate to='/' />} />
      <Route path='/faq' element={<Navigate to='/' />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
