import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDnMemoUBDgjXqQe--Tqrvb22trbsrA5aw",
    authDomain: "grade-calculator-d4762.firebaseapp.com",
    projectId: "grade-calculator-d4762",
    storageBucket: "grade-calculator-d4762.appspot.com",
    messagingSenderId: "600789154014",
    appId: "1:600789154014:web:d1e4d4165f763ef4846a4f"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
