

//Click function btn to started

document.getElementById('btn-diposit').addEventListener('click', function(){
    //Step number one

 const newDipositAmount = getInputValueById('diposit-amount');

 //step number two

 const priviousDipositAmount = getElementById('diposit-total');

 //step number three

 const blanceTotalInBank = getElementById('total-balance-in-Bank')
 
 //step number four

  if(isNaN(newDipositAmount)){
        alert("ওই পোলা,কত ৳ টাকা নেবি তা সংখ্যা লেখ !!");
        return;
    }

 const newDipositalTotal =  priviousDipositAmount + newDipositAmount;

 setElementValueById('diposit-total', newDipositalTotal);

 //step number five


 const currentTotalBlanceInBank =  blanceTotalInBank + newDipositAmount;

 setElementValueById('total-balance-in-Bank', currentTotalBlanceInBank);

})




