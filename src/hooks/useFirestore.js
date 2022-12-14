import {
  addDoc,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { useState } from 'react';
import { db, timestamp } from '../firebase/config';
import { v4 as uuidv4 } from 'uuid';

const useFirestore = coll => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const collectionRef = collection(db, coll);

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

  const updateProject = async (docId, updateInfo) => {
    setError(null);
    setIsPending(true);

    try {
      const createdAt = timestamp.fromDate(new Date());
      const id = uuidv4();

      await updateDoc(doc(collectionRef, docId), {
        comments: arrayUnion({
          ...updateInfo,
          createdAt,
          id,
        }),
      });

      setIsPending(false);

      return true;
    } catch (error) {
      console.log(error);
      setError(error.message);
      setIsPending(false);
    }
  };

  const deleteProject = async docId => {
    setError(null);
    setIsPending(true);

    try {
      await deleteDoc(doc(collectionRef, docId));

      setIsPending(false);
    } catch (error) {
      console.log(error);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { isPending, error, addProject, updateProject, deleteProject };
};

export default useFirestore;
