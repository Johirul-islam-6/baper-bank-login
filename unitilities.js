function backFunction(){
     location.replace('https://johirul574206.github.io/papa-banks-repo/')
}

function getInputValueById(inputId){

    const inputFild = document.getElementById(inputId);
    const inputFildString = inputFild.value;
    const inputFildNumber = parseFloat(inputFildString);
    inputFild.value ='';
    return inputFildNumber;
}


function getElementById(elementId){

    const elementTextValu = document.getElementById(elementId);
    const elementTextValuString = elementTextValu.innerText;
    const elementTextValuNumber = parseFloat(elementTextValuString);
    return elementTextValuNumber;
}

function setElementValueById(elementById, newValue){
    
    const setBytextValue = document.getElementById(elementById);
    setBytextValue.innerText = newValue;
}
