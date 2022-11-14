const div = document.querySelector(".container");

div.innerHTML = `<form><input type="text"> <button class="add">Inserisci articolo</button> <button class="remove">Rimuovi ultimo articolo</button></form> <ul><strong>LISTA DELLA SPESA</strong></ul>`;

const input = document.querySelector("input");

const buttonAdd = document.querySelector(".add");

const buttonRemove = document.querySelector(".remove");

const list = document.querySelector("ul");

let array = ["pasta", "pane", "biscotti", "latte"];

// for (let n = 0; n < array.length; n++) {
//     list.innerHTML += `<li>${array[n]}</li>`;
// }

let n = 0;
while (n < array.length) {
    list.innerHTML += `<li>${array[n]}</li>`;
    n++;
}

buttonAdd.addEventListener('click',
    function(event) {
        event.preventDefault();

        if (isNaN(input.value)) {
            // list.innerHTML += `<li>${input.value}</li>`;
            // la stringa sopra era il metodo più semplice per aggiungere direttamente l'elemento nuovo alla lista ma ho preferito aggiungere prima l'elemento all'array, magari in ottica futura potrebbe essere utile
            array.push(input.value);

            list.innerHTML += `<li>${array[array.length - 1]}</li>`;
            
        } else {
            alert("Non è valido!");
        } 
        

        if (input.value !== "") {
            input.value = "";
        }        
        console.log(array);
    }
)

buttonRemove.addEventListener('click', 
    function(event) {
        event.preventDefault();

        const elementToRemove = document.querySelector("li:last-child");

        elementToRemove.remove(); 

        array.pop();

        console.log(array);
    }
)
