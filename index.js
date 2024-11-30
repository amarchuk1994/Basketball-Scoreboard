let scoreHome = 0
let scoreGuest = 0

let scoreHomeDisplay = document.getElementById("score-home")
let scoreGuestDisplay = document.getElementById("score-guest")

function add1() {
    scoreHome += 1;
    scoreHomeDisplay.textContent = scoreHome;
}
function add2() {
    scoreHome += 2
    scoreHomeDisplay.textContent = scoreHome;
}

function add3() {
    scoreHome += 3
    scoreHomeDisplay.textContent = scoreHome;
}

function add1_G() {
    scoreGuest += 1
    scoreGuestDisplay.textContent = scoreGuest
}
function add2_G() {
    scoreGuest += 2
    scoreGuestDisplay.textContent = scoreGuest
}

function add3_G() {
    scoreGuest += 3
    scoreGuestDisplay.textContent = scoreGuest
}


function reset() {
    scoreHome = 0
    scoreGuest = 0
    scoreHomeDisplay.textContent = scoreHome
    scoreGuestDisplay.textContent = scoreGuest
}