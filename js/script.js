// # Fase di preparazione
//recupero gli elementi dal DOM
const playBtn = document.getElementById('play');
const grid = document.getElementById('grid');

// # Funzioni
//funzione per creare una cella
function createCell () {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
}

//funzione per generare un numero casuale da 1 a 100
function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//generare le celle al click del bottone
playBtn.addEventListener('click', function() {
    for(let i = 0; i < 100; i++) {
        //genero cento celle
        const cell = createCell();
    }
})