        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
        import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
        import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

        const firebaseConfig = {
            apiKey: "",
            authDomain: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: "",
            appId: "",
            measurementId: ""
          };

        const app = initializeApp(firebaseConfig);
        const auth = getAuth();
        const provider = new GoogleAuthProvider();

        document.addEventListener('DOMContentLoaded', () => {
            const loginButton = document.querySelector('#Login-button');
            if (loginButton) {
                loginButton.addEventListener('click', handleLoginIn);
            } else {
                console.error('Login button not found!');
            }
        });
        
        document.addEventListener('DOMContentLoaded', function() {
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
                window.location.href='./otp-verify.html';
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
                alert('Login In');
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


async function GoogleSighnIn(){

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