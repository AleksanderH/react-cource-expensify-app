import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCs4e6syHa2BZte4h9qW1nSwzXCdjIoeKc",
    authDomain: "expensify-223f3.firebaseapp.com",
    databaseURL: "https://expensify-223f3.firebaseio.com",
    projectId: "expensify-223f3",
    storageBucket: "expensify-223f3.appspot.com",
    messagingSenderId: "862147468322"
};

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default};