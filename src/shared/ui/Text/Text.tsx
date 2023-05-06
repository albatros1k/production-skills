import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text: FC<TextProps> = ({ className, title, text, theme = TextTheme.PRIMARY }) => {
  return (
    <div className={classNames(cls.Text, { [cls[theme]]: true }, [className])}>
      {title ? <p className={cls.title}>{title}</p> : null}
      {text ? <p className={cls.text}>{text}</p> : null}
    </div>
  );
};
