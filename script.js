/* =========================================================
   BIRTHDAY WEBSITE JAVASCRIPT

   This file controls:

   1. Password
   2. Wrong password popup
   3. Correct password popup
   4. Page 2
   5. Birthday music
   6. Door sound
   7. Duck sound
   8. Page 3
========================================================= */



/* =========================================================
   PASSWORD
========================================================= */


/*
   THIS IS THE PASSWORD.

   You can change it later.

   Current password:
   0309
*/

const correctPassword = "0309";


/*
   This variable stores
   what the visitor has typed.
*/

let enteredPassword = "";



/* =========================================================
   PASSWORD BUTTON
========================================================= */

function pressKey(number) {


    /*
       Don't allow more than
       8 numbers.
    */

    if (enteredPassword.length >= 8) {

        return;

    }


    /*
       Add the clicked number.
    */

    enteredPassword =
        enteredPassword + number;


    updatePasswordDisplay();

}



/* =========================================================
   PASSWORD DISPLAY
========================================================= */

function updatePasswordDisplay() {


    const display =
        document.getElementById(
            "passwordDisplay"
        );


    /*
       Create one dot
       for every number.
    */

    display.textContent =
        "•".repeat(
            enteredPassword.length
        );


    /*
       Add white background
       when something is typed.
    */

    if (enteredPassword.length > 0) {

        display.classList.add("filled");

    } else {

        display.classList.remove("filled");

    }

}



/* =========================================================
   DELETE PASSWORD NUMBER
========================================================= */

function deleteKey() {


    enteredPassword =
        enteredPassword.slice(
            0,
            -1
        );


    updatePasswordDisplay();

}



/* =========================================================
   CHECK PASSWORD
========================================================= */

function checkPassword() {


    /*
       Check whether
       entered password is correct.
    */

    if (
        enteredPassword ===
        correctPassword
    ) {


        /*
           Correct password.

           Show welcome popup.
        */

        document
            .getElementById("welcomePopup")
            .classList.add("show");


    } else {


        /*
           Wrong password.

           Show cute popup.
        */

        document
            .getElementById("wrongPopup")
            .classList.add("show");

    }

}



/* =========================================================
   CLOSE WRONG PASSWORD POPUP
========================================================= */

function closeWrongPopup() {


    document
        .getElementById("wrongPopup")
        .classList.remove("show");


    /*
       Clear password.
    */

    enteredPassword = "";


    updatePasswordDisplay();

}



/* =========================================================
   ENTER BIRTHDAY PAGE
========================================================= */

function enterBirthdayPage() {


    /*
       Close welcome popup.
    */

    document
        .getElementById("welcomePopup")
        .classList.remove("show");


    /*
       Hide Page 1.
    */

    document
        .getElementById("page1")
        .style.display = "none";


    /*
       Show Page 2.
    */

    document
        .getElementById("page2")
        .style.display = "block";


    /*
       Start birthday music.
    */

    startBirthdayMusic();

}



/* =========================================================
   FARMHOUSE DOOR
========================================================= */

function showOpenText() {


    document
        .getElementById("openText")
        .classList.add("show");

}


function hideOpenText() {


    document
        .getElementById("openText")
        .classList.remove("show");

}



/* =========================================================
   DOOR CLICK
========================================================= */

function openDoor() {


    /*
       Play a small click sound.
    */

    playClickSound();


    /*
       Wait a tiny moment
       so the sound can be heard.
    */

    setTimeout(
        function () {


            /*
               Hide Page 2.
            */

            document
                .getElementById("page2")
                .style.display = "none";


            /*
               Show Page 3.
            */

            document
                .getElementById("page3")
                .style.display = "flex";


        },
        300
    );

}



/* =========================================================
   SIMPLE SOUND SYSTEM

   We create the sounds ourselves
   using the browser.

   Therefore you don't need:
   - MP3 files
   - WAV files
   - audio folders
========================================================= */


/*
   This variable stores
   our audio system.
*/

let audioContext = null;



/* =========================================================
   CREATE AUDIO SYSTEM
========================================================= */

function getAudioContext() {


    /*
       If audio system doesn't exist,
       create it.
    */

    if (!audioContext) {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();

    }


    return audioContext;

}



