let bulb = document.getElementById("bulb");
let button = document.getElementById("toggleBtn");

let isOn = false;

function toggleBulb() {

    if (isOn) {
        bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
        button.textContent = "Turn ON";
        isOn = false;
    }
    else {
        bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
        button.textContent = "Turn OFF";
        isOn = true;
    }

}

button.addEventListener("click", toggleBulb);
bulb.addEventListener("click", toggleBulb);