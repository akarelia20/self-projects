

function bulbonoff(bulb, button){
    if (bulb.src.match("https://www.w3schools.com/js/pic_bulboff.gif")) {
        bulb.src= "https://www.w3schools.com/js/pic_bulbon.gif";
        button.innerText="Switch off";
        
    } else {
        bulb.src= "https://www.w3schools.com/js/pic_bulboff.gif";
        button.innerText= "Switch on";
    }
}