import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAt6bB0aFV2ATWCkVZcr8zZb8UF73TynJc",
    authDomain: "pr67-b663a.firebaseapp.com",
    databaseURL: "https://pr67-b663a-default-rtdb.firebaseio.com",
    projectId: "pr67-b663a",
    storageBucket: "pr67-b663a.appspot.com",
    messagingSenderId: "987731879773",
    appId: "1:987731879773:web:838ea073df65e12a7feab4",
    measurementId: "G-8ESQRGGX0C"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();