import firebase from 'firebase/app'
import 'firebase/auth'


const app = firebase.initializeApp({
        apiKey: "AIzaSyBKTNrUMrS0X-UbzgcPNyKYVN_SEK1ycUo",
        authDomain: "auth-react-cours-4989b.firebaseapp.com",
        projectId: "auth-react-cours-4989b",
        storageBucket: "auth-react-cours-4989b.appspot.com",
        messagingSenderId: "375954727354",
        appId: "1:375954727354:web:3583f694a93d922bba7d83"
   
})

export const auth = app.auth();
export default app;