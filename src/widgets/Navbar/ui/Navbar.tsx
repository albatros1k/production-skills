import { FC } from 'react';
import { Link } from 'react-router-dom';

import cls from './Navbar.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.navbar)}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to='/'>
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.RED} to='/about'>
          About
        </AppLink>
      </div>
    </div>
  );
};
