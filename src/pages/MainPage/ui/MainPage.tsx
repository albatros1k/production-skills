import { FC, Fragment } from 'react';
import { useTranslation } from 'react-i18next';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = ({}) => {
  const { t } = useTranslation('main');
  return <Fragment>{t('main_page')}</Fragment>;
};

export default MainPage;
