import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation('main');
  const { t: tAbout } = useTranslation('about');
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
     
      </div>
    </div>
  );
};
