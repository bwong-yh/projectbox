import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import { db } from '../firebase/config';

const useCollection = (coll, _orderCollection) => {
  const [documents, setDocuments] = useState([]);

  // _orderColl is an array (= reference type), so react sees them as 'different' every time function is called and cause an infinite loop
  // use useRef to ensure infinite loop doesn't happen
  const orderCollection = useRef(_orderCollection).current;

  console.log(orderCollection);

  useEffect(() => {
    let collectionRef = collection(db, coll);

    if (orderCollection) {
      collectionRef = query(collectionRef, orderBy(...orderCollection));
    }

    const unsub = onSnapshot(collectionRef, snapshot => {
      const docs = [];

      snapshot.forEach(doc => docs.push({ id: doc.id, ...doc.data() }));
      setDocuments(docs);
    });

    // when component unmounts, it stops listening to changes
    return () => unsub();
  }, [coll, orderCollection]);

  return { documents };
};

export default useCollection;
