import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyAkmDoF-JMwpZ9emJ8Iooz0UtrVE6jrFWs",
	authDomain: "mobiiwrap-2eba7.firebaseapp.com",
	projectId: "mobiiwrap-2eba7",
	storageBucket: "mobiiwrap-2eba7.appspot.com",
	messagingSenderId: "229011759549",
	appId: "1:229011759549:web:d4e712fae9c7f9250332d4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
