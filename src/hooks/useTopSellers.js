import { useState, useEffect } from 'react';
import { fetchTopSellers } from '../services/nftApi';

export const useTopSellers = () => {
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadSellers = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchTopSellers();
        setSellers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadSellers();
  }, []);

  return { sellers, loading, error };
};


































