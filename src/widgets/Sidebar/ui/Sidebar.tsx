import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routerConfig/routeConfig';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Sidebar.module.scss';

import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const { t: tMain } = useTranslation('main');
  const { t: tAbout } = useTranslation('about');

  const toggleCollapsed = () => setCollapsed((prev) => !prev);

  return (
    <aside data-testid='sidebar' className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button size={ButtonSize.L} theme={ThemeButton.BACKGROUND_INVERTED} className={cls.collapseBtn} data-testid='sidebar-toggle' square={true} onClick={toggleCollapsed}>
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        <div>
          <AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
            <MainIcon className={cls.icon} />
            <span className={cls.link}>{tMain('main_page')}</span>
          </AppLink>
        </div>
        <div>
          <AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
            <AboutIcon className={cls.icon} />
            <span className={cls.link}>{tAbout('about_page')}</span>
          </AppLink>
        </div>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </aside>
  );
};
