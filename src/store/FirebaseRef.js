import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyACxS-iEmmpVuBwKWi89b8QKu-xKwXSado",
    authDomain: "probudget-fb997.firebaseapp.com",
    databaseURL: "https://probudget-fb997.firebaseio.com",
    projectId: "probudget-fb997",
    storageBucket: "probudget-fb997.appspot.com",
    messagingSenderId: "972496270163"
};

firebase.initializeApp(config);
const firebaseRef = firebase.database();

export default firebaseRef;