/* =========================================================
   PASSWORD
========================================================= */

const CORRECT_PASSWORD = "0309";

let enteredPassword = "";

let popupType = "";

let musicPlaying = false;


/* =========================================================
   AUDIO SYSTEM
   We create sounds directly with Web Audio.
   This means you do NOT need an audio folder.
========================================================= */

let audioContext = null;

let musicTimer = null;

let musicNoteIndex = 0;


/* =========================================================
   CREATE AUDIO CONTEXT
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
   PLAY SIMPLE TONE
========================================================= */

function playTone(
    frequency,
    duration = 0.15,
    type = "sine",
    volume = 0.08
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
        volume,
        ctx.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        0.001,
        ctx.currentTime + duration
    );


    oscillator.connect(gain);

    gain.connect(
        ctx.destination
    );


    oscillator.start();

    oscillator.stop(
        ctx.currentTime + duration
    );
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


    if (
        enteredPassword.length > 0
    ) {

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
   PRESS NUMBER
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

    playTone(
        440,
        0.08,
        "sine",
        0.035
    );
}


/* =========================================================
   DELETE
========================================================= */

function deleteKey() {

    enteredPassword =
        enteredPassword.slice(
            0,
            -1
        );

    updateDisplay();

    clearMessage();

    playTone(
        250,
        0.08,
        "sine",
        0.03
    );
}


/* =========================================================
   SHOW POPUP
========================================================= */

function showPopup(type) {

    const overlay =
        document.getElementById(
            "popup-overlay"
        );

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


    popupType = type;


    if (
        type === "wrong"
    ) {

        doodle.textContent =
            "🥺💗";

        message.innerHTML =
            "Baby!!!! You've entered the wrong password.";

        hearts.textContent =
            "♡ ✿ ♡";


        playTone(
            220,
            0.2,
            "sine",
            0.06
        );

    }


    if (
        type === "correct"
    ) {

        doodle.textContent =
            "🎀💗✨";

        message.innerHTML =
            "Welcome, Baby! 💕<br>" +
            "I've been waiting for you! 🌸";

        hearts.textContent =
            "♡ ✿ ♡ ✿ ♡";


        playTone(
            523,
            0.12,
            "sine",
            0.05
        );

        setTimeout(
            () => {
                playTone(
                    659,
                    0.12,
                    "sine",
                    0.05
                );
            },
            120
        );

        setTimeout(
            () => {
                playTone(
                    784,
                    0.2,
                    "sine",
                    0.05
                );
            },
            240
        );

    }


    overlay.classList.add(
        "show"
    );
}


/* =========================================================
   CLOSE POPUP
========================================================= */

function closePopup() {

    const overlay =
        document.getElementById(
            "popup-overlay"
        );


    overlay.classList.remove(
        "show"
    );


    /*
       IMPORTANT:
       Page 2 opens ONLY after
       the correct welcome popup
       has been closed.
    */

    if (
        popupType === "correct"
    ) {

        setTimeout(
            () => {

                openPage2();

            },
            300
        );

    }


    popupType = "";
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
                        "scale(1.1)"
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


        setTimeout(
            () => {

                showPopup(
                    "correct"
                );

            },
            300
        );


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
                    "translateX(-8px)"
            },

            {
                transform:
                    "translateX(8px)"
            },

            {
                transform:
                    "translateX(-6px)"
            },

            {
                transform:
                    "translateX(6px)"
            },

            {
                transform:
                    "translateX(0)"
            }
        ],

        {
            duration:
                350
        }
    );


    setTimeout(
        () => {

            showPopup(
                "wrong"
            );

        },
        300
    );


    setTimeout(
        () => {

            enteredPassword = "";

            updateDisplay();

        },
        700
    );
}


/* =========================================================
   CLEAR PASSWORD MESSAGE
========================================================= */

function clearMessage() {

    const message =
        document.getElementById(
            "password-message"
        );

    message.textContent = "";
}


/* =========================================================
   OPEN PAGE 2
========================================================= */

function openPage2() {

    const page1 =
        document.getElementById(
            "page1"
        );

    const page2 =
        document.getElementById(
            "page2"
        );


    page1.style.display =
        "none";

    page2.style.display =
        "block";


    /*
       Start birthday music
       after entering Page 2.
    */

    startBirthdayMusic();
}


