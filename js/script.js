// # Fase di preparazione
//recupero gli elementi dal DOM
const playBtn = document.getElementById('play');
const grid = document.getElementById('grid');
const rows = 10;
const cols = 10;
const totalCells = rows * cols

// # Funzioni
//funzione per creare una cella
function createCell () {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
}

//# Fase di elaborazione
//generare le celle al click del bottone
playBtn.addEventListener('click', function() {
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