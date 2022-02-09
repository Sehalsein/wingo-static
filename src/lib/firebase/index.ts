import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const clientCredentials = JSON.parse(
  Buffer.from(process.env.NEXT_PUBLIC_FIREBASE || "", "base64").toString()
);

if (!getApps().length) {
  initializeApp(clientCredentials);
}

const auth = getAuth();
const db = getFirestore();

export { auth, db };
