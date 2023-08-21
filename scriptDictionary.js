let wordList = [], target, value;

function displayMessage(target,value) {
    target.innerText = value;
    setTimeout( () => {target.innerText = ""; }, 2000);
}

function addWord() {
    let word = document.getElementById("wordInput");
    let textMessage = document.getElementById("message-input");
    wordList.splice(0, 0, word.value);
    displayMessage(textMessage, word.value + " successfully added!");
    word.value = "";
}

function searchWord() {
    let entry = document.getElementById("search");
    let textOutput = document.getElementById("message-search");
    let find = wordList.indexOf(entry.value); 
    find = find === -1 ?  displayMessage(textOutput,"No match found!") : displayMessage(textOutput,"Dictionary contains the word " + entry.value + "!");
    entry.value = "";
}
