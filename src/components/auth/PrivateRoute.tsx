import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
  redirectTo: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  isAuthenticated,
  redirectTo,
}) => {
  const token = localStorage.getItem('token');

  return isAuthenticated && token ? (
    <>{children}</>
  ) : (
    <Navigate to={redirectTo} replace />
  );
};

export default PrivateRoute;
