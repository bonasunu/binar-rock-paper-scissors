// make function for onclick html element

// console log choice

// randomiza com choice

// pass the result to result function, log the result

// display result using DOM

// implement refresh button - display none to result info

// TODO implement responsive, disable not opacity, player cannot click after game


const WIN_TABLE = [
    ['d', 'p', 'c'],
    ['c', 'd', 'p'],
    ['p', 'c', 'd']
]

const disableInput = () => {
    document.querySelectorAll('.choice-player').forEach(input => {
        input.setAttribute('disabled', 'disabled')
    })
}

const disableVersus = () => document.getElementById('vs').style.display = 'none'


const showResult = player => {
    if (player === 'd') {
        console.log('Draw!')
        disableVersus()
        document.getElementById('draw').style.display = 'block'
        disableInput()
    } 
    else if (player === 'p') {
        console.log('Player 1 win!')
        disableVersus()
        document.getElementById('win-player').style.display = 'block'
        disableInput()
    } 
    else if (player === 'c') {
        console.log('Com win!')
        disableVersus()
        document.getElementById('win-com').style.display = 'block'
        disableInput()
    }
}

const getChoice = choice => {
    const PLAYER_CHOICE = ['rock', 'paper', 'scissors']
    const COM_CHOICE = ['com-rock', 'com-paper', 'com-scissors']

    console.log('Player 1 choose', PLAYER_CHOICE[choice])
    const random = Math.floor(Math.random() * 3)

    document.getElementById(PLAYER_CHOICE[choice]).classList.add('chosen')
    document.getElementById(COM_CHOICE[random]).classList.add('chosen')
    document.querySelectorAll('.choice-player').forEach(choice => {
        choice.classList.remove('choice-hover');
        choice.style.cursor = 'default';
    })
    
    const gameResult = WIN_TABLE[random][choice]

    showResult(gameResult)
}

const refreshGame = () => {
    console.log('Refresh!')
    document.querySelectorAll('.choice-player').forEach(input => {
        input.removeAttribute('disabled')
    })

    document.getElementById('vs').style.display = 'block'
    document.getElementById('draw').style.display = 'none';
    document.getElementById('win-player').style.display = 'none';
    document.getElementById('win-com').style.display = 'none';

    document.querySelectorAll('.choice-player').forEach(choice => {
        choice.classList.add('choice-hover');
        choice.style.cursor = 'pointer';
    })

    document.querySelectorAll('.figure').forEach(figure => {
        figure.classList.remove('chosen');
    })
}