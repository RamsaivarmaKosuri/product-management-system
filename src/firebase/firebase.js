import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {

    apiKey: "AIzaSyD2CL3H9e8iqFHBWrrZHVZpgwRaFGc1wHk",

    authDomain: "product-management-syste-97762.firebaseapp.com",

    projectId: "product-management-syste-97762",

    storageBucket: "product-management-syste-97762.firebasestorage.app",

    messagingSenderId: "93334056656",

    appId: "1:93334056656:web:6aa1ae2ba215d19e4b78d5"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);

export default app;