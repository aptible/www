import { useEffect, useState } from 'react';

const getLS = item => {
  if (typeof window !== 'undefined' && window.localStorage) {
    return localStorage.getItem(item) || false;
  }
  return false;
};

const setLS = (item, value) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    return localStorage.setItem(item, value);
  }
};

export const useFormCompletion = item => {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setCompleted(getLS(item));
  }, [item]);

  const onComplete = () => {
    setLS(item, true);
    setCompleted(true);
  };

  return { completed, onComplete };
};
