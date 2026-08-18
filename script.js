/* =========================================================
   =========================================================
   WEBSITE SETTINGS
   =========================================================
========================================================= */

const CORRECT_PASSWORD = "0309";

let enteredPassword = "";

let audioContext = null;

let birthdayMusicTimer = null;

let musicPlaying = false;

let currentNoteIndex = 0;


/* =========================================================
   PAGE ELEMENTS
========================================================= */

const page1 =
    document.getElementById("page1");

const page2 =
    document.getElementById("page2");

const page3 =
    document.getElementById("page3");

const popupOverlay =
    document.getElementById("popup-overlay");


/* =========================================================
   PAGE SWITCHING
========================================================= */

function showPage(pageNumber) {

    page1.classList.remove("active");

    page2.classList.remove("active");

    page3.classList.remove("active");


    if (pageNumber === 1) {

        page1.classList.add("active");

        history.replaceState(
            null,
            "",
            "#secret"
        );

    }


    if (pageNumber === 2) {

        page2.classList.add("active");

        history.replaceState(
            null,
            "",
            "#birthday"
        );


        /*
           Start birthday music when Page 2
           becomes active.
        */

        startBirthdayMusic();

    }


    if (pageNumber === 3) {

        page3.classList.add("active");

        history.replaceState(
            null,
            "",
            "#next"
        );

    }
}


/* =========================================================
   PASSWORD DISPLAY
========================================================= */

function updateDisplay() {

    const display =
        document.getElementById(
            "password-display"
        );


    display.textContent =
        "•".repeat(
            enteredPassword.length
        );


    if (enteredPassword.length > 0) {

        display.classList.add(
            "filled"
        );

    } else {

        display.classList.remove(
            "filled"
        );
    }
}


/* =========================================================
   NUMBER BUTTON
========================================================= */

function pressKey(number) {

    if (
        enteredPassword.length >= 8
    ) {
        return;
    }


    enteredPassword += number;

    updateDisplay();

    clearMessage();
}


/* =========================================================
   DELETE BUTTON
========================================================= */

function deleteKey() {

    enteredPassword =
        enteredPassword.slice(
            0,
            -1
        );

    updateDisplay();

    clearMessage();
}


/* =========================================================
   CLEAR MESSAGE
========================================================= */

function clearMessage() {

    const message =
        document.getElementById(
            "password-message"
        );

    message.textContent = "";
}


/* =========================================================
   SHOW WRONG/CORRECT POPUP
========================================================= */

function showPopup(type) {

    const doodle =
        document.getElementById(
            "popup-doodle"
        );

    const message =
        document.getElementById(
            "popup-message"
        );

    const hearts =
        document.getElementById(
            "popup-hearts"
        );


    if (type === "wrong") {

        doodle.textContent =
            "🥺💗";

        message.innerHTML =
            "Baby!!!! You've entered the wrong password.";

        hearts.textContent =
            "♡ ✿ ♡";

    }


    if (type === "correct") {

        doodle.textContent =
            "🎀💗✨";

        message.innerHTML =
            "Welcome, Baby! 💕<br>" +
            "I've been waiting for you! 🌸";

        hearts.textContent =
            "♡ ✿ ♡ ✿ ♡";

    }


    popupOverlay.classList.add(
        "show"
    );
}


/* =========================================================
   CLOSE POPUP
========================================================= */

function closePopup() {

    const isCorrectPopup =
        document
            .getElementById("popup-message")
            .innerHTML
            .includes("Welcome");


    popupOverlay.classList.remove(
        "show"
    );


    /*
       ONLY after the correct popup
       is closed do we enter Page 2.
    */

    if (isCorrectPopup) {

        setTimeout(() => {

            showPage(2);

        }, 350);

    }
}


/* =========================================================
   CHECK PASSWORD
========================================================= */

