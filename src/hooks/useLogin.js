import { useState } from 'react';
import { auth, db } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import useAuthContext from './useAuthContext';
import { doc, updateDoc } from 'firebase/firestore';

const useLogin = () => {
  const [isPending, setIsPening] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async ({ email, password }) => {
    setError(null);
    setIsPening(true);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      if (!res) throw new Error('Unable to log in');

      const userRef = doc(db, 'users', res.user.uid);

      await updateDoc(userRef, {
        online: true,
      });

      dispatch({ type: 'LOGIN', payload: res.user });

      setIsPening(false);

      return res;
    } catch (error) {
      console.log(error);
      setError(error.message);
      setIsPening(false);
    }
  };

  return { login, isPending, error };
};

export default useLogin;
