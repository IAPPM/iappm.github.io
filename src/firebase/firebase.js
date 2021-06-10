import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDFF0qhS7mpnNYbG0FrO5p_VlKyafsbXWc",
    authDomain: "iappm-be9f6.firebaseapp.com",
    projectId: "iappm-be9f6",
    storageBucket: "iappm-be9f6.appspot.com",
    messagingSenderId: "690021598175",
    appId: "1:690021598175:web:a4938c019b2c55b1983a6a",
    measurementId: "G-S25SBGPF7X"
})

export const auth = app.auth()
export default app