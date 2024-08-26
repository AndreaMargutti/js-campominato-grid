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

//funzione per creare le bombe casualmente
function getRandomNumber (totalBombs, totalCells) {
    //creo l'array di bombe
    const bombs = [];
    //generiamo le bombe
    while(bombs.length < totalBombs){
        const randomNumber = Math.floor(Math.random() * totalCells + 1);
        if(!bombs.includes(randomNumber)) bombs.push(randomNumber);
    }
    
    //tiro fuori l'array di bombe
    return bombs;
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
    const totalBombs = 16;
            
    //metto la classe corrispondente alla girglia
    //metto la classe giusta alla griglia
    grid.classList.remove('hard', 'normal', 'easy');
    grid.classList.add(level);
        
    //svuoto la griglia
    grid.innerHTML = '';
    //cambia il bottone in 'ricomincia'
    playBtn.innerText = 'ricomincia'

    //genero le bombe
    const bombs = getRandomNumber(totalBombs, totalCells);
    console.log(bombs);

    for(let i = 0; i < totalCells; i++) {
        //genero cento celle
        const cell = createCell();
        
        //inserire il numero nella cella
        const cellNumber = i + 1;
        cell.innerText = cellNumber;
        
        //colorariamo la cella al click e facciamo un log del suo numero e aumentiamo lo score
        cell.addEventListener('click', function() {
            //se è già cliccata ferma tutto
            if(cell.classList.contains('clicked')) return;

            //aggiungi la classe cliccata
            cell.classList.add('clicked');
            //logga il numero della cella
            console.log(cellNumber)
            
            //se è presente una bomba...
            if(bombs.includes(cellNumber)) {
                cell.classList.add('bomb');
                console.log(`Hai Perso! il tuo punteggio è di ${score}`);
            } else {
                //aumento il punteggio di uno e stampalo in pagina
                score = ++score;
                scoreCounter.innerText = score;    
            }

        })
    
        // # Fase di output
        //inserisco le celle nella griglia
        grid.appendChild(cell);
    }
}    

//chiamo la funzione ed eseguo tutto il programma
form.addEventListener('submit', startGame);