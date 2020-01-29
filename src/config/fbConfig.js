import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const Config = {
  apiKey: "AIzaSyDJSQKN5fjTp1ULtKgrsyMWMBNzn2ew8mc",
  authDomain: "react-planner-fdb2f.firebaseapp.com",
  databaseURL: "https://react-planner-fdb2f.firebaseio.com",
  projectId: "react-planner-fdb2f",
  storageBucket: "react-planner-fdb2f.appspot.com",
  messagingSenderId: "267426397706",
  appId: "1:267426397706:web:e61a37b8cac7953b8ca9f3",
  measurementId: "G-S3J2V75KK6"
};

firebase.initializeApp(Config);

export default firebase;
