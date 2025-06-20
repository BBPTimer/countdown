// Translate date/time to JS-friendly format
function setCountDownDate() {
    countDownDate = new Date(`${graduationDate.value} ${graduationTime.value}`).getTime();
}

function setColorScheme(bgColor) {
    if(bgColor === "Blue" || bgColor === "Alt") {
        document.body.style.backgroundColor = "rgb(62, 81, 100)";
        pTag[0].style.color = "#FFFFFF";
        pTag[1].style.color = "#FFFFFF";
        img[0].src = "images/logo white.svg"
    }
    if(bgColor === "White") {
        document.body.style.backgroundColor = "#FFFFFF";
        pTag[0].style.color = "rgb(62, 81, 100)";
        pTag[1].style.color = "rgb(62, 81, 100)";
        img[0].src = "images/logo blue.svg";
    }
}

// Get HTML elements
const img = document.getElementsByTagName("img");
const countdownTag = document.getElementById("countdown");
const pTag = document.getElementsByTagName("p")
const optionsButton = document.getElementById("options-button");
const options = document.getElementById("options");
const graduationDate = document.getElementById("graduation-date");
const graduationTime = document.getElementById("graduation-time");
const reset = document.getElementById("reset");
const bgColorSelect = document.getElementById("bg-color");
const logoSelect = document.getElementById("logo-select");
const footer = document.getElementsByTagName("footer");

// Get stored date
graduationDate.value = localStorage.getItem("graduationDate") || "2025-11-20";

// Get stored time
graduationTime.value = localStorage.getItem("graduationTime") || "20:30";

// Initialize countdown date
let countDownDate = null;
setCountDownDate();

// When date changes, update countDownDate and save date to local storage
graduationDate.addEventListener("change", () => {
    setCountDownDate();
    localStorage.setItem("graduationDate", graduationDate.value);
});

// When time changes, update countDownDate and save date to local storage
graduationTime.addEventListener("change", () => {
    setCountDownDate();
    localStorage.setItem("graduationTime", graduationTime.value);
});

// When the user clicks the reset button, remove local storage items and reload the page
reset.addEventListener("click", () => {
    if(confirm("Are you sure you want to reset?")) {
        localStorage.removeItem("graduationDate");
        localStorage.removeItem("graduationTime");
        location.reload();
    }
});

// Options button event listener
optionsButton.addEventListener("click", () => {
    options.style.display === "block" ? options.style.display = "none" : options.style.display = "block";
})

// Initialize background color
let initialBgColor = localStorage.getItem("bgColor") || "Alt";
document.getElementById(initialBgColor).selected = true;
setColorScheme(initialBgColor);

bgColorSelect.addEventListener("change", () => {
    setColorScheme(bgColorSelect.value);
    localStorage.setItem("bgColor", bgColorSelect.value);
});

// Initialize animation
let initialLogo = localStorage.getItem("logo") || "Animated";
document.getElementById(initialLogo).selected = true;

logoSelect.addEventListener("change", () => {
    localStorage.setItem("logo", logoSelect.value);
});

// https://www.w3schools.com/howto/howto_js_countdown.asp
function countdownFunction() {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    countdownTag.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    distance < 0 && (countdownTag.innerHTML = "We did it!");

    //Toggle logo animation
    logoSelect.value === "Animated" ? (img[0].id === "shake" ? img[0].id = "slide-up" : img[0].id = "shake") : img[0].removeAttribute("id");

    //Toggle page colors
    bgColorSelect.value === "Alt" && (document.body.style.backgroundColor === "rgb(62, 81, 100)" ? setColorScheme("White") : setColorScheme("Blue"));

}

countdownFunction();

// Update the count down every 1 second
setInterval(countdownFunction, 1000);