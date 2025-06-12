// Set the date we're counting down to
const countDownDate = new Date("Nov 20, 2025 20:30:00").getTime();
const countdown = document.getElementById("countdown");
const pTag = document.getElementsByTagName("p")
const footer = document.getElementsByTagName("footer");
const img = document.getElementsByTagName("img");

//Initialize colors and logo
document.body.style.backgroundColor === "rgb(62, 81, 100)";
pTag[0].style.color = "#FFFFFF";
pTag[1].style.color = "#FFFFFF";
footer[0].style.backgroundColor = "#FFFFFF";
img[0].src = "images/logo white.svg"
img[0].id = "shake";

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