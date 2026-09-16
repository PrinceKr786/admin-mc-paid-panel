import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCYoVCor_9EJ5JSIMganWTOhbHdUNa5rfM",
    authDomain: "brutalpanel-ec8a0.firebaseapp.com",
    databaseURL: "https://brutalpanel-ec8a0-default-rtdb.firebaseio.com",
    projectId: "brutalpanel-ec8a0",
    storageBucket: "brutalpanel-ec8a0.firebasestorage.app",
    messagingSenderId: "276068222384",
    appId: "1:276068222384:web:96b75c5877b921f3f40275",
    measurementId: "G-ZSLZS6K781"
};

const app = initializeApp(firebaseConfig);

let analytics = null;
try {
    analytics = getAnalytics(app);
} catch (e) {
    analytics = null;
}

const db = getDatabase(app);
const auth = getAuth(app);

export { app, analytics, db, auth };
