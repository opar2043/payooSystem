document.getElementById('add-btn').addEventListener('click',function(event){
      event.preventDefault();


      let moneyText = document.getElementById('money-text').innerText;
      let moneyNumberText = parseFloat(moneyText);
      console.log(moneyText);

     

      let pinNumber = document.getElementById('pinNumber').value;


      if(pinNumber === '1234'){
          let addBalance =parseFloat(document.getElementById('money-number').value) 

          let newBalance = addBalance + moneyNumberText;

          document.getElementById('money-text').innerText = newBalance ;

          

      }else{
        alert('wrong pin number')
      }


      document.getElementById('money-number').value = '';
      document.getElementById('pinNumber').value = '';

})

document.getElementById('cash-out-btn').addEventListener('click',function(event){

     event.preventDefault();

     let myPinNumber = document.getElementById('myPinNumber').value;
     console.log(myPinNumber);

     let moneyText = document.getElementById('money-text').innerText;
     let moneyNumber = parseFloat(moneyText);
     console.log(moneyNumber);

     if(myPinNumber === '1234'){
      let myBalance = document.getElementById('myBalance').value ;
      let myBalanceNumber = parseFloat(myBalance);

      if(moneyNumber < myBalanceNumber){       
        alert('Do Not Have Enough Balance')
      }else{
        let newTaka = moneyNumber - myBalanceNumber ;
        document.getElementById('money-text').innerText = newTaka;
      }
     } else{
      alert('Wrong Passward! Try Again')
     }

     document.getElementById('myBalance').value = '';
     document.getElementById('myPinNumber').value = '';
})


document.getElementById('cashOutbtn').addEventListener('click',function(){
   document.getElementById('addFrom').classList.add('hidden');
   document.getElementById('cashOutFrom').classList.remove('hidden');
})

document.getElementById('addMoneyBtn').addEventListener('click',function(){
   document.getElementById('cashOutFrom').classList.add('hidden');
   document.getElementById('addFrom').classList.remove('hidden');
})
