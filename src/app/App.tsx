import { FC, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';

import 'app/styles/index.scss';

const App: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to='/'>Main </Link>
      <Link to='/about'>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPage />} />
          <Route path='' element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