function checkPassword() {

    const display =
        document.getElementById(
            "password-display"
        );


    /*
       CORRECT
    */

    if (
        enteredPassword ===
        CORRECT_PASSWORD
    ) {

        display.animate(

            [
                {
                    transform:
                        "scale(1)"
                },

                {
                    transform:
                        "scale(1.08)"
                },

                {
                    transform:
                        "scale(1)"
                }
            ],

            {
                duration:
                    450
            }
        );


        setTimeout(() => {

            showPopup(
                "correct"
            );

        }, 350);


        return;
    }


    /*
       WRONG
    */

    display.animate(

        [
            {
                transform:
                    "translateX(0)"
            },

            {
                transform:
                    "translateX(-9px)"
            },

            {
                transform:
                    "translateX(9px)"
            },

            {
                transform:
                    "translateX(-7px)"
            },

            {
                transform:
                    "translateX(7px)"
            },

            {
                transform:
                    "translateX(0)"
            }
        ],

        {
            duration:
                400
        }
    );


    setTimeout(() => {

        showPopup(
            "wrong"
        );

    }, 300);


    setTimeout(() => {

        enteredPassword = "";

        updateDisplay();

    }, 700);
}


/* =========================================================
   KEYBOARD SUPPORT
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key >= "0" &&
            event.key <= "9"
        ) {

            /*
               Only accept keyboard password
               input while Page 1 is active.
            */

            if (
                page1.classList.contains(
                    "active"
                )
            ) {

                pressKey(
                    event.key
                );
            }

        }


        else if (
            event.key === "Backspace"
        ) {

            if (
                page1.classList.contains(
                    "active"
                )
            ) {

                deleteKey();
            }

        }


        else if (
            event.key === "Enter"
        ) {

            if (
                page1.classList.contains(
                    "active"
                )
            ) {

                checkPassword();
            }

        }


        else if (
            event.key === "Escape"
        ) {

            if (
                popupOverlay.classList.contains(
                    "show"
                )
            ) {

                closePopup();
            }

        }

    }
);


/* =========================================================
   AUDIO ENGINE
   =========================================================

   No audio files are required.

   The sounds are created using Web Audio API.

========================================================= */

function getAudioContext() {

    if (!audioContext) {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();

    }


    if (
        audioContext.state ===
        "suspended"
    ) {

        audioContext.resume();

    }


    return audioContext;
}


/* =========================================================
   GENERIC TONE
========================================================= */

function playTone(
    frequency,
    duration,
    type = "sine",
    volume = 0.05
) {

    const ctx =
        getAudioContext();


    const oscillator =
        ctx.createOscillator();


    const gain =
        ctx.createGain();


    oscillator.type =
        type;

    oscillator.frequency.value =
        frequency;


    gain.gain.setValueAtTime(
        0,
        ctx.currentTime
    );


    gain.gain.linearRampToValueAtTime(
        volume,
        ctx.currentTime + 0.015
    );


    gain.gain.exponentialRampToValueAtTime(
        0.001,
        ctx.currentTime + duration
    );


    oscillator.connect(
        gain
    );

    gain.connect(
        ctx.destination
    );


    oscillator.start();

    oscillator.stop(
        ctx.currentTime +
        duration +
        0.03
    );
}


/* =========================================================
   DOOR CLICK SOUND
========================================================= */

function playDoorSound() {

    const ctx =
        getAudioContext();


    playTone(
        190,
        0.08,
        "square",
        0.055
    );


    setTimeout(() => {

        playTone(
            125,
            0.12,
            "square",
            0.035
        );

    }, 75);
}


/* =========================================================
   DUCK SOUND
========================================================= */

function playDuckSound() {

    const ctx =
        getAudioContext();


    const oscillator =
        ctx.createOscillator();


    const gain =
        ctx.createGain();


    oscillator.type =
        "sawtooth";


    oscillator.frequency.setValueAtTime(
        520,
        ctx.currentTime
    );


    oscillator.frequency.exponentialRampToValueAtTime(
        300,
        ctx.currentTime + 0.18
    );


    gain.gain.setValueAtTime(
        0,
        ctx.currentTime
    );


    gain.gain.linearRampToValueAtTime(
        0.11,
        ctx.currentTime + 0.02
    );


    gain.gain.exponentialRampToValueAtTime(
        0.001,
        ctx.currentTime + 0.22
    );


    oscillator.connect(
        gain
    );

    gain.connect(
        ctx.destination
    );


    oscillator.start();

    oscillator.stop(
        ctx.currentTime + 0.25
    );
}


