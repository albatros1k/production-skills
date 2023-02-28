import { FC, Suspense } from 'react';

import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { AppRouter } from 'app/providers/router';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

import { classNames } from 'shared/lib/classNames/classNames';

import 'app/styles/index.scss';

const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
