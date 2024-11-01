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


var map;
var marker;


function initMap() {
    map = L.map('map').setView([0, 0], 8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    marker = L.marker([0, 0], { draggable: true }).addTo(map);

    marker.on('dragend', function(event) {
        var latLng = event.target.getLatLng();
        
        reverseGeocode(latLng);
    });
}

//reverse geocode and update input box
function reverseGeocode(latLng) {
    var geocodeUrl = 'https://us1.locationiq.com/v1/reverse.php?key=pk.218d61e8d1c8e963e038327efa25f8e5&lat=' + latLng.lat + '&lon=' + latLng.lng + '&format=json';

    fetch(geocodeUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('location-pollution').value = data.display_name;
        })
        .catch(error => console.error('Error fetching data:', error));
}

//show location on map
function showLocationOnMap() {
    var location = document.getElementById('location-pollution').value;
    var geocodeUrl = 'https://us1.locationiq.com/v1/search.php?key=pk.218d61e8d1c8e963e038327efa25f8e5&q=' + location + '&format=json';

    fetch(geocodeUrl)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                var lat = parseFloat(data[0].lat);
                var lon = parseFloat(data[0].lon);

                map.setView([lat, lon], 8);

                marker.setLatLng([lat, lon]);
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}
window.onload = initMap;