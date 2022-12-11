import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/config';

const useCollection = queryCollection => {
  console.log(
    '🚀 ~ file: useCollection.js:6 ~ useCollection ~ queryCollection',
    queryCollection
  );
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, queryCollection);

    const unsub = onSnapshot(collectionRef, snapshot => {
      const docs = [];

      snapshot.forEach(doc => docs.push({ id: doc.id, ...doc.data() }));
      setDocuments(docs);
    });

    // when component unmounts, it stops listening to changes
    return () => unsub();
  }, [queryCollection]);

  return { documents };
};

export default useCollection;
