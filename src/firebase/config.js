import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBTKLHlh_SI6HxBBBCs6BF0qGRAE9WzGrk",
  authDomain: "quinielaunisuper.firebaseapp.com",
  projectId: "quinielaunisuper",
  storageBucket: "quinielaunisuper.firebasestorage.app",
  messagingSenderId: "279761962120",
  appId: "1:279761962120:web:a503a3f6bc95b241c0cb3d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager()
  })
});