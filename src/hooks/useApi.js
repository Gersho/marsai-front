import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useAuthStore } from './useAuth';

export const useApi = () => {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  const baseUrl = import.meta.env.VITE_SERVER_ADDRESS;

  const fetchApi = useCallback(
    async (path, init = {}) => {
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
          setUser(null);
          return null;
        }
      }

      return res;
    },
    [navigate, baseUrl, setUser]
  );

  return fetchApi;
};
