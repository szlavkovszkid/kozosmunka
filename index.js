//Késleltetett Popup doboz, mely kattintásra eltűnik
setTimeout(function() {
    var popupOverlay = document.querySelector('.popup-overlay');

    popupOverlay.classList.add('active');

    popupOverlay.addEventListener('click', function() {
        popupOverlay.classList.remove('active');
    });

    var popup = document.querySelector('.popup');

    popup.addEventListener('click', function(event) {
        event.stopPropagation();
    });
}, 1000);

//Hamburger-menü
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

//Csevegés gomb
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  //slider 
var counter = 1;
let intervalID;
let intervalFunction = () => setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;

  if (counter > 5) {
    counter = 1;
  }
}, 3000);

//ha ráhúzod az egeret megáll a slider
function stopShow() {
  clearInterval(intervalID);
}

//ha elhúzod a kurzort, tovább megy a slider
function runShow() {
  intervalID = intervalFunction();
}

//ha kattintasz egy radio gombra,onnantól fut tovább majd a slider
function updateCounter(newValue) {
  counter = newValue;
}