document.addEventListener("DOMContentLoaded", function () {
    const cameraPreview = document.getElementById('camera-preview');

 navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
     .then((stream) => {
         cameraPreview.srcObject = stream;


         const canvas = document.createElement('canvas');
         const canvasContext = canvas.getContext('2d');

         function updateImagePreview() {
             canvas.width = cameraPreview.videoWidth;
             canvas.height = cameraPreview.videoHeight;
             canvasContext.drawImage(cameraPreview, 0, 0, canvas.width, canvas.height);

             const imageContainer = document.getElementById('image-container');
             const uploadedImage = document.getElementById('uploaded-image');
             uploadedImage.src = canvas.toDataURL('image/jpeg');

             requestAnimationFrame(updateImagePreview);
         }

         updateImagePreview();
     })
     .catch((error) => {
         console.error('Error accessing the camera:', error);
     });


 const imageInput = document.getElementById('image-input');
 imageInput.addEventListener('change', handleImageInput);
});

function handleImageInput() {
 const imageContainer = document.getElementById('image-container');
 const uploadedImage = document.getElementById('uploaded-image');
 const imageInput = document.getElementById('image-input');

 const file = imageInput.files[0];

 if (file) {
     const reader = new FileReader();

     reader.onload = function (e) {
         uploadedImage.src = e.target.result;
         imageContainer.style.display = 'block';
     };

     reader.readAsDataURL(file);
 }
}

function submitForm() {

 alert('Form submitted!');
}