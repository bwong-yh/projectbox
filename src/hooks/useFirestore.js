import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { db, timestamp } from '../firebase/config';

const useFirestore = queryCollection => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const collectionRef = collection(db, queryCollection);

  const addProject = async projectInfo => {
    setError(null);
    setIsPending(true);

    try {
      // timestamp is not the default timestamp from js, it's the timestamp provided by firebase
      const createdAt = timestamp.fromDate(new Date());
      const docRef = await addDoc(collectionRef, { ...projectInfo, createdAt });

      if (!docRef) throw new Error('Unable to create project');

      setIsPending(false);

      return docRef;
    } catch (error) {
      console.log(error);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { isPending, error, addProject };
};

export default useFirestore;
