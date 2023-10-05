const position = { x: 0, y: 0 }
const position2 = { x: 0, y: 0 }
const position3 = { x: 0, y: 0 }
const position4 = { x: 0, y: 0 }
const position5 = { x: 0, y: 0 }
const position6 = { x: 0, y: 0 }
const position7 = { x: 0, y: 0 }
const position8 = { x: 0, y: 0 }
const isq = { x: 0, y: 0 }
const pin1 = { x: 0, y: 0 }
const pin2 = { x: 0, y: 0 }
const pin3 = { x: 0, y: 0 }

interact('#draggable').draggable({
    listeners: {
        start (event) {
        console.log(event.type, event.target)
        },
        move (event) {
        position.x += event.dx
        position.y += event.dy

        event.target.style.transform = `translate(${position.x}px, ${position.y}px)`
        },
    },
    modifiers: [
        interact.modifiers.restrictRect({
            restriction: 'parent'
        })
    ]
});

interact('#draggable1').draggable({
    listeners: {
        start (event) {
        console.log(event.type, event.target)
        },
        move (event) {
        position5.x += event.dx
        position5.y += event.dy

        event.target.style.transform = `translate(${position5.x}px, ${position5.y}px)`
        },
    },
    modifiers: [
        interact.modifiers.restrictRect({
            restriction: 'parent'
        })
    ]
});

interact('#draggable2').draggable({
    listeners: {
        start (event) {
        console.log(event.type, event.target)
        },
        move (event) {
        position3.x += event.dx
        position3.y += event.dy

        event.target.style.transform = `translate(${position3.x}px, ${position3.y}px)`
        },
    },
    modifiers: [
        interact.modifiers.restrictRect({
            restriction: 'parent'
        })
    ]
});
interact('#draggable3').draggable({
    listeners: {
        start (event) {
        console.log(event.type, event.target)
        },
        move (event) {
        position4.x += event.dx
        position4.y += event.dy

        event.target.style.transform = `translate(${position4.x}px, ${position4.y}px)`
        },
    },
    modifiers: [
        interact.modifiers.restrictRect({
            restriction: 'parent'
        })
    ]
});

interact('#draggable4').draggable({
    listeners: {
        start (event) {
        console.log(event.type, event.target)
        },
        move (event) {
        position8.x += event.dx
        position8.y += event.dy

        event.target.style.transform = `translate(${position8.x}px, ${position8.y}px)`
        },
    },
    modifiers: [
        interact.modifiers.restrictRect({
            restriction: 'parent'
        })
    ]
});

interact('#draggableItem2').draggable({
    listeners: {
        start (event) {
        console.log(event.type, event.target)
        },
        move (event) {
        isq.x += event.dx
        isq.y += event.dy

        event.target.style.transform = `translate(${isq.x}px, ${isq.y}px)`
        },
    },
});

interact('#draggableItem3').draggable({
    listeners: {
        start (event) {
        console.log(event.type, event.target)
        },
        move (event) {
        position6.x += event.dx
        position6.y += event.dy

        event.target.style.transform = `translate(${position6.x}px, ${position6.y}px)`
        },
    },
});

interact('#draggableItem4').draggable({
    listeners: {
        start (event) {
        console.log(event.type, event.target)
        },
        move (event) {
        position7.x += event.dx
        position7.y += event.dy

        event.target.style.transform = `translate(${position7.x}px, ${position7.y}px)`
        },
    },
});

interact('#pin1').draggable({
    listeners: {
        start (event) {
        console.log(event.type, event.target)
        },
        move (event) {
        pin1.x += event.dx
        pin1.y += event.dy

        event.target.style.transform = `translate(${pin1.x}px, ${pin1.y}px)`
        },
    },
    modifiers: [
        interact.modifiers.restrictRect({
            restriction: 'parent'
        })
    ]
});

interact('#pin2').draggable({
    listeners: {
        start (event) {
        console.log(event.type, event.target)
        },
        move (event) {
        pin2.x += event.dx
        pin2.y += event.dy

        event.target.style.transform = `translate(${pin2.x}px, ${pin2.y}px)`
        },
    },
});

interact('#pin3').draggable({
    listeners: {
        start (event) {
        console.log(event.type, event.target)
        },
        move (event) {
        pin3.x += event.dx
        pin3.y += event.dy

        event.target.style.transform = `translate(${pin3.x}px, ${pin3.y}px)`
        },
    },
});

interact('#draggableItem').draggable({
    listeners: {
        start (event) {
        console.log(event.type, event.target)
        },
        move (event) {
        position2.x += event.dx
        position2.y += event.dy

        event.target.style.transform = `translate(${position2.x}px, ${position2.y}px)`
        },
    }
})