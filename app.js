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

const draggableElements = document.querySelectorAll('#draggable');
const overlay = document.getElementById('overlay');
const imagePopup = document.getElementById('image-popup');
const imagePopupImage = imagePopup.querySelector('img');

draggableElements.forEach(element => {
  element.addEventListener('dblclick', function() {
    const backgroundImageUrl = getComputedStyle(element).backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/, '$1');
    imagePopupImage.src = backgroundImageUrl;

    imagePopup.style.opacity = '1'; 
    overlay.style.opacity = '1'; 
    overlay.style.display = 'block';
    imagePopup.style.display = 'block';
  });
});

overlay.addEventListener('click', function() {
  imagePopup.style.opacity = '0';
  overlay.style.opacity = '0';
  setTimeout(function() {
    overlay.style.display = 'none';
    imagePopup.style.display = 'none';
  }, 300);
});

//--------------------------------------------
document.querySelector('#mesa').addEventListener('click', function() {
  document.querySelector('#gaveta').classList.add('open')
  document.querySelector('.piece1').id = 'draggableItem'
  document.querySelector('#draggableItem').classList.add('open1')
})
  //

//--------------------------------------------

