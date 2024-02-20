import { useAtom } from 'jotai';
import { isAuthenticatedAtom } from '../services/atoms';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component }) => {
    const [isAuthenticated] = useAtom(isAuthenticatedAtom);

    return isAuthenticated ? Component : <Navigate to="/connexion" replace />;
};

export default PrivateRoute;