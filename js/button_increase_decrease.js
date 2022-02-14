(function(){

const lButton = document.getElementById('leftButton')
const rButton = document.getElementById('rightButton')
const bigNumber = document.getElementById('number')

    var count = 0;
    bigNumber.innerHTML = count;





    if (count < 0){
        bigNumber.style.color = 'red';
    } else if (count > 0){
        bigNumber.style.color = 'green';
    } else{
        bigNumber.style.color = 'lightgray';
    }

})()