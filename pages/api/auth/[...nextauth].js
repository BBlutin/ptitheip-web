import NextAuth from "next-auth"
import { FirebaseAdapter } from "@next-auth/firebase-adapter"

import firebase from "firebase/app"
import "firebase/firestore"

import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import InstagramProvider from 'next-auth/providers/instagram'
// import TwitterProvider from 'next-auth/providers/twitter'


const firebaseConfig = {
  apiKey: "AIzaSyAt0hGcqXsXUxgVRiM5-dPgzFBwlqEdOgM",
  authDomain: "le-ptit-heip.firebaseapp.com",
  projectId: "le-ptit-heip",
  storageBucket: "le-ptit-heip.appspot.com",
  messagingSenderId: "217029345287",
  appId: "1:217029345287:web:0c87db9b6156f41a82eaa2",
  measurementId: "G-CBMHEFG9VD"
}

const firestore = (
  firebase.apps[0] ?? firebase.initializeApp(firebaseConfig)
).firestore()


export default NextAuth({
  providers: [
    FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    InstagramProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    // TwitterProvider({
    //     clientId: process.env.TWITTER_CLIENT_ID,
    //     clientSecret: process.env.TWITTER_CLIENT_SECRET
    // })
  ],
  adapter: FirebaseAdapter(firestore),

  session: {
    jwt: false,
    maxAge: 60*60,
    updateAge: 30*60,
  },

  pages: {
    signIn: '/auth/signin'
  }
})