/* =========================================================
   BIRTHDAY MUSIC
========================================================= */

/*
   Simple generated birthday-style melody.

   This avoids requiring an external
   MP3 file in GitHub.
*/

const birthdayNotes = [

    262,
    262,
    294,
    262,
    349,
    330,

    262,
    262,
    294,
    262,
    392,
    349,

    262,
    262,
    523,
    440,
    349,
    330,
    294,

    466,
    466,
    440,
    349,
    392,
    349

];


function playBirthdayNote() {

    if (
        !musicPlaying
    ) {

        return;

    }


    const note =
        birthdayNotes[
            musicNoteIndex %
            birthdayNotes.length
        ];


    playTone(
        note,
        0.28,
        "triangle",
        0.035
    );


    musicNoteIndex++;


    musicTimer =
        setTimeout(
            playBirthdayNote,
            360
        );
}


/* =========================================================
   START MUSIC
========================================================= */

function startBirthdayMusic() {

    getAudioContext();

    musicPlaying = true;

    musicNoteIndex = 0;

    clearTimeout(
        musicTimer
    );

    playBirthdayNote();

    updateMusicButton();
}


/* =========================================================
   STOP MUSIC
========================================================= */

function stopBirthdayMusic() {

    musicPlaying = false;

    clearTimeout(
        musicTimer
    );

    musicTimer = null;

    updateMusicButton();
}


/* =========================================================
   TOGGLE MUSIC
========================================================= */

function toggleMusic() {

    if (
        musicPlaying
    ) {

        stopBirthdayMusic();

    } else {

        startBirthdayMusic();

    }
}


/* =========================================================
   MUSIC BUTTON TEXT
========================================================= */

function updateMusicButton() {

    const button =
        document.getElementById(
            "music-button"
        );


    if (
        musicPlaying
    ) {

        button.textContent =
            "🔊 Music On";

    } else {

        button.textContent =
            "🔇 Music Off";

    }
}


/* =========================================================
   DUCK SOUND
========================================================= */

function duckSound() {

    getAudioContext();


    /*
       Two tones make the
       sound more duck-like.
    */

    playTone(
        330,
        0.18,
        "sawtooth",
        0.06
    );


    setTimeout(
        () => {

            playTone(
                220,
                0.2,
                "sawtooth",
                0.05
            );

        },
        100
    );
}


/* =========================================================
   FARMHOUSE DOOR
========================================================= */

function openFarmDoor() {

    /*
       Door click sound.
    */

    playTone(
        180,
        0.12,
        "square",
        0.05
    );


    setTimeout(
        () => {

            playTone(
                100,
                0.18,
                "square",
                0.035
            );

        },
        100
    );


    /*
       Small door animation.
    */

    const door =
        document.getElementById(
            "farm-door"
        );


    door.animate(

        [
            {
                transform:
                    "scaleX(1)"
            },

            {
                transform:
                    "scaleX(0.92)"
            },

            {
                transform:
                    "scaleX(1)"
            }
        ],

        {
            duration:
                400
        }
    );


    /*
       Give the sound a moment,
       then go to Page 3.
    */

    setTimeout(
        () => {

            openPage3();

        },
        650
    );
}


/* =========================================================
   OPEN PAGE 3
========================================================= */

function openPage3() {

    const page2 =
        document.getElementById(
            "page2"
        );

    const page3 =
        document.getElementById(
            "page3"
        );


    stopBirthdayMusic();


    page2.style.display =
        "none";

    page3.style.display =
        "flex";
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

            pressKey(
                event.key
            );

        }


        else if (
            event.key ===
            "Backspace"
        ) {

            deleteKey();

        }


        else if (
            event.key ===
            "Enter"
        ) {

            checkPassword();

        }


        else if (
            event.key ===
            "Escape"
        ) {

            closePopup();

        }

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateDisplay();

        updateMusicButton();


        /*
           Clicking outside popup
           closes it.
        */

        const overlay =
            document.getElementById(
                "popup-overlay"
            );


        overlay.addEventListener(
            "click",
            function(event) {

                if (
                    event.target ===
                    overlay
                ) {

                    closePopup();

                }

            }
        );

    }
);
