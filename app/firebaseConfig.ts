import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Substitua o seguinte pela configuração do projeto Firebase do seu aplicativo.
const firebaseConfig = {
  apiKey: "aqui",
  authDomain: "aqui",
  projectId: "aqui",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "aqui",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
