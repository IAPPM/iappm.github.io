import { auth } from "./firebase";

// const [currentUser, setCurrentUser] = useState()

const login = (login, pass) =>{
    return auth.signInWithEmailAndPassword(login,pass)
}

const unsubscribe = auth.onAuthStateChanged(user => {
    return user
})

export {
    login,
    unsubscribe
}