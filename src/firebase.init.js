import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCudu_YyHP4gCZfFuM9vyViwOHtNg44mnM",
  authDomain: "ema-john-simple-practice-d9d60.firebaseapp.com",
  projectId: "ema-john-simple-practice-d9d60",
  storageBucket: "ema-john-simple-practice-d9d60.appspot.com",
  messagingSenderId: "115576251331",
  appId: "1:115576251331:web:1e2c9d917146bea9d7d376",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
