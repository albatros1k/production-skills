import { FC, Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import { BugButton } from 'app/providers/ErrorBoundary';

const MainPage: FC = () => {
  const { t } = useTranslation('main');
  return (
    <Fragment>
      <BugButton />
      {t('main_page')}
    </Fragment>
  );
};

export default MainPage;
