// make function for onclick html element

// console log choice

// randomiza com choice

// pass the result to result function, log the result

// display result using DOM

// implement refresh button - display none to result info

// TODO implement responsive, disable not opacity, player cannot click after game


const WIN_Table = [
    ['d', 'p', 'c'],
    ['c', 'd', 'p'],
    ['p', 'c', 'd']
]

const disableInput = () => {
    document.querySelectorAll('.choice-player').forEach(input => {
        input.setAttribute('disabled', 'disabled')
    })
}

const result = player => {
    if (player === 'd') {
        console.log('Draw!')
        document.getElementById('vs').style.display = 'none'
        document.getElementById('draw').style.display = 'block';
        disableInput()
    } 
    else if (player === 'p') {
        console.log('Player 1 win!')
        document.getElementById('vs').style.display = 'none'
        document.getElementById('win-player').style.display = 'block';
        disableInput()
    } 
    else if (player === 'c') {
        console.log('Com win!')
        document.getElementById('vs').style.display = 'none'
        document.getElementById('win-com').style.display = 'block';
        disableInput()
    }
}

const choose = choice => {
    const playerChoice = ['rock', 'paper', 'scissors']
    const comChoice = ['com-rock', 'com-paper', 'com-scissors']

    console.log('Player 1 choose', playerChoice[choice])
    const random = Math.floor(Math.random() * 3)

    document.getElementById(playerChoice[choice]).classList.add('chosen')
    document.getElementById(comChoice[random]).classList.add('chosen')
    document.querySelectorAll('.choice-player').forEach(choice => {
        choice.classList.remove('choice-hover');
        choice.style.cursor = 'default';
    })
    
    const gameResult = WIN_Table[random][choice]

    result(gameResult)
}

const refresh = () => {
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