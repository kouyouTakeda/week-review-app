// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA_di4A55dgUWFGahXP0dDVJKB6OqUayo0',
  authDomain: 'week-review-app.firebaseapp.com',
  projectId: 'week-review-app',
  storageBucket: 'week-review-app.appspot.com',
  messagingSenderId: '1032782178014',
  appId: '1:1032782178014:web:30bb514f6f2208a3a0044f',
  measurementId: 'G-K91NYCPS70',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
