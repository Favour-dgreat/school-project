import { initializeApp, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './firebase-config.js';

const firebaseConfig = {
    apiKey: "AIzaSyAVawLDjh9QJ-PNf11b6Ccr3kim2_M9H58",
    authDomain: "school-project-449e7.firebaseapp.com",
    projectId: "school-project-449e7",
    storageBucket: "school-project-449e7.appspot.com",
    messagingSenderId: "95290281214",
    appId: "1:95290281214:web:6864e32534adbd98b729af",
    measurementId: "G-QMJSEF6VWN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', () => {
    const signupButton = document.getElementById('signup');

    if (signupButton) {
        signupButton.addEventListener('click', () => {
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    console.log('Signed up:', user);
                })
                .catch((error) => {
                    console.error('Sign-up error:', error);
                });
        });
    }
});
