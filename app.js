const player1ScoreElement = document.querySelector('.player1')
const player2ScoreElement = document.querySelector('.player2')

const player1Btn = document.querySelector('.player1__btn')
const player2Btn = document.querySelector('.player2__btn')
const resetBtn = document.querySelector('.reset__btn')

let wonPlayer = document.querySelector('.win__player')

const finish = document.querySelector('.finish')
let finishScore = 3

let player1Score = 0
let player2Score = 0

finish.onchange = function () {
    finishScore = Number(this.value)
    resetAll()
}

function checkWinner() {
    if (player1Score >= finishScore) {
        player1ScoreElement.style.color = 'green'
        player1Btn.disabled = true
        player2Btn.disabled = true
        player1Btn.style.opacity = '.5'
        player2Btn.style.opacity = '.5'
    } else if (player2Score >= finishScore) {
        player2ScoreElement.style.color = 'green'
        player1Btn.disabled = true
        player2Btn.disabled = true
        player1Btn.style.opacity = '.5'
        player2Btn.style.opacity = '.5'
    }
}

function resetAll() {
    player1ScoreElement.style.color = 'black'
    player2ScoreElement.style.color = 'black'
    player1Btn.disabled = false
    player2Btn.disabled = false
    player1Btn.style.opacity = '1'
    player2Btn.style.opacity = '1'
    player1Score = 0
    player2Score = 0
    player1ScoreElement.textContent = 0
    player2ScoreElement.textContent = 0
}

player1Btn.addEventListener('click', () => {
    player1Score++
    player1ScoreElement.innerHTML = player1Score
    checkWinner()
})

player2Btn.addEventListener('click', () => {
    player2Score++
    player2ScoreElement.innerHTML = player2Score
    checkWinner()
})

resetBtn.addEventListener('click', () => {
    resetAll()
})