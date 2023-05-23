const functions = require("firebase-functions");
const apiHandler = require('./handler/app.js');
const webhooksHandler = require("./handler/webhook.js")
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.api = functions.https.onRequest(apiHandler.callback());

exports.webhook = functions.https.onRequest(webhooksHandler.callback())

