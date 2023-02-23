import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import ThemeIcon from 'shared/assets/icons/theme-icon.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button theme={ThemeButton.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
      <ThemeIcon className={theme === Theme.LIGHT ? cls.light : cls.dark} />
    </Button>
  );
};
