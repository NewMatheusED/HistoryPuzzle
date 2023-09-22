window.addEventListener('resize', resizeDiv);

function resizeDiv() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var scaleWidth = width / 1280; // largura original da div
  var scaleHeight = height / 720; // altura original da div
  var scale = Math.min(scaleWidth, scaleHeight);

  var div = document.querySelector('.level');
  div.style.transform = 'scale(' + scale + ')';
}

let draggable = document.getElementById('draggable');
let level = document.getElementById('level');
let mouseX = 0;
let mouseY = 0;
let offsetX = 0;
let offsetY = 0;

draggable.addEventListener('mousedown', (e) => {
  mouseX = e.pageX - level.offsetLeft;
  mouseY = e.pageY - level.offsetTop;
  offsetX = draggable.offsetLeft;
  offsetY = draggable.offsetTop;

  window.addEventListener('mousemove', moveAt);
  window.addEventListener('mouseup', stopAt);
});

function moveAt(e) {
  draggable.style.left = (e.pageX - mouseX + offsetX) + 'px';
  draggable.style.top = (e.pageY - mouseY + offsetY) + 'px';
}

function stopAt() {
  window.removeEventListener('mousemove', moveAt);
  window.removeEventListener('mouseup', stopAt);
}