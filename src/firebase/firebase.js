import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDfew6OpmobBhT-Rud4H77N_-rlik3LlmA",
    authDomain: "iappm-f0e12.firebaseapp.com",
    projectId: "iappm-f0e12",
    storageBucket: "iappm-f0e12.appspot.com",
    messagingSenderId: "32136235271",
    appId: "1:32136235271:web:1d6af554aa9215b2b3dda2"
})

export const auth = app.auth()
export default app