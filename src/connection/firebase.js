const { credential } = require("firebase-admin");

const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const serviceAccount = require('./prueba-apk-e54c4-firebase-adminsdk-3saff-cb433e47f4.json'); // Reemplaza con la ruta correcta

initializeApp({
  credential: credential.cert(serviceAccount)
});

const firebase = getFirestore();

module.exports = {
   firebase
};
