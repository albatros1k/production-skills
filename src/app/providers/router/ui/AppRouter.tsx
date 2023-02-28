import { FC, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import { routeConfig } from 'shared/config/routerConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

export const AppRouter: FC = () => {
  const router = useRoutes(Object.values(routeConfig));
  return (
    <Suspense fallback={<PageLoader />}>
      <div className='page-wrapper'>{router}</div>
    </Suspense>
  );
};
