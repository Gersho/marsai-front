import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export const useApi = () => {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_SERVER_ADDRESS;

  const fetchApi = useCallback(
    async (path, init = {}) => {
      try {
        const res = await fetch(baseUrl + path, {
          ...init,
          credentials: 'include',
        });

        if (res.status === 401) {
          const refreshed = await fetch(baseUrl + '/auth/refresh-token', {
            method: 'POST',
            credentials: 'include',
          });
          if (refreshed.ok) {
            // retry original request
            return await fetch(baseUrl + path, {
              ...init,
              credentials: 'include',
            });
          } else {
            navigate('/login');
            return null;
          }
        }

        return res;
      } catch (err) {
        console.error('error fetch: ', err);
        return null;
      }
    },
    [navigate, baseUrl]
  );

  return fetchApi;
};