/* =========================================================
   HAPPY BIRTHDAY MELODY
   =========================================================

   Approximate Happy Birthday melody.

========================================================= */

const birthdayNotes = [

    [264, 0.28],
    [264, 0.28],
    [297, 0.55],
    [264, 0.55],
    [352, 0.55],
    [330, 1.0],

    [264, 0.28],
    [264, 0.28],
    [297, 0.55],
    [264, 0.55],
    [396, 0.55],
    [352, 1.0],

    [264, 0.28],
    [264, 0.28],
    [528, 0.55],
    [440, 0.55],
    [352, 0.55],
    [330, 0.55],
    [297, 0.9],

    [470, 0.28],
    [470, 0.28],
    [440, 0.55],
    [352, 0.55],
    [396, 0.55],
    [352, 1.0]

];


/* =========================================================
   PLAY NEXT BIRTHDAY NOTE
========================================================= */

function playNextBirthdayNote() {

    if (!musicPlaying) {
        return;
    }


    const note =
        birthdayNotes[
            currentNoteIndex
        ];


    playTone(
        note[0],
        note[1] * 0.85,
        "sine",
        0.035
    );


    currentNoteIndex++;


    if (
        currentNoteIndex >=
        birthdayNotes.length
    ) {

        currentNoteIndex = 0;
    }


    birthdayMusicTimer =
        setTimeout(
            playNextBirthdayNote,
            note[1] * 1000 + 70
        );
}


/* =========================================================
   START BIRTHDAY MUSIC
========================================================= */

function startBirthdayMusic() {

    if (musicPlaying) {
        return;
    }


    getAudioContext();


    musicPlaying = true;

    currentNoteIndex = 0;


    const button =
        document.getElementById(
            "music-button"
        );


    button.textContent =
        "🎵";


    playNextBirthdayNote();
}


/* =========================================================
   STOP BIRTHDAY MUSIC
========================================================= */

function stopBirthdayMusic() {

    musicPlaying = false;


    if (
        birthdayMusicTimer
    ) {

        clearTimeout(
            birthdayMusicTimer
        );

        birthdayMusicTimer =
            null;
    }


    const button =
        document.getElementById(
            "music-button"
        );


    button.textContent =
        "🔇";
}


/* =========================================================
   TOGGLE MUSIC
========================================================= */

function toggleMusic(event) {

    event.stopPropagation();


    if (musicPlaying) {

        stopBirthdayMusic();

    } else {

        startBirthdayMusic();

    }
}


/* =========================================================
   DUCK CLICK
========================================================= */

function duckClicked(event) {

    /*
       Prevent the click from behaving
       like a page-level click.
    */

    event.stopPropagation();


    playDuckSound();


    const duckFamily =
        document.getElementById(
            "duck-family"
        );


    /*
       Cute little bounce when clicked.
    */

    duckFamily.animate(

        [
            {
                transform:
                    "scale(1)"
            },

            {
                transform:
                    "scale(1.12)"
            },

            {
                transform:
                    "scale(1)"
            }
        ],

        {
            duration:
                300
        }
    );
}


/* =========================================================
   FARM HOUSE DOOR
========================================================= */

function openFarmDoor() {

    playDoorSound();


    const door =
        document.getElementById(
            "farm-door"
        );


    /*
       Small opening animation.
    */

    door.animate(

        [
            {
                transform:
                    "perspective(300px) rotateY(0deg)"
            },

            {
                transform:
                    "perspective(300px) rotateY(-45deg)"
            },

            {
                transform:
                    "perspective(300px) rotateY(-75deg)"
            }
        ],

        {
            duration:
                650,

            fill:
                "forwards"
        }
    );


    /*
       Move to Page 3 after
       the door animation.
    */

    setTimeout(() => {

        showPage(3);

    }, 850);
}


/* =========================================================
   INITIAL PAGE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateDisplay();

        showPage(1);

    }
);


/* =========================================================
   PREVENT RIGHT-CLICK ON PAGE
   Optional cute-surprise behavior.
========================================================= */

document.addEventListener(
    "contextmenu",
    function(event) {

        /*
           We don't actually disable
           right-click because it can
           annoy users.

           This listener is intentionally
           left empty.
        */

    }
);
