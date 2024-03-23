// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD2WF3g3Q40PUWOfZ6VQXv5iR_-mfz6KFQ",
    authDomain: "chatapp-74486.firebaseapp.com",
    projectId: "chatapp-74486",
    storageBucket: "chatapp-74486.appspot.com",
    messagingSenderId: "1050255515702",
    appId: "1:1050255515702:web:4aff406bfe4f3a08b1b897",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
