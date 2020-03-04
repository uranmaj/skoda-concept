function sidebarAnimation() {
    gsap.from(".side-bar", { x:-1500, duration: 0.4})
    gsap.from(".models", { opacity: 0, duration: 0.3, delay:0.4})
}

$(function () { 
    sidebarAnimation();
})

function scala() {
    sidebarAnimation();

    document.querySelector('.models').style.backgroundImage = "url(/images/scala.jpg)";
    document.getElementById("car-name").textContent = "ŠKODA SCALA";
    document.getElementById("car-description").textContent = "A sleek, compact, family car with plenty of space";
}

function fabia() {
    sidebarAnimation();

    document.querySelector('.models').style.backgroundImage = "url(/images/fabia.jpg)";
    document.getElementById("car-name").textContent = "ŠKODA FABIA";
    document.getElementById("car-description").textContent = "A fresh, urban small car";
}

function citigo() {
    sidebarAnimation();
    
    document.querySelector('.models').style.backgroundImage = "url(/images/citygoiv.jpg)";
    document.getElementById("car-name").textContent = "ŠKODA CITIGO iV";
    document.getElementById("car-description").textContent = "A clever and comfortable all-electric urban car";
}

function citigo() {
    sidebarAnimation();
    
    document.querySelector('.models').style.backgroundImage = "url(../images/citygoiv.jpg)";
    document.getElementById("car-name").textContent = "ŠKODA CITIGO iV";
    document.getElementById("car-description").textContent = "A clever and comfortable all-electric urban car";
}

function octavia() {
    sidebarAnimation();
    
    document.querySelector('.models').style.backgroundImage = "url(../images/octavia3.jpg)";
    document.getElementById("car-name").textContent = "ŠKODA OCTAVIA";
    document.getElementById("car-description").textContent = "Our bestselling model perfect for business and a large family";
}

function superb() {
    sidebarAnimation();
    
    document.querySelector('.models').style.backgroundImage = "url(../images/superb.jpg)";
    document.getElementById("car-name").textContent = "ŠKODA SUPERB";
    document.getElementById("car-description").textContent = "A spacious executive car that thinks of everything";
}

function kamiq() {
    sidebarAnimation();
    
    document.querySelector('.models').style.backgroundImage = "url(../images/kamiq.jpg)";
    document.getElementById("car-name").textContent = "ŠKODA KAMIQ";
    document.getElementById("car-description").textContent = "A robust city crossover with the latest technology";
}

function karoq() {
    sidebarAnimation();
    
    document.querySelector('.models').style.backgroundImage = "url(../images/karoq.jpg)";
    document.getElementById("car-name").textContent = "ŠKODA KAROQ";
    document.getElementById("car-description").textContent = "A compact SUV with dynamic character";
}

function kodiaq() {
    sidebarAnimation();
    
    document.querySelector('.models').style.backgroundImage = "url(../images/kodiaq.jpg)";
    document.getElementById("car-name").textContent = "ŠKODA KODIAQ";
    document.getElementById("car-description").textContent = "A versetile SUV for your business and familiy";
}
