var checkPIN = false
var PIN1 = false
var PIN2 = false
var PIN3 = false

interact('.dropZone').dropzone({
    accept: '#pin1, #pin2, #pin3',
    ondrop: function (event) {
        document.querySelector('#maquina').style.backgroundImage = 'url(./images/maquina2.png)'
        checkPIN = true;
        if(event.relatedTarget.id == 'pin1') {
            console.log('pin1 colocado!')
            PIN1 = true;
            PIN2 = false;
            PIN3 = false;
        }else if(event.relatedTarget.id == 'pin2') {
            console.log('pin2 colocado!')
            PIN1 = false;
            PIN2 = true;
            PIN3 = false;
        }else if(event.relatedTarget.id == 'pin3') {
            console.log('pin3 colocado!')
            PIN1 = false;
            PIN2 = false;
            PIN3 = true;
        }
    },
    ondragenter: function (event) {
        document.querySelector('#maquina').style.backgroundImage = 'url(./images/maquina2.png)'
        checkPIN = true;
        if(event.relatedTarget.id == 'pin1') {
            console.log('pin1 colocado!')
            PIN1 = true;
            PIN2 = false;
            PIN3 = false;
        }else if(event.relatedTarget.id == 'pin2') {
            console.log('pin2 colocado!')
            PIN1 = false;
            PIN2 = true;
            PIN3 = false;
        }else if(event.relatedTarget.id == 'pin3') {
            console.log('pin3 colocado!')
            PIN1 = false;
            PIN2 = false;
            PIN3 = true;
        }
    },
    ondragleave: function (event) {
        document.querySelector('#maquina').style.backgroundImage = 'url(./images/maquina.png)'
        checkPIN = false;
        PIN1 = false;
        PIN2 = false;
        PIN3 = false;
    }
})

interact('#draggable').dropzone({
    accept: '.isqueiro',
    ondrop: function (event) {
        document.querySelector('.papel').style.backgroundImage = "url(./images/PapelQueimado.png)"
    },
    ondragenter: function (event) {
        document.querySelector(".isqueiro").style.backgroundImage = "url(./images/isqueiroOn.png)"
    },
    ondragleave: function (event) {
        document.querySelector(".isqueiro").style.backgroundImage = "url(./images/isqueiro.png)"
    }
})

document.querySelector('.btnMaquina').addEventListener('click', function() {
    if(PIN1) {
        document.querySelector('.papelPin1').style.backgroundImage = 'url(./images/file1.png)'
        document.querySelector('.papelPin1').style.display = 'block';
        document.querySelector('.papelPin1').id = 'draggable1' // imagem que quer imprimir na impressora no Pin 1
    }else if(PIN2) {
        document.querySelector('.papelPin2').style.backgroundImage = 'url(./images/file2.png)'
        document.querySelector('.papelPin2').style.display = 'block';
        document.querySelector('.papelPin2').id = 'draggable2'
    }else if(PIN3) {
        
    }
})