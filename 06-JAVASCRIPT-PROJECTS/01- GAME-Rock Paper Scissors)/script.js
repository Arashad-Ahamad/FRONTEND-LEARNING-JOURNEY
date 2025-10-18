const rockBtn = document.querySelector('.rock-btn')
const paperBtn = document.querySelector('.paper-btn')
const scissorsBtn = document.querySelector('.scissors-btn')
const handIcon = document.querySelector('.user-hand .hand-icon')
const ComputerHandIcon = document.querySelector('.computer-hand2 .hand-icon')
const result = document.querySelector('.result')
const userScore = document.querySelector('.user-score')
const computerScore = document.querySelector('.computer-score')

const rockIcon = '✊'
const paperIcon = '✋'
const scissorsIcon = '✌️'
const iconList = [rockIcon, paperIcon, scissorsIcon]

rockBtn.addEventListener('click', function () {
    result.textContent = ''
    handIcon.textContent = '🤜'
    ComputerHandIcon.textContent = '🤛'
    handIcon.classList.add('shakeUserHands')
    ComputerHandIcon.classList.add('shakeComputerHands')

    setTimeout(function () {
        handIcon.classList.remove('shakeUserHands')
        ComputerHandIcon.classList.remove('shakeComputerHands')
        handIcon.textContent = rockIcon
        const computerChoice = Math.floor(Math.random() * 3)
        ComputerHandIcon.textContent = iconList[computerChoice]
        // if (computerChoice === 0) {
        //    ComputerHandIcon.textContent = rockIcon
        // } else if  (computerChoice === 1) {
        //     ComputerHandIcon.textContent = paperIcon
        // } else {
        //     ComputerHandIcon.textContent = scissorsIcon
        // }

        if (handIcon.textContent === ComputerHandIcon.textContent) {
            result.textContent = 'Draw'
        } else if (ComputerHandIcon.textContent === scissorsIcon) {
            result.textContent = 'Yoy Won!!'
            userScore.textContent = +userScore.textContent + 1
        } else {
            result.textContent = 'Computer Won!!'
            computerScore.textContent = +computerScore.textContent + 1
        }
    }, 1000)
})

paperBtn.addEventListener('click', function () {
    result.textContent = ''
    handIcon.textContent = '🤜'
    ComputerHandIcon.textContent = '🤛'
    handIcon.classList.add('shakeUserHands')
    ComputerHandIcon.classList.add('shakeComputerHands')

    setTimeout(function () {
        handIcon.classList.remove('shakeUserHands')
        ComputerHandIcon.classList.remove('shakeComputerHands')
        handIcon.textContent = paperIcon
        const computerChoice = Math.floor(Math.random() * 3)
        ComputerHandIcon.textContent = iconList[computerChoice]

        if (handIcon.textContent === ComputerHandIcon.textContent) {
            result.textContent = 'Draw'
        } else if (ComputerHandIcon.textContent === rockIcon) {
            result.textContent = 'Yoy Won!!'
            userScore.textContent = +userScore.textContent + 1
        } else {
            result.textContent = 'Computer Won!!'
            computerScore.textContent = +computerScore.textContent + 1
        }
    }, 1000)
})

scissorsBtn.addEventListener('click', function () {
    result.textContent = ''
    handIcon.textContent = '🤜'
    ComputerHandIcon.textContent = '🤛'
    handIcon.classList.add('shakeUserHands')
    ComputerHandIcon.classList.add('shakeComputerHands')

    setTimeout(function () {
        handIcon.classList.remove('shakeUserHands')
        ComputerHandIcon.classList.remove('shakeComputerHands')
        handIcon.textContent = scissorsIcon
        const computerChoice = Math.floor(Math.random() * 3)
        ComputerHandIcon.textContent = iconList[computerChoice]
        if (handIcon.textContent === ComputerHandIcon.textContent) {
            result.textContent = 'Draw'
        } else if (ComputerHandIcon.textContent === paperIcon) {
            result.textContent = 'Yoy Won!!'
            userScore.textContent = +userScore.textContent + 1
        } else {
            result.textContent = 'Computer Won!!'
            computerScore.textContent = +computerScore.textContent + 1
        }
    }, 1000)
})
