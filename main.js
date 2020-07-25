// make function for onclick html element

// console log choice

// randomiza com choice

// pass the result to result function, log the result

// display result using DOM

// implement refresh button - display none to result info


const winTable = [
    ['d', 'p', 'c'],
    ['c', 'd', 'p'],
    ['p', 'c', 'd']
]

const result = player => {
    if (player === 'd') {
        console.log('Draw!')
    } else if (player === 'p') {
        console.log('Player 1 win')
    } else if (player === 'c') {
        console.log('Com win')
    }
}

const choose = choice => {
    const playerChoice = ['rock', 'paper', 'scissors']
    console.log('Player 1 choose', playerChoice[choice])

    const random = Math.floor(Math.random() * 3)
    
    const gameResult = winTable[random][choice]

    result(gameResult)
}

const refresh = () => {
    console.log('Refresh!')
}