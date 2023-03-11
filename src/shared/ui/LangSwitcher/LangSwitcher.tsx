import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from '../Button/Button';

export enum Languages {
  EN = 'en',
  RU = 'ru',
}

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
  const { t, i18n } = useTranslation();

  const changeLang = async () => {
    i18n.changeLanguage(i18n.language === Languages.RU ? Languages.EN : Languages.RU);
  };

  return (
    <Button onClick={changeLang} className={classNames('', {}, [className])} theme={ThemeButton.CLEAR}>
      {t(short? 'en':'lang')}
    </Button>
  );
};
