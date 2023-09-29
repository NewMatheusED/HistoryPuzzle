var checkPIN = false
var PIN1 = false
var PIN2 = false
var PIN3 = false

interact('.dropZone').dropzone({
    accept: '#pin1',
    ondrop: function (event) {
        document.querySelector('#maquina').style.backgroundImage = 'url(./images/maquina2.png)'
        checkPIN = true;
        PIN1 = true;
    },
    ondragenter: function (event) {
        document.querySelector('#maquina').style.backgroundImage = 'url(./images/maquina2.png)'
        checkPIN = true;
        PIN1 = true;
    },
    ondragleave: function (event) {
        document.querySelector('#maquina').style.backgroundImage = 'url(./images/maquina.png)'
        checkPIN = false;
        PIN1 = false;
    }
})

document.querySelector('.btnMaquina').addEventListener('click', function() {
    if(PIN1) {
        document.querySelector('.papelPin1').style.backgroundImage = 'url(./images/papel.png)' // imagem que quer imprimir na impressora no Pin 1
    }else if(!PIN1) {
        alert("você precisa colocar o pin")
    }
})