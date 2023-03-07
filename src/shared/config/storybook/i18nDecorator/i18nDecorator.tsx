import { Story } from '@storybook/react';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n from '../../../../../config/storybook/i18n';

export const i18nDecorator = (Story: Story) => {
  return (
    <Suspense fallback={<div></div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};
