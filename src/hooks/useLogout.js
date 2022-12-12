import useAuthContext from './useAuthContext';
import { signOut } from 'firebase/auth';
import { auth, db } from '../firebase/config';
import { doc, updateDoc } from 'firebase/firestore';

const useLogout = () => {
  const { user, dispatch } = useAuthContext();

  const logout = async () => {
    try {
      const userRef = doc(db, 'users', user.uid);

      await updateDoc(userRef, {
        online: false,
      });

      await signOut(auth);

      dispatch({ type: 'LOGOUT', payload: null });
    } catch (error) {
      console.log(error);
    }
  };

  return logout;
};

export default useLogout;
