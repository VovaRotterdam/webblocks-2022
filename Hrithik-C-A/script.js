function trafficLights(){
let green = document.getElementById('green');
let red = document.getElementById('red');
let yellow = document.getElementById('yellow');

    green.style.opacity = 1;
    setTimeout(function yellowLight(){
        green.style.opacity=.3;
        red.style.opacity=.3;
        yellow.style.opacity=1;
    },5000);
    setTimeout(function redLight(){
        green.style.opacity=.3;
        red.style.opacity=1;
        yellow.style.opacity=.3;
    },7000);
    setTimeout(function greenLight(){
        green.style.opacity=1;
        red.style.opacity=.3;
        yellow.style.opacity=.3;
    },12000);
}

let timer = setInterval(function(){trafficLights();},12000);
trafficLights();