import { FC, Fragment } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = () => {
  const { t } = useTranslation('about');

  return <Fragment>{t('about_page')}</Fragment>;
};

export default AboutPage;
