import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyCiSiaOOEAH_JAg37uLD_tXnSeVjqgOmU8",
    authDomain: "event-reminder-9bf86.firebaseapp.com",
    databaseURL: "https://event-reminder-9bf86.firebaseio.com",
    projectId: "event-reminder-9bf86",
    storageBucket: "event-reminder-9bf86.appspot.com",
    messagingSenderId: "804069647173",
    appId: "1:804069647173:web:f1b4e359d2dd914228142c",
    measurementId: "G-EV1MXN2N8T"
};

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;