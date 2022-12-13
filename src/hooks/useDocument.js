import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/config';

const useDocument = (coll, docId) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);

    onSnapshot(
      doc(db, coll, docId),
      doc => {
        if (!doc.data()) {
          setError('No projects found');
          return;
        }

        setDocument({ ...doc.data(), id: doc.id });
      },
      error => {
        console.log(error);
        setError(error.message);
      }
    );
  }, [coll, docId]);

  return { document, error };
};

export default useDocument;
