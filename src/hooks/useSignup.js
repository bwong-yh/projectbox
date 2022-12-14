import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import useAuthContext from './useAuthContext';
import { auth, db, storage } from '../firebase/config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';

const useSignup = () => {
  const { dispatch } = useAuthContext();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const signup = async ({ email, password, displayName, file }) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      if (!res) throw new Error('Unable to create user');

      // upload file to firestore bucket to get url; then use that to update user info
      let fileURL = null;

      if (file) {
        const pathRef = ref(storage, `/thumbnail/${res.user.uid}/${file.name}`);

        await uploadBytes(pathRef, file);
        fileURL = await getDownloadURL(pathRef);
      }

      // display name and file can only be set (updated) after user is created
      await updateProfile(res.user, {
        displayName: displayName.trim(),
        photoURL: fileURL,
      });

      // create doc for each new user for future reference; use user uid as main id
      await setDoc(doc(db, 'users', res.user.uid), {
        displayName: res.user.displayName,
        photoURL: res.user.photoURL,
        online: true,
      });

      // when firebase created a new user, it logs it automatically; so need & maintain user state on the frontend
      dispatch({ type: 'LOGIN', payload: res.user });

      setIsPending(false);

      return res;
    } catch (error) {
      console.log(error);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { signup, isPending, error };
};

export default useSignup;
