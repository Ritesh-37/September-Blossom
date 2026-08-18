```javascript
/* =========================================================
   PASSWORD
========================================================= */

const CORRECT_PASSWORD = "0309";

let enteredPassword = "";

let passwordCorrect = false;


/* =========================================================
   ELEMENTS
========================================================= */

const passwordDisplay =
    document.getElementById(
        "password-display"
    );

const popupOverlay =
    document.getElementById(
        "popup-overlay"
    );

const popupDoodle =
    document.getElementById(
        "popup-doodle"
    );

const popupMessage =
    document.getElementById(
        "popup-message"
    );

const popupHearts =
    document.getElementById(
        "popup-hearts"
    );

const pageOne =
    document.getElementById(
        "page-one"
    );

const pageTwo =
    document.getElementById(
        "page-two"
    );

const birthdayMusic =
    document.getElementById(
        "birthday-music"
    );

const farmDoor =
    document.getElementById(
        "farm-door"
    );

const doorTooltip =
    document.getElementById(
        "door-tooltip"
    );


/* =========================================================
   PASSWORD DISPLAY
========================================================= */

function updateDisplay() {

    passwordDisplay.textContent =
        "•".repeat(
            enteredPassword.length
        );


    if (
        enteredPassword.length > 0
    ) {

        passwordDisplay.classList.add(
            "filled"
        );

    } else {

        passwordDisplay.classList.remove(
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
}


/* =========================================================
   PASSWORD MESSAGE
========================================================= */

function clearMessage() {

    const message =
        document.getElementById(
            "password-message"
        );

    message.textContent = "";
}


/* =========================================================
   SHOW WRONG PASSWORD POPUP
========================================================= */

function showWrongPopup() {

    popupDoodle.textContent =
        "🥺💗";

    popupMessage.innerHTML =
        "Baby!!!! You've entered the wrong password.";

    popupHearts.textContent =
        "♡ ✿ ♡";


    popupOverlay.classList.add(
        "show"
    );
}


/* =========================================================
   SHOW CORRECT PASSWORD POPUP
========================================================= */

function showCorrectPopup() {

    popupDoodle.textContent =
        "🎀💗✨";

    popupMessage.innerHTML =
        "Welcome, Baby! 💕<br>" +
        "I've been waiting for you! 🌸";

    popupHearts.textContent =
        "♡ ✿ ♡ ✿ ♡";


    popupOverlay.classList.add(
        "show"
    );
}


/* =========================================================
   CLOSE POPUP
========================================================= */

function closePopup() {

    popupOverlay.classList.remove(
        "show"
    );


    /*
       IMPORTANT:
       Page 2 opens ONLY if the
       password was correct.
    */

    if (passwordCorrect) {

        setTimeout(
            openBirthdayPage,
            300
        );
    }
}


/* =========================================================
   CHECK PASSWORD
========================================================= */

function checkPassword() {

    /*
       CORRECT
    */

    if (
        enteredPassword ===
        CORRECT_PASSWORD
    ) {

        passwordCorrect = true;


        /*
           Success animation
        */

        passwordDisplay.animate(

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
            showCorrectPopup,
            300
        );

        return;
    }


    /*
       WRONG
    */

    passwordCorrect = false;


    passwordDisplay.animate(

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


    setTimeout(
        showWrongPopup,
        300
    );


    setTimeout(
        function () {

            enteredPassword = "";

            updateDisplay();

        },
        700
    );
}


/* =========================================================
   OPEN PAGE 2
========================================================= */

function openBirthdayPage() {

    /*
       Hide Page 1
    */

    pageOne.style.display =
        "none";


    /*
       Show Page 2
    */

    pageTwo.classList.add(
        "active"
    );


    /*
       Start birthday music.
       Browser policy may prevent
       audio in some situations.
    */

    if (birthdayMusic) {

        birthdayMusic.volume =
            0.35;

        const playPromise =
            birthdayMusic.play();


        if (
            playPromise !== undefined
        ) {

            playPromise.catch(
                function () {

                    console.log(
                        "Music autoplay was blocked by the browser."
                    );

                }
            );
        }
    }
}


/* =========================================================
   DOOR HOVER
========================================================= */

farmDoor.addEventListener(
    "mouseenter",
    function () {

        doorTooltip.classList.add(
            "show"
        );
    }
);


farmDoor.addEventListener(
    "mouseleave",
    function () {

        doorTooltip.classList.remove(
            "show"
        );
    }
);


/* =========================================================
   DOOR CLICK SOUND
========================================================= */

function playDoorSound() {

    /*
       Web Audio API creates a
       small wooden click sound.

       This means you don't need
       another audio file for the door.
    */

    const AudioContext =
        window.AudioContext ||
        window.webkitAudioContext;


    if (!AudioContext) {
        return;
    }


    const context =
        new AudioContext();


    const oscillator =
        context.createOscillator();

    const gain =
        context.createGain();


    oscillator.type =
        "triangle";


    oscillator.frequency.setValueAtTime(
        180,
        context.currentTime
    );


    oscillator.frequency.exponentialRampToValueAtTime(
        80,
        context.currentTime + 0.12
    );


    gain.gain.setValueAtTime(
        0.18,
        context.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        0.001,
        context.currentTime + 0.18
    );


    oscillator.connect(
        gain
    );

    gain.connect(
        context.destination
    );


    oscillator.start();

    oscillator.stop(
        context.currentTime + 0.18
    );
}


/* =========================================================
   OPEN FARM HOUSE
========================================================= */

function openFarmDoor() {

    playDoorSound();


    /*
       Small door-opening animation
    */

    farmDoor.animate(

        [
            {
                transform:
                    "perspective(300px) rotateY(0deg)"
            },

            {
                transform:
                    "perspective(300px) rotateY(-35deg)"
            },

            {
                transform:
                    "perspective(300px) rotateY(-70deg)"
            }
        ],

        {
            duration:
                650,

            fill:
                "forwards"
        }
    );


    doorTooltip.textContent =
        "Opening...";


    /*
       Page 3 placeholder.

       When we're ready to build Page 3,
       this function will navigate to it.
    */

    setTimeout(
        function () {

            alert(
                "🏡 The door opened! Page 3 will go here next. 💗"
            );

        },
        750
    );
}


/* =========================================================
   DUCK SOUND
========================================================= */

function duckQuack() {

    /*
       Web Audio API makes a cute
       duck-like quack without
       requiring another sound file.
    */

    const AudioContext =
        window.AudioContext ||
        window.webkitAudioContext;


    if (!AudioContext) {
        return;
    }


    const context =
        new AudioContext();


    const oscillator =
        context.createOscillator();

    const gain =
        context.createGain();


    oscillator.type =
        "square";


    oscillator.frequency.setValueAtTime(
        420,
        context.currentTime
    );


    oscillator.frequency.exponentialRampToValueAtTime(
        250,
        context.currentTime + 0.12
    );


    oscillator.frequency.exponentialRampToValueAtTime(
        380,
        context.currentTime + 0.22
    );


    gain.gain.setValueAtTime(
        0.14,
        context.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        0.001,
        context.currentTime + 0.25
    );


    oscillator.connect(
        gain
    );

    gain.connect(
        context.destination
    );


    oscillator.start();

    oscillator.stop(
        context.currentTime + 0.25
    );


    /*
       Little duck bounce
    */

    const ducks =
        document.getElementById(
            "duck-family"
        );


    ducks.animate(

        [
            {
                transform:
                    "translateY(0)"
            },

            {
                transform:
                    "translateY(-12px)"
            },

            {
                transform:
                    "translateY(0)"
            }
        ],

        {
            duration:
                350
        }
    );
}


/* =========================================================
   ESCAPE CLOSES POPUP
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closePopup();
        }


        if (
            event.key >= "0" &&
            event.key <= "9"
        ) {

            pressKey(
                event.key
            );
        }


        if (
            event.key === "Backspace"
        ) {

            deleteKey();
        }


        if (
            event.key === "Enter"
        ) {

            checkPassword();
        }
    }
);


/* =========================================================
   CLICK OUTSIDE POPUP
========================================================= */

popupOverlay.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            popupOverlay
        ) {

            closePopup();
        }
    }
);


/* =========================================================
   INITIALIZE
========================================================= */

updateDisplay();
```
