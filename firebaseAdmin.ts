import admin from "firebase-admin";
import { GoogleAuth } from "google-auth-library";

const serviceAccountString = process.env.FIREBASE_ACCOUNT_KEY;

if (!serviceAccountString) {
  throw new Error("FIREBASE_ACCOUNT_KEY environment variable is not set.");
}

let serviceAccount;
try {
  serviceAccount = JSON.parse(serviceAccountString);
} catch (error) {
  throw new Error(
    "FIREBASE_ACCOUNT_KEY is not a valid JSON string: " + error
  );
}

if (
  !serviceAccount.project_id ||
  typeof serviceAccount.project_id !== "string"
) {
  throw new Error(
    "Service account object must contain a valid 'project_id' string."
  );
}

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
    const accessToken = await auth.getAccessToken();
    console.log("AccessToken fetched successfully ", accessToken);
    return accessToken ?? undefined;
  } catch (error) {
    console.error("Error fetching access token:", error);
    return undefined;
  }
}

async function myAccessToken(): Promise<void> {
  try {
    const token = await getAccessToken();
    if (token) {
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
