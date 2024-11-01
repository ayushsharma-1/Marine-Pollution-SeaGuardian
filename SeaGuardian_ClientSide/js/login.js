var animateButton = function (e) {

  e.preventDefault;
  e.target.classList.remove('animate');
  e.target.classList.add('animate');
  setTimeout(function () {
    e.target.classList.remove('animate');
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}



function moveToNext(currentInput) {
  const maxLength = parseInt(currentInput.getAttribute('maxlength'));
  const currentLength = currentInput.value.length;

  if (currentLength === maxLength) {
      const nextInput = currentInput.nextElementSibling;
      if (nextInput) {
          nextInput.focus();
      }
  }
}


// otp-send.js

function checkPasswordMatch() {
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const passwordMatchMessage = document.getElementById('passwordMatchMessage');
  const submitButton = document.getElementById('submitBtn'); // Add your button ID

  if (password === confirmPassword) {
      passwordMatchMessage.innerText = 'Password Match';
      passwordMatchMessage.style.color = 'green';
      submitButton.disabled = false; // Enable the Submit button
  } else {
      passwordMatchMessage.innerText = 'Password does not match';
      passwordMatchMessage.style.color = 'red';
      submitButton.disabled = true; // Disable the Submit button
  }
}