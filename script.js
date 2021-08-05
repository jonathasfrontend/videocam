navigator.mediaDevices.getUserMedia({video: true})
.then(function (mediaStream) {
  var video = document.querySelector('#videoElement');
     video.srcObject = mediaStream;
     video.play();
})
.catch(function (err) {
  console.log('Não há permissões para acessar a webcam')
});