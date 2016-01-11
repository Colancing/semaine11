/**
 * Created by Emmanuelle on 11/01/2016.
 */
var goodnumber = getRandomIntInclusive(0, 100);
var input = document.getElementById("choice");
var submit = document.getElementById("submit");
var div = document.getElementById("answer");
var div2 = document.getElementById("answer2");
var divreplay = document.getElementById("divreplay");
divreplay.style.visibility="hidden";
var replayyes = document.getElementById("replayyes");
var nbessai=1;


function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function compare() {

    var choice = input.value;
    if (goodnumber > choice) {
        div.innerHTML = "Mon nombre est plus grand";
        div2.innerHTML= "Coup numéro :" + nbessai;
    }
    else if (goodnumber < choice) {
        div.innerHTML= "Mon nombre est plus petit";
        div2.innerHTML= "Coup numéro : " + nbessai;

    }
    else {
        div.innerHTML = "Bravo";
        div2.innerHTML= "Tu as réussi en  " + nbessai + ' coups.';
        divreplay.style.visibility="visible";

    }
    nbessai++;
}
function replay() {
    reset();
    div2.innerHTML= "";
    nbessai=1;
    divreplay.style.visibility="hidden";
}
function reset() {
    div.innerHTML = "";
    input.value="" ;
}
submit.addEventListener("click", compare, false);
input.addEventListener("click", reset, false);
replayyes.addEventListener("click", replay, false);