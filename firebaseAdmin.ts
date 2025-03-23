import admin from "firebase-admin";
import { GoogleAuth } from "google-auth-library";

const serviceAccount = JSON.parse(process.env.FIREBASE_ACCOUNT_KEY || "{}");

const auth = new GoogleAuth({
  credentials: serviceAccount,
  scopes: ["https://www.googleapis.com/auth/cloud-platform"],
});

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function getAccessToken() {
  try {
    console.log("Attempting to fetch token...");

    const acessToken = await auth.getAccessToken();

    console.log("AccessToken feched successfully ", acessToken);
  } catch (error) {
    console.error("Error fetching access");
  }
}

async function myAccessToken(): Promise<void> {
  try {
    const token = await getAccessToken();
    if (token) {
      console.log("Successfully retrieved token", token);
    } else {
      console.log("Failed to retrieved token");
    }
  } catch (error) {
    console.error("Error in my Access token", error);
  }
}

const adminDb = admin.firestore();
export { adminDb };
myAccessToken();
