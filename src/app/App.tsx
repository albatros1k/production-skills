import { FC } from 'react';

import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { classNames } from 'shared/lib/classNames/classNames';

import 'app/styles/index.scss';

const App: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
};

export default App;
