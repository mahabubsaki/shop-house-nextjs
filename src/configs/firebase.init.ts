
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, OAuthProvider, TwitterAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAonM_Vxeg8Zwx0W8jKQEeN_MyTUBrnsuw",
    authDomain: "shophouse-ecommerce.firebaseapp.com",
    projectId: "shophouse-ecommerce",
    storageBucket: "shophouse-ecommerce.appspot.com",
    messagingSenderId: "62544743620",
    appId: "1:62544743620:web:ad7c5c27ecd783d1bf8d91"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const facebookProvider = new FacebookAuthProvider();
facebookProvider.addScope('email');
facebookProvider.addScope('public_profile');
// have to create test app and use the same fb account which used on developer account

const githubProvider = new GithubAuthProvider();



const twitterProvider = new TwitterAuthProvider();

// While creating the twitter app give any website link like https://www.google.com/ on required site link

const microsoftProvider = new OAuthProvider('microsoft.com');

// Choose third option and select web and take client secret value not id

const yahooProvider = new OAuthProvider('yahoo.com');




export { auth, googleProvider, facebookProvider, githubProvider, twitterProvider, microsoftProvider, yahooProvider };