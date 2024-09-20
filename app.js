

document.getElementById('form-btn').addEventListener('click', function(e){
     e.preventDefault()


    let mobileNumber = document.getElementById('mobileNumber').value;
    let pinNumber = document.getElementById('pinNumber').value;

    console.log(mobileNumber,pinNumber);

    if(mobileNumber === '018' && pinNumber === '1234'){
         window.location.href= './home.html';
    }
    else{
        alert('wrong passward.Try again!')
    }
})