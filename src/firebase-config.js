import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDyOeI6FXlVeNkoH-V4uP1zUMnS91bYegE",
    authDomain: "react-auth-rrv6-47e2f.firebaseapp.com",
    projectId: "react-auth-rrv6-47e2f",
    storageBucket: "react-auth-rrv6-47e2f.appspot.com",
    messagingSenderId: "998206323724",
    appId: "1:998206323724:web:6f1d42b2da76d5b8ec0229"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
