import { FC } from 'react';

import { Counter } from './components/Counter';
import './index.scss';

const App: FC = () => {
  return (
    <div className='app'>
      Hello
      <Counter />
    </div>
  );
};

export default App;
