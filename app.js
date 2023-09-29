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

const canSee = document.querySelectorAll('.canSee');
const overlay = document.getElementById('overlay');
const imagePopup = document.getElementById('image-popup');
const imagePopupImage = imagePopup.querySelector('img');

canSee.forEach(element => {
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
// document.querySelector('#mesa').addEventListener('click', function() {
//   document.querySelector('#gaveta').classList.add('open')
//   document.querySelector('.piece1').id = 'draggableItem' //deixar o item drag apenas quando o player achá-lo
//   document.querySelector('#draggableItem').classList.add('open1')
// })

//--------------------------------------------

var icones = [
  "NPrancheta1_0.png", 
  "NPrancheta1_1.png", 
  "NPrancheta1_2.png", 
  "NPrancheta1_3.png", 
  "NPrancheta1_4.png", 
  "NPrancheta1_5.png", 
  "NPrancheta1_6.png", 
  "NPrancheta1_7.png", 
  "NPrancheta1_8.png", 
  "NPrancheta1_9.png", 
  "NPrancheta1_10.png", 
  "NPrancheta1_11.png", 
  "NPrancheta1_12.png"
];

var iconeAtual = [0, 0, 0, 0];
var correto = [1, 1, 1, 1];
var codeCorrect = false;

function mudarIcone(botao) {
  if (botao >= 1 && botao <= 4) {
    var index = botao - 1;
    var divIcone = document.querySelector(".ico.icon" + (index + 1));
    
    // Avance para o próximo ícone
    iconeAtual[index] = (iconeAtual[index] + 1) % icones.length;
    
    // Atualize a imagem de fundo da div de ícone
    divIcone.style.backgroundImage = "url(./images/icons/" + icones[iconeAtual[index]] + ")";
  }
  if(iconeAtual.toString() === correto.toString()) {
    codeCorrect = true;
    alert("Sequência correta")
  }
}

//--------------------------------------------

