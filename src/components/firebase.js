// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD30j0XWn1-j3aZtVYHZQIci4AudfkNSZM',
  authDomain: 'task-board-6bcbb.firebaseapp.com',
  projectId: 'task-board-6bcbb',
  storageBucket: 'task-board-6bcbb.appspot.com',
  messagingSenderId: '297449322817',
  appId: '1:297449322817:web:3979e3a01ca157cad989c0',
  measurementId: 'G-561XGQ8L1C',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
