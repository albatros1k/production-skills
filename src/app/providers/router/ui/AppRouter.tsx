import { FC, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import { routeConfig } from 'shared/config/routerConfig/routeConfig';

export const AppRouter: FC = () => {
  const router = useRoutes(Object.values(routeConfig));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='page-wrapper'>{router}</div>
    </Suspense>
  );
};
