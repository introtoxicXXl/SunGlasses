
import { PropTypes } from 'prop-types';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user,loading } = useAuth();
    if(loading){
        return <><h1 className='text-7xl'>Loading</h1></>
    }
    
    if (!user?.email) {
       return <Navigate to={'/login'}/>
    }

    return children
};

PrivetRoute.propTypes = {
    children: PropTypes.node
}

export default PrivetRoute;