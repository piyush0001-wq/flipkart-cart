
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBWhIgX4lWDhhGPuhbZRnlBVcUI9YgxCJk",
  authDomain: "flipkart-cart.firebaseapp.com",
  projectId: "flipkart-cart",
  storageBucket: "flipkart-cart.appspot.com",
  messagingSenderId: "175911730263",
  appId: "1:175911730263:web:e5ada18c6a024fc6bbb712"
});

const db = firebaseApp.firestore();

export { db };