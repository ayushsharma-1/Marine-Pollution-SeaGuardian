import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
// import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAjzzE9G53NisbxWA8D4DTgPx5cFnGqjZQ",
    authDomain: "sea-guardian-412209.firebaseapp.com",
    projectId: "sea-guardian-412209",
    storageBucket: "sea-guardian-412209.appspot.com",
    messagingSenderId: "757450204746",
    appId: "1:757450204746:web:79894359eb7646afd1e8b3",
    measurementId: "G-99TVSE54R6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
// const db = getFirestore(app);

document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('#Login-button');
    if (loginButton) {
        loginButton.addEventListener('click', handleLoginIn);
    } else {
        console.error('Login button not found!');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const myElements = document.getElementById('submitBtn');
    if (myElements) {
        myElements.addEventListener('click', handleCreateAccount);
    } else {
        console.error('Element not found!');
    }
});

async function handleCreateAccount() {
    var email = document.querySelector('.emailSign').value;
    var password = document.querySelector('.passSign').value;

    // Validate user inputs (you can add your validation logic here)

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // alert('Signed up');
        
        window.location.href = './otp-verify.html';
        const user = userCredential.user;
        // ...
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle error
        console.error(errorCode, errorMessage);
    }
}

async function handleLoginIn() {
    var email = document.querySelector('.LoginEmail').value;
    var password = document.querySelector('.LoginPassword').value;

    // Validate user inputs (you can add your validation logic here)

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // Signed in

        // alert('Login In');
        window.location.href = './home.html'
       
        
        
        const user = userCredential.user;
        // ...
    } catch (error) {
        alert('Wrong Credentials')
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle error
        console.error(errorCode, errorMessage);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.GoogleLogin').addEventListener('click', GoogleSighnIn);
});


async function GoogleSighnIn() {

    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });


}
async function addPostToDB(userSignName, userSignEmail) {
    try {
        const docref = await addDoc(collection(db, "users"), {
            name: userSignName,
            email: userSignEmail
        });
        alert('Data added to firebase');
        window.location.href = './otp-verify.html';
        console.log("Document written with ID: ", docref.id);
    } catch (e) {
        console.error('Error adding document: ', e);
    }
}
function sighnupDatatofirebase() {
    const userSignName = document.getElementById('signup-email').value;
    const userSignEmail = document.getElementById('Username').value;
    if (userSignName == '' || userSignEmail == '') {
        alert('Please fill the form');
    } else {
        addPostToDB(userSignName, userSignEmail);
    }
}