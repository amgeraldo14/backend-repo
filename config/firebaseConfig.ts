const { getFirestore } = require("firebase-admin/firestore");
//@ts-ignore
const admin = require("firebase-admin");
const serviceAccount = require("./serviceKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = getFirestore();

module.exports = { db, admin };
