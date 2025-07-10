// useConfirmAction.tsx
import { useCallback } from 'react';

export const useConfirmAction = () => {
  const confirm = useCallback((): Promise<boolean> => {
    return new Promise((resolve) => {
      const userConfirmed = window.confirm('Do you want to proceed?');
      resolve(userConfirmed);
    });
  }, []);

  return { confirm };
};
