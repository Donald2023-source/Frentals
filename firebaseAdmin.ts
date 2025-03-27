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

async function getAccessToken(): Promise<string | undefined> {
  try {
    console.log("Attempting to fetch token...");
    const accessToken = await auth.getAccessToken(); // string | null | undefined
    console.log("AccessToken fetched successfully ", accessToken);
    return accessToken ?? undefined; // Convert null to undefined
  } catch (error) {
    console.error("Error fetching access token:", error);
    return undefined;
  }
}

async function myAccessToken(): Promise<void> {
  try {
    const token = await getAccessToken();
    if (token) { // Works: string is truthy, undefined is falsy
      console.log("Successfully retrieved token", token);
    } else {
      console.log("Failed to retrieve token");
    }
  } catch (error) {
    console.error("Error in myAccessToken:", error);
  }
}

const adminDb = admin.firestore();
export { adminDb };
myAccessToken();