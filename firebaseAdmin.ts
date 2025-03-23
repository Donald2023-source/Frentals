import admin from 'firebase-admin'
import { GoogleAuth } from 'google-auth-library'

const serviceAccount = JSON.parse(process.env.FIREBASE_ACCOUNT_KEY || "{}")