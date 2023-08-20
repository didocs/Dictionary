let wordList = [];

function addWord() {
    let word = document.getElementById("wordInput");
    let textMessage = document.getElementById("message-input");
    wordList.splice(0, 0, word.value);
    textMessage.innerText =  word.value + " successfully added!";
    word.value = "";
   	setTimeout(() => {textMessage.innerText = ""; }, 2000);
}


function searchWord() {
    let entry = document.getElementById("search");
    let textOutput = document.getElementById("message-search");
    let find = wordList.indexOf(entry.value); 
    find = find === -1 ?  textOutput.innerText = "No match found!" :  textOutput.innerHTML = "Dictionary contains the word " + entry.value + "!";
    entry.value = "";
   	setTimeout( () => {textOutput.innerText = ""; }, 2000);
}



