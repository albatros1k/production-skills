import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {
  className?: string;
}

//TODO component for testing

export const BugButton: FC<BugButtonProps> = ({ className }) => {
  const [error, setError] = useState<boolean>(false);
  const { t } = useTranslation();

  const onThrow = (): void => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button className={classNames('', {}, [className])} onClick={onThrow}>
      {t('Throw error')}
    </Button>
  );
};
