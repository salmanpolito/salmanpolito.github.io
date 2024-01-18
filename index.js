$(document).ready(function () {
    // Set up Google Analytics
    setUpGA4();

    // Initiate animation (achievements)
    showSlides();
});

function setUpGA4() {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-159388383-1');
    var clicky_site_ids = clicky_site_ids || [];
    clicky_site_ids.push(101239814);
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function copyEmailToClipboard() {
    navigator.clipboard.writeText("kobiljon@nsl.inha.ac.kr").then(function () {
        showToast("Email address has been copied to clipboard successfully!");
    }, function () {
        showToast("Unable to copy email address to your clipboard. :-(");
    });
}

function copySkypeIdToClipboard() {
    navigator.clipboard.writeText("live:qobiljon.toshnazarov_1").then(function () {
        showToast("Skype ID has been copied to clipboard successfully!");
    }, function () {
        showToast("Unable to copy Skype ID to your clipboard. :-(");
    });
}

function showToast(message) {
    const toast = document.getElementById("snackbar");
    toast.className = "show";
    toast.innerText = message;
    setTimeout(function () {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}