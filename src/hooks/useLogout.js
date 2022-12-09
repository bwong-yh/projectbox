import useAuthContext from './useAuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = async () => {
    try {
      await signOut(auth);

      dispatch({ type: 'LOGOUT', payload: null });
    } catch (error) {
      console.log(error);
    }
  };

  return logout;
};

export default useLogout;
