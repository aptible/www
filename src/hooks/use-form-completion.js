import { useEffect, useState } from 'react';

export const useFormCompletion = item => {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setCompleted(localStorage.getItem(item));
  }, [item]);

  const onComplete = () => {
    localStorage.setItem(item, true);
    setCompleted(true);
  };

  return { completed, onComplete };
};
