import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDLX-MlSG_BlTNO9ZIaIniD1QCPIodGOo8",
    authDomain: "paid-16761.firebaseapp.com",
    databaseURL: "https://paid-16761-default-rtdb.firebaseio.com",
    projectId: "paid-16761",
    storageBucket: "paid-16761.firebasestorage.app",
    messagingSenderId: "949226899902",
    appId: "1:949226899902:web:9e26aca139f079fa3e51ef",
    measurementId: "G-3N5SG370Z9"
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
