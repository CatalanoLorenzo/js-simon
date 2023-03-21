//--------------------DOM's Element--------------------------
const h1El = document.querySelector('h1')
const textInput = document.querySelector('input')
const playButton = document.querySelector('.play')
const sendButton = document.querySelector('.send')
const loserbox = document.querySelector('.loser')
const winbox = document.querySelector('.win')
const numberMax = 5
const rangeNumberMax = 100
const timeout = 1 * 1000
//-----------------------------------------------------------
//al click del tasto play
playButton.addEventListener("click", function () {
    //reset contenuto h1 e visibilità sendbutton e textinput
    reset_parametrs(h1El, sendButton, textInput, winbox, loserbox)
    //genero un array vuoto per l'utente
    let answerArray = []
    // inserisco un array di numeri nella variabile
    const arrayNumber = generate_array_number_random_different(numberMax, rangeNumberMax)
    //mostro in console il contenuto dell'array
    console.log(`array di numeri del pc ${arrayNumber}`)
    //funzione posticipata di temeout
    setTimeout(() => {
        //mostro in console la fine della posticipazione
        console.log('fine timer')
        //creazione della variabili contente il numero immesso dall'utente
        const textInputValue = Number(textInput.value)
        //mostra a schermo sendbutton and input e nascondo l'h1
        show_ElementoToDom(sendButton)
        show_ElementoToDom(textInput)
        showoff_ElementoToDom(h1El)
        //lo mostro a console
        console.log(`array di numeri: ${answerArray.length} scelto dall'utente prima ${answerArray}`)
        //aggiungo evento click a send button
        sendButton.addEventListener('click', function () {
            //verifico che :    

            //se la lunghezza dell'array è uguale a numberMax
            if (answerArray.length === numberMax - 1) {
                //mosto in colsole i dati inseriti
                console.log(`numeri da memorizzare ${h1El.textContent} valore inserito dall'utente ${textInputValue}, quantità di numeri da generare ${numberMax}`)
                //confronto i due array
                if (comparison_two_array(answerArray, arrayNumber)) {
                    //mostro messaggi di vittoria e resetto l'array dell'utente
                    win(winbox, answerArray)
                } else {
                    //mostro messaggi di sconfitta e resetto l'array dell'utente
                    lose(loserbox, answerArray)
                }
            }
            //se la lunghezza dell'array è inferiore a numberMax
            else if (answerArray.length < numberMax) {
                push_value_into_array(textInput, answerArray)
            }
        })

    }, timeout);
    //mostro a schermo i numeri dell'array
    inner_numbers_of_array_into_ElementoToDoml(h1El, arrayNumber)
    //mostro in console il contenuto di h1
    console.log(`dentro dell'H1 ${h1El.textContent}`)
});




//------------------------FUNCTION----------------------
/**generate array number random different
 * 
 * @param {number} numberMax 
 * @param {number} rangeNumberMax 
 * @returns 
 */
function generate_array_number_random_different(numberMax, rangeNumberMax) {
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
/**inner numbers of array into ElementoToDoml
 * 
 * @param {HTMLHeadingElement} h1El 
 * @param {array} arrayNumber 
 */
function inner_numbers_of_array_into_ElementoToDoml(ElementoToDom, arrayNumber) {
    //rimuove l'invisibilita del H1
    ElementoToDom.classList.remove('d-none')
    //creo un ciclo che dura quanto tutto sono i numeri dentro l'array
    for (let i = 0; i < arrayNumber.length; i++) {
        //seleziona il numero corispondente del ciclo
        const arraysNumbers = ` ${arrayNumber[i]}`;
        //lo aggiunge all'H1 
        ElementoToDom.innerText += arraysNumbers
    }
}
/**show input and show off ElementoToDom
 * 
 * @param {HTMLHeadingElement} ElementoToDom 
 
 */
function show_ElementoToDom(ElementoToDom) {

    //rimuove l'invisibilita del button send
    ElementoToDom.classList.remove('d-none')

}
function showoff_ElementoToDom(ElementoToDom) {
    ElementoToDom.classList.add('d-none')
}
/**string to array
 * 
 * @param {string} string 
 * @returns 
 */
function string_to_array(string) {
    //converte la stringa in un array
    const splitString = string.split();
    //restituisce l'array
    return splitString;
}
/** comparison two array
 * 
 * @param {array} arrayOne 
 * @param {array} arrayTwo 
 */
function comparison_two_array(arrayOne, arrayTwo) {
    let i = 0
    while (i < arrayOne.length) {
        const numberForComparison = arrayOne[i];
        if (arrayTwo.includes(numberForComparison)) {
            i++
            return true
        } else {
            console.log('hai sbagliato')
            return false
        }
    }
}
/**
 * 
 * @param {HTMLHeadingElement} h1El 
 * @param {Element} sendButton 
 * @param {HTMLInputElement} textInput 
 */
function reset_parametrs(h1El, sendButton, textInput, winbox, loserbox) {
    //reset contenuto h1
    h1El.innerHTML = ''
    //reset visibilità send button
    showoff_ElementoToDom(sendButton)
    //reset visibilità input
    showoff_ElementoToDom(textInput)
    //reset visibilità winbox
    showoff_ElementoToDom(winbox)
    //reset visibilità loserbox
    showoff_ElementoToDom(loserbox)

}
function win(winbox, Array_for_clear) {
    //mostro in console un messaggio di vittoria
    console.log('HAI VINTO');
    //mostra a schermo winbox
    show_ElementoToDom(winbox)
    //svuoto l'array dell'utente
    Array_for_clear = []
    //mostro in console l'array vuoto
    console.log(Array_for_clear);
}

function lose(loserbox, Array_for_clear) {
    //mostro in console un messaggio di sconfitta
    console.log('HAI PERSO')
    //mostra a schermo loserbox
    show_ElementoToDom(loserbox)
    //svuoto l'array dell'utente
    Array_for_clear = []
    //mostro in console l'array vuoto
    console.log(Array_for_clear);

}
function push_value_into_array(Input, array_for_push) {
    //mostro in consloe il valore inserito
    console.log(Number(Input.value))
    //lo inserisco nell'array dell'utente
    array_for_push.push(Number(Input.value))
    //reset input text
    Input.value = ''
    //mostro in console i dati dell'array dell'utente
    console.log(`array di numeri: ${array_for_push.length} scelto dall'utente dopo ${array_for_push}`)
}
//-----------------------------------------------------------
