//@ts-ignore
const app = require("./core/app");

const functions = require("firebase-functions");

exports.api = functions.https.onRequest(app);
