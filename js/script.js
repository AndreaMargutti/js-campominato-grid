// # Fase di preparazione
//recupero gli elementi dal DOM
const form = document.querySelector('form');
const difficulty = document.querySelector('select');
const playBtn = document.getElementById('play');
const grid = document.getElementById('grid');

// # Funzioni
//funzione per creare una cella
function createCell () {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
}


//# Fase di elaborazione
//generare le celle al click del bottone
form.addEventListener('submit', function(event) {
    //prevengo il caricamento
    event.preventDefault();
    
    let rows = 10;
    let cols = 10;

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
    for(let i = 0; i < totalCells; i++) {
        //genero cento celle
        const cell = createCell();
        
        //colorariamo la cella al click e facciamo un log del suo numero
        cell.addEventListener('click', function() {
            cell.classList.toggle('clicked');
            console.log(cellNumber)
        })
    
        //inserire il numero nella cella
        const cellNumber = i;
        cell.innerText = cellNumber + 1;
    
        // # Fase di output
        //inserisco le celle nella griglia
        grid.appendChild(cell);
    }
})