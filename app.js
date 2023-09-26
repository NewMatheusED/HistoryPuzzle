import  { Draggable } from './@neodrag/vanilla';

const dragInstance = new Draggable(document.querySelector('#draggable'));

window.addEventListener('resize', resizeDiv);
window.onload = function() {
  resizeDiv();
}

function resizeDiv() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var scaleWidth = width / 1280; // largura original da div
  var scaleHeight = height / 720; // altura original da div
  var scale = Math.min(scaleWidth, scaleHeight);

  var div = document.querySelector('#level');
  div.style.transform = 'scale(' + scale + ')';
}

//--------------------------------------------

