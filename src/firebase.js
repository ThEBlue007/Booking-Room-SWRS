// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpafS0uMmopE6Q7oAIc4Fa_dH9iQCD13I",
  authDomain: "swrs-booking-room.firebaseapp.com",
  projectId: "swrs-booking-room",
  storageBucket: "swrs-booking-room.firebasestorage.app",
  messagingSenderId: "289197675575",
  appId: "1:289197675575:web:91eacc54ae45db02021bb2",
  measurementId: "G-GEP9PS63T2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Export app and analytics if needed in other parts of your app
export { app, analytics };