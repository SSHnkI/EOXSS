document.addEventListener('DOMContentLoaded', function () {
    const videoElement = document.getElementById('videoElement');

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                videoElement.srcObject = stream;
            })
            .catch(function (error) {
                console.error('da permisao ai kraio', error);
            });
    } else {
        console.error('qé mifude mibeja');
    }
});
