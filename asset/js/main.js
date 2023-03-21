//--------------------DOM's Element--------------------------
const h1El = document.querySelector('h1')
const textInputValue = document.querySelector('input').value
const playButton = document.querySelector('play')
const sendButton = document.querySelector('send')
const numberMax = 5
const rangeNumberMax = 100
console.log(`${h1El}valore inserito dall'utente${textInputValue},quantità di numeri da generare${numberMax}$`)
//-----------------------------------------------------------

const arrayNumber = generatedArrayNumberRandomDifferent(numberMax,rangeNumberMax)
console.log(`array di numeri ${arrayNumber}`)
innerNumbersIntoH1El(h1El,arrayNumber)
console.log(`denrto dell'H1 ${h1El.textContent}`)
















//------------------------FUNCTION----------------------
function generatedArrayNumberRandomDifferent(numberMax,rangeNumberMax) {
    // genera un array vuoto 
    const array = []
    // ciclo per riempire l'array 
    while (array.length <= numberMax - 1) {
        // crea un numero random tra 0 e rangenumberMax
        let randomNumber = Math.floor(Math.random() * rangeNumberMax + 1)
        // verifica se è gia presente nell'array per evitare doppioni
        if (!array.includes(randomNumber)) {
            //non è incluso quindi la include
            array.push(randomNumber)
        }
    }
    // restituisce un array pieno di numeri diversi tra loro
    return array
}
function innerNumbersIntoH1El(h1El,arrayNumber) {
    //rimuove l'invisibilita del H1
    h1El.classList.remove('d-none')
    //creo un ciclo che dura quanto tutto sono i numeri dentro l'array
    for (let i = 0; i < arrayNumber.length; i++) {
        //seleziona il numero corispondente del ciclo
        const arraysNumber = ` ${arrayNumber[i]}`;
        //lo aggiunge all'H1 
        h1El.innerText += arraysNumber
    }
}
//-----------------------------------------------------------
