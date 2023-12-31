window.addEventListener('resize', resizeDiv);
window.onload = function() {
  resizeDiv();

  imagePopupImage.src = 'images/instruções.jpg';
  imagePopup.style.opacity = '1'; 
  overlay.style.opacity = '1'; 
  overlay.style.display = 'block';
  imagePopup.style.display = 'block';
}

function resizeDiv() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  if(width < 1400) {
    var scaleWidth = width / 1280; // largura original da div
    var scaleHeight = height / 720; // altura original da div
    var scale = Math.min(scaleWidth, scaleHeight);
    var div = document.querySelector('#level');
    if(scale > 1) {
      div.style.transform = 'scale(1)';
    }else if (scale < 1) {
      div.style.transform = 'scale(' + scale + ')';
    }
  }else if(width > 1400) {
    var scaleWidth = width / 1600; // largura original da div
    var scaleHeight = height / 900; // altura original da div
    var scale = Math.min(scaleWidth, scaleHeight);
    var div = document.querySelector('#level');
    if(scale > 1) {
      div.style.transform = 'scale(1)';
    }else if (scale < 1) {
      div.style.transform = 'scale(' + scale + ')';
    }
  }

}

//--------------------------------------------

const canSee = document.querySelectorAll('.canSee');
const overlay = document.getElementById('overlay');
const imagePopup = document.getElementById('image-popup');
const imagePopupImage = imagePopup.querySelector('img');
var papelAudio = new Audio('audio/papel.mp3')
canSee.forEach(element => {
 element.addEventListener('dblclick', function() {
    const backgroundImageUrl = getComputedStyle(element).backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/, '$1');
    imagePopupImage.src = backgroundImageUrl;
    imagePopup.style.opacity = '1'; 
    overlay.style.opacity = '1'; 
    overlay.style.display = 'block';
    imagePopup.style.display = 'block';
    papelAudio.play()
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

var iconeAtual = [1, 1, 1, 1];
var correto = [3, 12, 9, 0];
var codeCorrect = false;
var audioPanel = new Audio('audio/clickPanel.mp3')
var granted = new Audio('audio/granted.mp3')

function mudarIcone(botao) {
  if (botao >= 1 && botao <= 4) {
    audioPanel.play();
    var index = botao - 1;
    var divIcone = document.querySelector(".ico.icon" + (index + 1));
    
    // Avance para o próximo ícone
    iconeAtual[index] = (iconeAtual[index] + 1) % icones.length;
    
    // Atualize a imagem de fundo da div de ícone
    divIcone.style.backgroundImage = "url(./images/icons/" + icones[iconeAtual[index]] + ")";
  }
  if(iconeAtual.toString() === correto.toString()) {
    granted.play();
    codeCorrect = true;
    document.querySelector('#gaveta2').classList.add('open') // animação abrir
    document.querySelector('#gaveta2').style.display = 'block';
    document.querySelector('.fios').style.display = 'block';
  }
}

//--------------------------------------------

var currPIN = [];
var correctPIN = [4,2,2,4];
var iconPIN1 = [2,4,3,1];
var iconPIN2 = [1,3,2,4];
var iconPIN3 = [4,3,2,1];
var iconPIN4 = [3,1,4,2];
var finalPIN = [2,4,1,3];
var clickAudio = new Audio('audio/click.mp3')
var denied = new Audio('audio/denied.mp3')

function resetLights() {
 for(var i = 0; i <= 4; i++) {
    var l = document.querySelectorAll('.l')
    l[i].style.backgroundColor = "gray";
 }
}

function setPIN(num) {
  clickAudio.play();
  if(currPIN.length !== 4) {
    currPIN.push(num)
    console.log(currPIN)
  }
 
  // Atualize a cor das luzes
  for(var i = 0; i < currPIN.length; i++) {
     document.querySelector("#light" + (i + 1)).style.backgroundColor = "red";
  }
 
  if(currPIN.toString() === correctPIN.toString()) {
    console.log('c')
     for(var i = 0; i < 4; i++) {
       document.querySelector("#light" + (i + 1)).style.backgroundColor = "green";
       document.querySelector('#gaveta').classList.add('open') // animação abrir
       document.querySelector('#gaveta').style.display = 'block'
       document.querySelector('.piece1').id = 'draggableItem' //deixar o item drag apenas quando o player achá-lo
       document.querySelector('.isqueiro').id = 'draggableItem2'
       currPIN = [];
       granted.play();
       setTimeout(() => {
        resetLights()
       }, 1000);  
     }
  }

  if(currPIN.toString() === iconPIN1.toString()) {
    console.log('p1')
    for(var i = 0; i < 4; i++) {
      document.querySelector("#light" + (i + 1)).style.backgroundColor = "green";
      document.querySelector('.iconMesa1').style.display = 'block'
      currPIN = [];
      granted.play();
      setTimeout(() => {
       resetLights()
      }, 1000); 
    }
  }

  if(currPIN.toString() === iconPIN2.toString()) {
    console.log('p2')
    for(var i = 0; i < 4; i++) {
      document.querySelector("#light" + (i + 1)).style.backgroundColor = "green";
      document.querySelector('.iconMesa2').style.display = 'block'
      currPIN = [];
      granted.play();
      setTimeout(() => {
       resetLights()
      }, 1000); 
    }
  }

  if(currPIN.toString() === iconPIN3.toString()) {
    console.log('p3')
    for(var i = 0; i < 4; i++) {
      document.querySelector("#light" + (i + 1)).style.backgroundColor = "green";
      document.querySelector('.iconMesa3').style.display = 'block'
      currPIN = [];
      granted.play();
      setTimeout(() => {
       resetLights()
      }, 1000); 
    }
  }

  if(currPIN.toString() === iconPIN4.toString()) {
    console.log('p4')
    for(var i = 0; i < 4; i++) {
      document.querySelector("#light" + (i + 1)).style.backgroundColor = "green";
      document.querySelector('.iconMesa4').style.display = 'block'
      currPIN = [];
      granted.play();
      setTimeout(() => {
       resetLights()
      }, 1000); 
    }
  }

  if(currPIN.toString() === finalPIN.toString()) {
    console.log('f')
    document.querySelector('#gaveta3').style.display = 'block';
    document.querySelector('#gaveta3').classList.add('open')
    currPIN = [];
    granted.play();
    setTimeout(() => {
     resetLights()
    }, 1000); 
    for(var i = 0; i < 4; i++) {
      document.querySelector("#light" + (i + 1)).style.backgroundColor = "green";
    }
  }
  if(currPIN.toString() !== correctPIN.toString() && currPIN.toString() !== iconPIN1.toString() && currPIN.toString() !== iconPIN2.toString() && currPIN.toString() !== iconPIN3.toString() && currPIN.toString() !== iconPIN4.toString() && currPIN.toString() !== finalPIN.toString() && currPIN.length == 4){
    currPIN = [];  
    clickAudio.pause();
    denied.play()   
    resetLights();
  }
 }

 //--------------------------------------------

 let fios = document.querySelectorAll('.fio');
 let fioCortado = [];
 let correctFios = [4, 1, 3, 2, 5];
 
 fios.forEach((fio, index) => {
     fio.addEventListener('click', () => {
         fio.style.backgroundImage = `url(./images/fio${index + 1}C.png)`;
         fioCortado.push(index + 1);
         
         if (fioCortado.toString() !== correctFios.toString()) {
          if(fioCortado.length > 4) {
            denied.play();
            setTimeout(() => {
                fios.forEach((fio, index) => {
                    fio.style.backgroundImage = `url(./images/fio${index + 1}.png)`;
                });
                fioCortado = [];
            }, 500);
          }
         } else if (fioCortado.toString() == correctFios.toString()) {
             document.querySelector('.fios .light').style.backgroundColor = 'green';
             granted.play();
         }
     });
 });
 