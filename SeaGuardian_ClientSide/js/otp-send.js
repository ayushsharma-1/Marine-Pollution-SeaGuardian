document.querySelector('#submitBtn').addEventListener('click', requestOtp);
document.querySelector('#resendotp').addEventListener('click',requestOtp)
function requestOtp() {
    // Get user's email
    const userEmail = document.getElementById('signup-email').value;
   // otp-send.js


    // Send request to the server
    fetch('http://localhost:4000/otp-verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
