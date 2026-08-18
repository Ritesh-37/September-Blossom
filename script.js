/* =====================================================
   BIRTHDAY VAULT - FIRST PAGE ONLY
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

    updatePasswordDisplay();

}


/* =====================================================
   REMOVE LAST NUMBER
===================================================== */

function removeDigit() {

    enteredPassword =
        enteredPassword.slice(0, -1);

    updatePasswordDisplay();

}


/* =====================================================
   CLEAR PASSWORD
===================================================== */

function clearPassword() {

    enteredPassword = "";

    updatePasswordDisplay();

    document.getElementById(
        "password-message"
    ).textContent = "";

}


/* =====================================================
   UPDATE PASSWORD DISPLAY
===================================================== */

function updatePasswordDisplay() {

    const display =
        document.getElementById(
            "password-dots"
        );


    if (enteredPassword.length === 0) {

        display.textContent =
            "Enter Password";

        display.style.letterSpacing =
            "0px";

        return;
    }


    display.textContent =
        "• ".repeat(
            enteredPassword.length
        );


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
            "✓ ACCESS GRANTED";


        message.style.color =
            "#65ffb0";


        playWelcomeVideo();

    }

    else {

        message.textContent =
            "✕ ACCESS DENIED";


        message.style.color =
            "#ff547f";


        showMeme();


        /*
            Clear the password after
            wrong attempt.
        */

        setTimeout(() => {

            clearPassword();

        }, 300);

    }

}


/* =====================================================
   KEYBOARD SUPPORT
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        /*
            Number keys
        */

        if (
            event.key >= "0" &&
            event.key <= "9"
        ) {

            addDigit(event.key);

        }


        /*
            Backspace
        */

        if (
            event.key === "Backspace"
        ) {

            removeDigit();

        }


        /*
            Escape
        */

        if (
            event.key === "Escape"
        ) {

            closeMeme();

            closeWelcomeVideo();

        }


        /*
            Enter
        */

        if (
            event.key === "Enter"
        ) {

            checkPassword();

        }

    }
);


/* =====================================================
   WRONG PASSWORD MEME
===================================================== */

function showMeme() {

    document
        .getElementById("meme-popup")
        .classList.add("show");

}


/* =====================================================
   CLOSE MEME
===================================================== */

function closeMeme() {

    document
        .getElementById("meme-popup")
        .classList.remove("show");

}


/* =====================================================
   WELCOME VIDEO
===================================================== */

function playWelcomeVideo() {

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
        Try to start video with sound.
        Because this function is triggered
        by a button click, browsers normally
        allow it.
    */

    video.currentTime = 0;

    video.muted = false;


    video.play()
        .catch(() => {

            /*
                If browser blocks autoplay,
                the video controls are still
                available.
            */

            console.log(
                "Video autoplay was blocked."
            );

        });

}


/* =====================================================
   CLOSE WELCOME VIDEO
===================================================== */

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
