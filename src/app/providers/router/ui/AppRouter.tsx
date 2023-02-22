import { FC, Suspense } from 'react';
import { Routes, useRoutes } from 'react-router-dom';

import { routeConfig } from 'shared/config/routerConfig/routeConfig';

export const AppRouter: FC = () => {
  const router = useRoutes(Object.values(routeConfig));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>{router}</Routes>
    </Suspense>
  );
};
