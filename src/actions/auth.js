import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

// Starts the login process
// Returns an asynchronous function
export const startLogin = () => {
    return () => {
        // Use the Popup system to log in with Google related services
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};
