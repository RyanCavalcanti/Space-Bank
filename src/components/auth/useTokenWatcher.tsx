import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useTokenWatcher() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleTokenChange = () => {
      const newToken = localStorage.getItem('token');
      if (!newToken) {
        localStorage.removeItem('firstName');
        navigate('/');
      }
    };

    window.addEventListener('storage', handleTokenChange);

    return () => {
      window.removeEventListener('storage', handleTokenChange);
    };
  }, [navigate]);
}

export default useTokenWatcher;
