import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from '../Button/Button';
import cls from './LangSwitcher.module.scss';

export enum Languages {
  EN = 'en',
  RU = 'ru',
}

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const changeLang = () => {
    i18n.changeLanguage(i18n.language === Languages.RU ? Languages.EN : Languages.RU);
  };
  return (
    <Button onClick={changeLang} className={classNames(cls.LangSwitcher, {}, [className])} theme={ThemeButton.CLEAR}>
      {t('lang')}
    </Button>
  );
};
