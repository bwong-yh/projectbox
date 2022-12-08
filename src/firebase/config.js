import { initializeApp } from 'firebase/app';
import { getFirestore, Timestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBh8L6OH5a-1eolUFUuB4n6iErKDmQ1Qsk',
  authDomain: 'projectbox-175a1.firebaseapp.com',
  projectId: 'projectbox-175a1',
  storageBucket: 'projectbox-175a1.appspot.com',
  messagingSenderId: '12149953176',
  appId: '1:12149953176:web:843970411e0d44091ef6ed',
};

// initialize firebase
const app = initializeApp(firebaseConfig);

// initialize firestore
const db = getFirestore(app);
const timestamp = Timestamp;

// initialize authentication
const auth = getAuth(app);

// initialize storage
const storage = getStorage(app);

export { db, timestamp, auth, storage };
