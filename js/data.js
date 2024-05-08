function submitNGORegistrationForm() {
    // Get form elements
    var ngoName = document.getElementById('ngo-name').value;
    var ngoEmail = document.getElementById('email').value;
    var addressLine1 = document.getElementById('ngo-address-line1').value;
    var addressLine2 = document.getElementById('ngo-address-line2').value;
    var regNo = document.getElementById('ngo-reg-no').value;
    var workingAreas = document.getElementById('working-areas').value;
    var purpose = document.getElementById('purpose').value;

    // Create a JSON object with form data
    var formData = {
        "ngoName": ngoName,
        "ngoEmail": ngoEmail,
        "addressLine1": addressLine1,
        "addressLine2": addressLine2,
        "regNo": regNo,
        "workingAreas": workingAreas,
        "purpose": purpose
    };

    // Send a POST request to your Node.js server
    fetch('/submitNGORegistrationForm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // You can handle success (e.g., show a success message)
    })
    .catch((error) => {
        console.error('Error:', error);
        // You can handle errors (e.g., show an error message)
    });
}
