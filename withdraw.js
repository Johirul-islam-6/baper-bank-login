
document.getElementById('btn-withdrow').addEventListener('click', function(){
 
    //step number 01

    const withdrowAmountFild = getInputValueById('withDrowFild');

    //step number 02

    const withdrowTotalBlance = getElementById('total-Withdrow');

    //step number 03

 

    //step number 04

    const currentTotalBlanceInBank = getElementById('total-balance-in-Bank');

      // step number 05 alert function
      
    const currentTotalBlankBlances = currentTotalBlanceInBank - withdrowAmountFild;


         if(withdrowAmountFild > currentTotalBlanceInBank ){
      alert("ওই পোলা, তোর বাপের ব্যাংকে তো ৳ টাকা নাই !!!");
      return;
    }else if(isNaN(withdrowAmountFild)){
      alert('"ওই পোলা,কত ৳ টাকা নেবি তা সংখ্যা লেখ !!"');
      return;
    }

    const totalWithdrowAmountIs = withdrowTotalBlance + withdrowAmountFild ;

    setElementValueById('total-Withdrow', totalWithdrowAmountIs);
    
    setElementValueById('total-balance-in-Bank', currentTotalBlankBlances);


})
