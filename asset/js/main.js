//--------------------DOM's Element--------------------------
const h1El = document.querySelector('h1')
const textInputValue = document.querySelector('input').value
const playButton = document.querySelector('play')
const sendButton = document.querySelector('send')
const numberMax = 5
console.log(`${h1El}valore inserito dall'utente${textInputValue},quantità di numeri da generare${numberMax}$`)
//-----------------------------------------------------------

const arrayNumber = generatedArrayNumberRandomDifferent(numberMax)
console.log(`array di numeri ${arrayNumber}`)


















//-----------------------------------------------------------
function generatedArrayNumberRandomDifferent(numberMax) {
    // genera un array vuoto 
    const array = []
    // ciclo per riempire l'array 
    while (array.length <= numberMax - 1) {
         // crea un numero random
         let randomNumber = Math.floor(Math.random() * numberMax + 1)
            // verifica se è gia presente nell'array per evitare doppioni
            if (!array.includes(randomNumber)) {
            //non è incluso quindi la include
            array.push(randomNumber)
        }
    }
    // restituisce un array pieno di numeri diversi tra loro
    return array
}
//-----------------------------------------------------------
