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

let draggable = document.getElementById('draggable');
let level = document.getElementById('mesa')
let isDragging = false;

draggable.addEventListener('mousedown', (e) => {
  isDragging = true;
  const offsetX = e.clientX - draggable.getBoundingClientRect().left - draggable.offsetWidth / 2;
  const offsetY = e.clientY - draggable.getBoundingClientRect().top - draggable.offsetHeight / 2;

  document.addEventListener('mousemove', moveAt);
  document.addEventListener('mouseup', stopDrag);

  function moveAt(e) {
      if (!isDragging) return;

      let x = e.clientX - level.getBoundingClientRect().left - offsetX;
      let y = e.clientY - level.getBoundingClientRect().top - offsetY;

      x = Math.min(Math.max(x, 0), level.offsetWidth - draggable.offsetWidth);
      y = Math.min(Math.max(y, 0), level.offsetHeight - draggable.offsetHeight);

      draggable.style.left = x + 'px';
      draggable.style.top = y + 'px';
  }

  function stopDrag() {
      isDragging = false;
      document.removeEventListener('mousemove', moveAt);
      document.removeEventListener('mouseup', stopDrag);
  }
});

draggable.ondragstart = () => false;