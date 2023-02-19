import { FC, Fragment } from 'react';

import classes from './Counter.module.scss';

interface CounterProps {}

export const Counter: FC<CounterProps> = ({}) => {
  return <div className={classes.button}>Counter</div>;
};
