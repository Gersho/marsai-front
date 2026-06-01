import { useNavigate } from 'react-router-dom';
import { useCallback, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useApi = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
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
          logout(); 
          return null;
        }
      }

      return res;
    },
    [navigate, baseUrl, logout]
  );

  return fetchApi;
};
