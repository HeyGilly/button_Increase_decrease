
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


//----- StyleSheet instead of CSS file
var bgCounter = document.getElementById('bg-counter')
bgCounter.style.cssText =
    `
    border: 3px solid #1e1e1e;
    border-radius: 15px;
    width: 30vw;
    position: absolute;
    top: 15%;
    left: 35%;
    background-color: aliceblue;
    box-shadow: 0px 4px 10px #1e1e1e;
    `;
wow.style.cssText=
    `
    text-align: center;
    font-size: 2em;
    padding-top: 2rem;
  `;

var wheading1 = document.getElementById('header1')
wheading1.style.cssText =
    `
    text-align: center;
    font-size: 5em;
    color: #1e1e1e;
    margin-bottom: 5px;
    `;

var smallTexts = document.getElementById('smallText')
smallTexts.style.cssText =
    `
    padding: 0;
    margin: 0;
    color: #1e1e1e;
    letter-spacing: 2px;
    font-size: 1em;
    text-align: center;
    `;
bigNumber.style.cssText =
    `    
    font-size: 20em;
    text-align: center;
    color: #bcbcbc;
    margin:2rem;

    `;
