import { FC, Fragment } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
  const { t } = useTranslation('main');
  return <Fragment>{t('main_page')}</Fragment>;
};

export default MainPage;
