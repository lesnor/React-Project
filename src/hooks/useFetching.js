import { useState } from 'react';

export const useFetching = (callback) => {
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const fetching = async (...args) => {
    try {
      setLoading(true);
      await callback(...args);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };
  return [fetching, Loading, error];
};
