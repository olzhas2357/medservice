import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Для аутентификации
import { getFirestore } from 'firebase/firestore'; // Для базы данных Firestore
import { getStorage } from 'firebase/storage'; // Для хранения файлов (изображений)

const firebaseConfig = {
    apiKey: "AIzaSyAwUX_sVs_9bNi55pqOs6nnQEuZ5Z9x0jE",
    authDomain: "medcall-e1d13.firebaseapp.com",
    projectId: "medcall-e1d13",
    storageBucket: "medcall-e1d13.firebasestorage.app",
    messagingSenderId: "229060984067",
    appId: "1:229060984067:web:a96fa7736da9be0e2dbd36",
    measurementId: "G-Z1VGNSX9X2"
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Получение экземпляров сервисов
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
