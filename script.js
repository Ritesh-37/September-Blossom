/* =====================================================
   BIRTHDAY VAULT - PAGE 1
===================================================== */


/* =====================================================
   PASSWORD
===================================================== */

const correctPassword = "03092005";

let enteredPassword = "";


/* =====================================================
   ADD NUMBER
===================================================== */

function addDigit(number) {

    if (enteredPassword.length >= 8) {
        return;
    }

    enteredPassword += number;

    updateDisplay();

}


/* =====================================================
   REMOVE NUMBER
===================================================== */

function removeDigit() {

    enteredPassword =
        enteredPassword.slice(0, -1);

    updateDisplay();

}


/* =====================================================
   CLEAR
===================================================== */

function clearPassword() {

    enteredPassword = "";

    updateDisplay();

    document.getElementById(
        "password-message"
    ).textContent = "";

}


/* =====================================================
   UPDATE DISPLAY
===================================================== */

function updateDisplay() {

    const display =
        document.getElementById(
            "password-dots"
        );


    if (enteredPassword.length === 0) {

        display.textContent =
            "ENTER PASSWORD";

        display.style.color =
            "#777";

        display.style.letterSpacing =
            "5px";

        return;

    }


    display.textContent =
        "• ".repeat(
            enteredPassword.length
        );


    display.style.color =
        "#ffffff";

    display.style.letterSpacing =
        "5px";

}


/* =====================================================
   CHECK PASSWORD
===================================================== */

function checkPassword() {

    const message =
        document.getElementById(
            "password-message"
        );


    if (enteredPassword === correctPassword) {

        message.textContent =
            "ACCESS GRANTED";


        message.style.color =
            "#63ffb0";


        openWelcomeVideo();

    }

    else {

        message.textContent =
            "ACCESS DENIED";


        message.style.color =
            "#ff4d80";


        openMeme();

    }

}


/* =====================================================
   KEYBOARD INPUT
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {


        /* Number keys */

        if (
            event.key >= "0" &&
            event.key <= "9"
        ) {

            addDigit(event.key);

        }


        /* Backspace */

        else if (
            event.key === "Backspace"
        ) {

            removeDigit();

        }


        /* Enter */

        else if (
            event.key === "Enter"
        ) {

            checkPassword();

        }


        /* Escape */

        else if (
            event.key === "Escape"
        ) {

            closeMeme();

            closeWelcomeVideo();

        }

    }
);


/* =====================================================
   MEME
===================================================== */

function openMeme() {

    document
        .getElementById("meme-popup")
        .classList.add("show");

}


function closeMeme() {

    document
        .getElementById("meme-popup")
        .classList.remove("show");

}


/* =====================================================
   WELCOME VIDEO
===================================================== */

function openWelcomeVideo() {

    const popup =
        document.getElementById(
            "welcome-popup"
        );


    const video =
        document.getElementById(
            "welcome-video"
        );


    popup.classList.add("show");


    /*
        Because this function is called
        after pressing ENTER, the browser
        should permit playback with sound.
    */

    video.currentTime = 0;

    video.muted = false;


    video.play().catch(
        function() {

            console.log(
                "Video autoplay was blocked."
            );

        }
    );

}


function closeWelcomeVideo() {

    const popup =
        document.getElementById(
            "welcome-popup"
        );


    const video =
        document.getElementById(
            "welcome-video"
        );


    popup.classList.remove("show");

    video.pause();

}
