import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = !firebase.apps.length 
            ? firebase.initializeApp(firebaseConfig) 
            : firebase.app();

const db = app.firestore();

export { db };