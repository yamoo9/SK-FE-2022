import axios from 'axios';
import { useEffect, useState } from 'react';

export function useFetch(endpoint) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(endpoint);
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [endpoint]);

  return {
    isLoading: loading,
    hasError: !!error,
    error,
    data,
  };
}
