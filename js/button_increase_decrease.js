
const bigNumber = document.getElementById('number')

    var count = 0;
    bigNumber.innerHTML = count;

function leftwhenClicked(){
    count--;
    bigNumber.innerHTML = count;
}
function rightwhenClicked(){
    count++;
    document.getElementById('number').innerText = count;
}
function colorChange(){
    if (count < 0){
        bigNumber.style.color = 'red';
    } else if (count > 0){
        bigNumber.style.color = 'green';
    } else{
        bigNumber.style.color = 'lightgray';
    }
}
var wow = document.getElementById('datePlacement')
let date = new Date("02-13-2022");

wow.innerText = (date.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}));



