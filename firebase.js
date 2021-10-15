
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAt0hGcqXsXUxgVRiM5-dPgzFBwlqEdOgM",
    authDomain: "le-ptit-heip.firebaseapp.com",
    projectId: "le-ptit-heip",
    storageBucket: "le-ptit-heip.appspot.com",
    messagingSenderId: "217029345287",
    appId: "1:217029345287:web:0c87db9b6156f41a82eaa2",
    measurementId: "G-CBMHEFG9VD"
}


const app = !firebase.apps.length
            ? firebase.initializeApp(firebaseConfig)
            : firebase.app()


const db = app.firestore()

export {
    db
}