/* =========================================================
   PLAY ONE NOTE
========================================================= */

function playNote(
    frequency,
    duration,
    startTime
) {


    const audio =
        getAudioContext();


    /*
       Create musical oscillator.
    */

    const oscillator =
        audio.createOscillator();


    /*
       Create volume control.
    */

    const gain =
        audio.createGain();


    /*
       Use a soft sine-wave sound.
    */

    oscillator.type = "sine";


    /*
       Set note frequency.
    */

    oscillator.frequency.value =
        frequency;


    /*
       Connect oscillator
       to volume.
    */

    oscillator.connect(gain);

    gain.connect(
        audio.destination
    );


    /*
       Make the sound
       fade in and out.
    */

    gain.gain.setValueAtTime(
        0,
        startTime
    );


    gain.gain.linearRampToValueAtTime(
        0.08,
        startTime + 0.03
    );


    gain.gain.linearRampToValueAtTime(
        0,
        startTime + duration
    );


    /*
       Start note.
    */

    oscillator.start(
        startTime
    );


    /*
       Stop note.
    */

    oscillator.stop(
        startTime + duration
    );

}



/* =========================================================
   BIRTHDAY MUSIC
========================================================= */

let musicStarted = false;



function startBirthdayMusic() {


    /*
       Don't start the music twice.
    */

    if (musicStarted) {

        return;

    }


    musicStarted = true;


    const audio =
        getAudioContext();


    /*
       Resume audio if browser
       has paused it.
    */

    if (
        audio.state ===
        "suspended"
    ) {

        audio.resume();

    }


    /*
       Frequencies for:

       C D E F G A B
    */

    const notes = [

        261.63,
        261.63,
        293.66,
        261.63,
        349.23,
        329.63,

        261.63,
        261.63,
        293.66,
        261.63,
        392.00,
        349.23

    ];


    /*
       Start slightly after
       the page appears.
    */

    let time =
        audio.currentTime + 0.2;


    /*
       Play notes.
    */

    notes.forEach(
        function(note) {

            playNote(
                note,
                0.35,
                time
            );


            time =
                time + 0.4;

        }
    );


    /*
       Repeat the little tune.
    */

    setTimeout(
        function() {

            musicStarted = false;

            startBirthdayMusic();

        },
        5000
    );

}



/* =========================================================
   DUCK SOUND
========================================================= */

function duckSound() {


    const audio =
        getAudioContext();


    const oscillator =
        audio.createOscillator();


    const gain =
        audio.createGain();


    oscillator.type =
        "sine";


    /*
       Duck-like sound.

       Start high and move lower.
    */

    oscillator.frequency.setValueAtTime(
        650,
        audio.currentTime
    );


    oscillator.frequency.linearRampToValueAtTime(
        350,
        audio.currentTime + 0.18
    );


    oscillator.connect(gain);

    gain.connect(
        audio.destination
    );


    gain.gain.setValueAtTime(
        0.15,
        audio.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        0.01,
        audio.currentTime + 0.25
    );


    oscillator.start();


    oscillator.stop(
        audio.currentTime + 0.25
    );

}



/* =========================================================
   DOOR CLICK SOUND
========================================================= */

function playClickSound() {


    const audio =
        getAudioContext();


    const oscillator =
        audio.createOscillator();


    const gain =
        audio.createGain();


    oscillator.type =
        "square";


    oscillator.frequency.value =
        500;


    oscillator.connect(gain);

    gain.connect(
        audio.destination
    );


    gain.gain.setValueAtTime(
        0.12,
        audio.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        0.01,
        audio.currentTime + 0.08
    );


    oscillator.start();


    oscillator.stop(
        audio.currentTime + 0.08
    );

}



/* =========================================================
   KEYBOARD SUPPORT
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {


        /*
           If keyboard number
           is pressed.
        */

        if (
            event.key >= "0" &&
            event.key <= "9"
        ) {

            pressKey(event.key);

        }


        /*
           Backspace.
        */

        else if (
            event.key === "Backspace"
        ) {

            deleteKey();

        }


        /*
           Enter.
        */

        else if (
            event.key === "Enter"
        ) {

            checkPassword();

        }

    }
);



/* =========================================================
   START
========================================================= */

updatePasswordDisplay();
