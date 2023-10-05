var checkPIN = false
var PIN1 = false
var PIN2 = false
var PIN3 = false
var hole1 = false
var hole2 = false
var hole3 = false

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

interact('.hole1').dropzone({
    accept: '.piece1',
    ondragenter: function (event) {
        document.querySelector('.hole1').classList.add('shine')
    },
    ondragleave: function (event) {
        document.querySelector('.hole1').classList.remove('shine')
    },
    ondrop: function (event) {
        document.querySelector('.hole1').classList.remove('shine')
        document.querySelector('.piece1').style.top = '33%'
        document.querySelector('.piece1').style.left = '94%'
        document.querySelector('.piece1').style.transform = 'translate(0px, 0px)'
        document.querySelector('.piece1').id = ''
        hole1 = true
    } 
})

interact('.hole2').dropzone({
    accept: '.piece2',
    ondragenter: function (event) {
        document.querySelector('.hole2').classList.add('shine')
    },
    ondragleave: function (event) {
        document.querySelector('.hole2').classList.remove('shine')
    },
    ondrop: function (event) {
        document.querySelector('.hole2').classList.remove('shine')
        document.querySelector('.piece2').style.top = '126%'
        document.querySelector('.piece2').style.left = '300%'
        document.querySelector('.piece2').style.transform = 'translate(0px, 0px)'
        document.querySelector('.piece2').id = ''
        hole2 = true
    } 
})

document.querySelector('.btnMaquina').addEventListener('click', function() {
    if(PIN1) {
        document.querySelector('.papelPin1').style.backgroundImage = 'url(./images/file1.png)'
        document.querySelector('.papelPin1').style.display = 'block';
        document.querySelector('.papelPin1').id = 'draggable1'
    }else if(PIN2) {
        document.querySelector('.papelPin2').style.backgroundImage = 'url(./images/file2.png)'
        document.querySelector('.papelPin2').style.display = 'block';
        document.querySelector('.papelPin2').id = 'draggable2'
    }else if(PIN3) {
        document.querySelector('.papelPin3').style.backgroundImage = 'url(./images/file3.png)'
        document.querySelector('.papelPin3').style.display = 'block';
        document.querySelector('.papelPin3').id = 'draggable3'
    }
})