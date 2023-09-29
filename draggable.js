const position = { x: 0, y: 0 }
const position2 = { x: 0, y: 0 }
const isq = { x: 0, y: 0 }
const pin1 = { x: 0, y: 0 }

interact('#draggable').draggable({
    listeners: {
        start (event) {
        console.log(event.type, event.target)
        },
        move (event) {
        position.x += event.dx
        position.y += event.dy

        event.target.style.transform =
            `translate(${position.x}px, ${position.y}px)`
        },
    },
    modifiers: [
        interact.modifiers.restrictRect({
            restriction: 'parent'
        })
    ]
});

interact('#isqueiro').draggable({
    listeners: {
        start (event) {
        console.log(event.type, event.target)
        },
        move (event) {
        isq.x += event.dx
        isq.y += event.dy

        event.target.style.transform =
            `translate(${isq.x}px, ${isq.y}px)`
        },
    },
    modifiers: [
        interact.modifiers.restrictRect({
            restriction: 'parent'
        })
    ]
});

interact('#pin1').draggable({
    listeners: {
        start (event) {
        console.log(event.type, event.target)
        },
        move (event) {
        pin1.x += event.dx
        pin1.y += event.dy

        event.target.style.transform =
            `translate(${pin1.x}px, ${pin1.y}px)`
        },
    },
    modifiers: [
        interact.modifiers.restrictRect({
            restriction: 'parent'
        })
    ]
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