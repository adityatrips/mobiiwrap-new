import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyD_NpenHzRP-z7z4wargYwbsQzLRlP8qUg",
	authDomain: "mobii-wrap.firebaseapp.com",
	projectId: "mobii-wrap",
	storageBucket: "mobii-wrap.appspot.com",
	messagingSenderId: "885749096262",
	appId: "1:885749096262:web:522be93e0cc088b1b8cf47",
	measurementId: "G-ZBTBBF72W9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
