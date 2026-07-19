// ===========================
// FIREBASE CONFIGURATION
// DREAMY JEET WEBSITE
// ===========================


// Firebase App
import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


// Firebase Firestore
import { getFirestore } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";




// Your Firebase Project Configuration
// Replace these values with your Firebase Console details

const firebaseConfig = {

apiKey: "YOUR_API_KEY",

authDomain: "YOUR_PROJECT_ID.firebaseapp.com",

projectId: "YOUR_PROJECT_ID",

storageBucket: "YOUR_PROJECT_ID.appspot.com",

messagingSenderId: "YOUR_MESSAGING_SENDER_ID",

appId: "YOUR_APP_ID"

};




// Initialize Firebase

const app = initializeApp(firebaseConfig);




// Initialize Firestore Database

const db = getFirestore(app);




// Export Database

export { db };