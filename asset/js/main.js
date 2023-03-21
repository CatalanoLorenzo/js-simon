//--------------------DOM's Element--------------------------
const h1El = document.querySelector('h1')
const textInput = document.querySelector('input')
const textInputValue = textInput.value
const playButton = document.querySelector('.play')
const sendButton = document.querySelector('.send')
const numberMax = 5
const rangeNumberMax = 100
const timeout = 30 * 1000
//-----------------------------------------------------------
playButton.addEventListener("click", function(){
    setTimeout(() => {
        console.log('fine timer')
        show_input_and_show_off_h1El (h1El,sendButton,textInput)
    }, timeout);
    console.log(`${h1El}valore inserito dall'utente${textInputValue},quantità di numeri da generare${numberMax}$`)    
    const arrayNumber = generate_array_number_random_different(numberMax,rangeNumberMax)
    console.log(`array di numeri ${arrayNumber}`)
    inner_numbers_into_h1El(h1El,arrayNumber)
    console.log(`dentro dell'H1 ${h1El.textContent}`)

});
















//------------------------FUNCTION----------------------
function generate_array_number_random_different(numberMax,rangeNumberMax) {
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
function inner_numbers_into_h1El(h1El,arrayNumber) {
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

function show_input_and_show_off_h1El(h1El,sendButton,textInput){
    //aggiunge l'invisibilita del H1
    h1El.classList.add('d-none')
    //rimuove l'invisibilita del input e del button send
    sendButton.classList.remove('d-none')
    textInput.classList.remove('d-none')
}
//-----------------------------------------------------------
