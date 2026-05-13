const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

// bubbling
window.addEventListener('click', (e) => {
    console.log('6. Window Event Listener')
})

document.addEventListener('click', (e) => {
    console.log('5. Document Event Listener')
})

document.body.addEventListener('click', (e) => {
    console.log('4. Body Event Listener')
})

green.addEventListener('click', (e) => {
    console.log('3. Green Event Listener')
})

pink.addEventListener('click', (e) => {
    console.log('2. Pink Event Listener')
})

blue.addEventListener('click', (e) => {
    // e.stopPropagation()
    console.log('1. Blue Event Listener')
})

// once: true
// blue.addEventListener('click', (e) => {
//     console.log('1. Blue Event Listener');
// }, {once: true})


// // capturing
// document.addEventListener(
//     'click',
//     (e) => {
//         console.log('5. Document Event Listener')
//     },
//     true
// )

// document.body.addEventListener(
//     'click',
//     (e) => {
//         console.log('4. Body Event Listener')
//     },
//     true
// )

// green.addEventListener(
//     'click',
//     (e) => {
//         console.log('3. Green Event Listener')
//     },
//     true
// )

// pink.addEventListener(
//     'click',
//     (e) => {
//         console.log('2. Pink Event Listener')
//     },
//     true
// )

// blue.addEventListener(
//     'click',
//     (e) => {
//         console.log('1. Blue Event Listener')
//     },
//     true
// )

