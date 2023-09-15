window.addEventListener('resize', resizeDiv);

function resizeDiv() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var scaleWidth = width / 1280; // 600 é a largura original da div
  var scaleHeight = height / 720; // 400 é a altura original da div
  var scale = Math.min(scaleWidth, scaleHeight);

  var div = document.querySelector('.level');
  div.style.transform = 'scale(' + scale + ')';
}
