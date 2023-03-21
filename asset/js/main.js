//--------------------DOM's Element--------------------------
const h1El = document.querySelector('h1')
const textInput = document.querySelector('input')
const playButton = document.querySelector('.play')
const sendButton = document.querySelector('.send')
const numberMax = 5
const rangeNumberMax = 100
const timeout = 1 * 1000
//-----------------------------------------------------------
playButton.addEventListener("click", function(){
    setTimeout(() => {

        console.log('fine timer')
        show_input_and_show_off_h1El (h1El,sendButton,textInput)
        
        sendButton.addEventListener('click',function(){
            const textInputValue = textInput.value
            console.log(textInputValue)
            const answerArray = string_to_array(textInputValue)
            console.log(answerArray)
            comparison_two_array(answerArray,arrayNumber)
            console.log(`numeri da memorizzare ${h1El.textContent} valore inserito dall'utente ${textInputValue}, quantità di numeri da generare ${numberMax}`)    

        })
    
    }, timeout);
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
    //rimuove l'invisibilita del button send
    sendButton.classList.remove('d-none')
    //rimuove l'invisibilita del input 
    textInput.classList.remove('d-none')
}

function string_to_array(string) {
    //converte la stringa in un array
    const splitString = string.split();
    //restituisce l'array
    return splitString; 
}

function comparison_two_array(arrayOne,arrayTwo) {
    let i = 0
    while (i < arrayOne.length) {
        const numberForComparison = arrayOne[i];
        if (arrayTwo.includes(numberForComparison)) {
            i++
        }else{
            console.log('hai sbagliato')
            break
        }
    }
}
//-----------------------------------------------------------
