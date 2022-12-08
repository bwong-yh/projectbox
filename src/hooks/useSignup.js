import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import useAuthContext from './useAuthContext';
import { auth } from '../firebase/config';

const useSignup = () => {
  const { dispatch } = useAuthContext();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const signup = async ({ email, password, displayName }) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      if (!res) throw new Error('Unable to create user');

      // display name can only be set after user is created
      await updateProfile(res.user, { displayName: displayName.trim() });

      // when firebase created a new user, it logs it automatically; so need to update on the frontend
      dispatch({ type: 'LOGIN', payload: res.user });

      setIsPending(false);
    } catch (error) {
      console.log(error);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { signup, isPending, error };
};

export default useSignup;
