import NextAuth from "next-auth"
import { FirebaseAdapter } from "@next-auth/firebase-adapter"
import { db } from '../../../firebase'

import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import InstagramProvider from 'next-auth/providers/instagram'
// import TwitterProvider from 'next-auth/providers/twitter'

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
  adapter: FirebaseAdapter(db),

  session: {
    jwt: false,
    maxAge: 60*60,
    updateAge: 30*60,
  },

  pages: {
    signIn: '/auth/signin'
  }
})