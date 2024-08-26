// # Fase di preparazione
//recupero gli elementi dal DOM
const form = document.querySelector('form');
const difficulty = document.querySelector('select');
const playBtn = document.getElementById('play');
const grid = document.getElementById('grid');
const scoreCounter = document.getElementById('score');
let isOver = false;

// # Funzioni
//funzione per creare una cella
function createCell () {
    //recupero il div
    const cell = document.createElement('div');
    //aggiungo una cella
    cell.classList.add('cell');
    //la restituisco
    return cell;
}

//funzione per creare le bombe casualmente
function getRandomNumber (totalBombs, totalCells) {
    //creo l'array di bombe
    const bombs = [];
    //generiamo le bombe
    while(bombs.length < totalBombs){
        const randomNumber = Math.floor(Math.random() * totalCells + 1);
        //se non è già presente il numero pusho il numero nell'array
        if(!bombs.includes(randomNumber)) bombs.push(randomNumber);
    }
    
    //tiro fuori l'array di bombe
    return bombs;
}

//funzione di end game
function endGame (score, bombs, hasWon = false,) {
    //creo variabile per centralizzare il log del risultato
    let result;
    if(hasWon){
        result = 'vinto'
    } else {
        result = 'perso'
    }
    //invio il messaggio
    alert(`Hai ${result}! Il tuo punteggio è di ${score}`);

    isOver = true;
    
    // # coloriamo tutte le celle a fine partita
    //recupero le celle
    const cells = document.querySelectorAll('.cell');
    //recupero le singole celle
    for(let i = 0; i < cells.length; i++){
        const cell = cells[i];
        //aggiungo la classe clicked
        cell.classList.add('clicked');
        //recupero il numero della cella
        const cellNumber = i + 1;
        //se corrisponde ad una bomba aggiungo la classe bomb
        if(bombs.includes(cellNumber)) {
            cell.classList.add('bomb')
            //e tolgo il numero
            cell.innerText = '';
        }
    }
}

//funzione di inizio giocp
function startGame (event) {
    // ! prevengo l'invio e successivmento ricaricamento del form
    event.preventDefault();

    //# Fase di elaborazione
    //riporto il finale a falso
    isOver = false;
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
    const totalBombs = 16;
    const maxScore = totalCells - totalBombs;
    
    //rimuovo eventuali classi proveniente da partite precedenti
    grid.classList.remove('hard', 'normal', 'easy');
    //metto la classe corrispondente al livello di difficoltà alla girglia
    grid.classList.add(level);
        
    //svuoto la griglia
    grid.innerHTML = '';
    //cambia il bottone in 'ricomincia'
    playBtn.innerText = 'ricomincia'

    //genero le bombe
    const bombs = getRandomNumber(totalBombs, totalCells);

    for(let i = 0; i < totalCells; i++) {
        //genero cento celle
        const cell = createCell();
        
        //inserire il numero nella cella
        const cellNumber = i + 1;
        cell.innerText = cellNumber;
        
        //colorariamo la cella al click e facciamo un log del suo numero e aumentiamo lo score
        cell.addEventListener('click', function() {
            //se è già cliccata ferma tutto
            if(isOver === true || cell.classList.contains('clicked')) return;
            
            //aggiungi la classe cliccata
            cell.classList.add('clicked');
            //logga il numero della cella
            console.log(cellNumber)
            
            //se è presente una bomba...
            if(bombs.includes(cellNumber)) {
                //..fai comparire la bomba e ferma la partita
                cell.classList.add('bomb');
                endGame(score, bombs);
            } else {
                //aumento il punteggio di uno e stampalo in pagina
                score = ++score;
                scoreCounter.innerText = score;    
            }
            //se fai il punteggio massimo ferma la partita
            if(maxScore === score) endGame(score, bombs, true);
        })

        //inserisco le celle nella griglia
        grid.appendChild(cell);
    }
}    

//chiamo la funzione ed eseguo tutto il programma
form.addEventListener('submit', startGame);