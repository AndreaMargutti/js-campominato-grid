// # Fase di preparazione
//recupero gli elementi dal DOM
const form = document.querySelector('form');
const difficulty = document.querySelector('select');
const playBtn = document.getElementById('play');
const grid = document.getElementById('grid');
const scoreCounter = document.getElementById('score');

// # Funzioni
//funzione per creare una cella
function createCell () {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
}

//funzione di inizio giocp
function startGame (event) {
    event.preventDefault();

    
    //# Fase di elaborazione
    let rows = 10;
    let cols = 10;
    let score = 0;
    
    //cambio alla difficoltà
    const level = difficulty.value;
    
    switch(level) {
    case 'normal':
        rows = 9
        cols = 9
        break;
        case 'hard':
        rows = 7
        cols = 7
        break;
    }
            
    const totalCells = rows * cols
            
    //metto la classe corrispondente alla girglia
    //metto la classe giusta alla griglia
    grid.classList.remove('hard', 'normal', 'easy');
    grid.classList.add(level);
        
    //svuoto la griglia
    grid.innerHTML = '';
    //cambia il bottone in 'ricomincia'
    playBtn.innerText = 'ricomincia'

    for(let i = 0; i < totalCells; i++) {
        //genero cento celle
        const cell = createCell();
        
        //colorariamo la cella al click e facciamo un log del suo numero
        cell.addEventListener('click', function() {
            if(!cell.classList.contains('clicked')){
                cell.classList.add('clicked');
                console.log(cellNumber)
                score = ++score;
                scoreCounter.innerText = score;
            } else {
                return;
            }
        })
    
        //inserire il numero nella cella
        const cellNumber = i;
        cell.innerText = cellNumber + 1;
    
        // # Fase di output
        //inserisco le celle nella griglia
        grid.appendChild(cell);
    }
}    

//chiamo la funzione ed eseguo tutto il programma
form.addEventListener('submit', startGame);