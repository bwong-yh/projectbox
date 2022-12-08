import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const useAuthContext = () => {
  // authContext is an object with user state and dispatch
  const authContext = useContext(AuthContext);

  return authContext;
};

export default useAuthContext;
