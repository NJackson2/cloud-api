import { initializeApp, cert, getApps } from "firebase-admin";

import { getFirestore } from "firebase-admin";

import serviceAccount from "../secrets.js";

export function dbConnect() {
    if(!getApps().length) {
        initializeApp({
            credential: cert(serviceAccount)
        })
    } return getFirestore()
}