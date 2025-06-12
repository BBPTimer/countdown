// Translate date/time to JS-friendly format
function setCountDownDate() {
    countDownDate = new Date(`${graduationDate.value} ${graduationTime.value}`).getTime();
}

// Initialize countDownDate variable
let countDownDate = null;

// Get HTML elements
const img = document.getElementsByTagName("img");
const countdown = document.getElementById("countdown");
const pTag = document.getElementsByTagName("p")
const graduationDate = document.getElementById("graduation-date");
const graduationTime = document.getElementById("graduation-time");
const reset = document.getElementById("reset");
const footer = document.getElementsByTagName("footer");

// Get stored date
if (localStorage.getItem("graduationDate") === null) {
    graduationDate.value = "2025-11-20";
} else {
    graduationDate.value = localStorage.getItem("graduationDate");
}

// Get stored time
if (localStorage.getItem("graduationTime") === null) {
    graduationTime.value = "20:30";
} else {
    graduationTime.value = localStorage.getItem("graduationTime");
}

// Set the date we're counting down to
setCountDownDate();

// When date changes, update countDownDate and save date to local storage
graduationDate.addEventListener("change", () => {
    setCountDownDate()
    localStorage.setItem("graduationDate", graduationDate.value);
});

// When time changes, update countDownDate and save date to local storage
graduationTime.addEventListener("change", () => {
    setCountDownDate()
    localStorage.setItem("graduationTime", graduationTime.value);
});

// When the user clicks the reset button, remove local storage items and reload the page
reset.addEventListener("click", () => {
    localStorage.removeItem("graduationDate");
    localStorage.removeItem("graduationTime");
    location.reload();
});

// Initial styling
document.body.style.backgroundColor === "rgb(62, 81, 100)";
pTag[0].style.color = "#FFFFFF";
pTag[1].style.color = "#FFFFFF";
footer[0].style.backgroundColor = "#FFFFFF";
img[0].src = "images/logo white.svg"
img[0].id = "shake";

// https://www.w3schools.com/howto/howto_js_countdown.asp

// Update the count down every 1 second
let x = setInterval(function() {
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
    countdown.innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        countdown.innerHTML = "We did it!";
    }

    //Toggle logo animation
    if (img[0].id === "shake") {
        img[0].id = "slide-up";
    } else {
        img[0].id = "shake";
    }

    //Toggle page colors
    if (document.body.style.backgroundColor === "rgb(62, 81, 100)") {
        document.body.style.backgroundColor = "#FFFFFF";
        pTag[0].style.color = "rgb(62, 81, 100)";
        pTag[1].style.color = "rgb(62, 81, 100)";
        img[0].src = "images/logo blue.svg";
    } else {
    document.body.style.backgroundColor = "rgb(62, 81, 100)";
        pTag[0].style.color = "#FFFFFF";
        pTag[1].style.color = "#FFFFFF";
        footer[0].style.backgroundColor = "#FFFFFF";
        img[0].src = "images/logo white.svg"
    }
}, 1000);