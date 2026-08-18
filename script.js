/* =========================================================
   🎀 BIRTHDAY WEBSITE
   Everything you need to customize is near the top.
========================================================= */


/* =========================================================
   ✏️ CHANGE THE BIRTHDAY PERSON'S NAME
========================================================= */

const birthdayPerson = "Birthday Star";


/* =========================================================
   🎁 YOUR 10 SURPRISES
=========================================================

   For every surprise you can change:

   emoji
   title
   question
   answer
   message

   The answer is NOT case-sensitive.

   "Paris"
   "paris"
   "PARIS"

   will all work.
========================================================= */


const surprises = [

    /* -----------------------------------------------------
       SURPRISE 1
    ----------------------------------------------------- */

    {
        emoji: "🎀",

        title: "The First Surprise",

        question:
            "What is 2 + 2?",

        answer:
            "4",

        message: `
            <h3>🎀 You found the first surprise!</h3>

            <p>
                The adventure has officially begun! 💗
            </p>

            <p>
                There are still 9 more secrets waiting
                for you...
            </p>
        `
    },


    /* -----------------------------------------------------
       SURPRISE 2
    ----------------------------------------------------- */

    {
        emoji: "💌",

        title: "A Secret Message",

        question:
            "What do you get when you mix cake, candles and presents?",

        answer:
            "birthday",

        message: `
            <h3>💌 A Secret Message</h3>

            <p>
                Happy Birthday to one of the most
                amazing people ever! 🥹💗
            </p>

            <p>
                I hope you know how special you are.
            </p>
        `
    },


    /* -----------------------------------------------------
       SURPRISE 3
    ----------------------------------------------------- */

    {
        emoji: "🌸",

        title: "A Special Photo",

        question:
            "What has a face and two hands but cannot smile?",

        answer:
            "clock",

        message: `
            <h3>📸 A Special Memory</h3>

            <p>
                Look what I found! 🌸
            </p>

            <img
                src="media/photo1.jpg"
                alt="A special birthday photo"
            >

            <p>
                This photo is officially part of
                the birthday museum now. 😂💗
            </p>
        `
    },


    /* -----------------------------------------------------
       SURPRISE 4
    ----------------------------------------------------- */

    {
        emoji: "🎥",

        title: "Secret Video",

        question:
            "What goes up but never comes down?",

        answer:
            "age",

        message: `
            <h3>🎥 SECRET VIDEO UNLOCKED!</h3>

            <video
                controls
                playsinline
            >
                <source
                    src="media/video1.mp4"
                    type="video/mp4"
                >

                Your browser cannot play this video.
            </video>

            <p>
                Hope you like it! 💗
            </p>
        `
    },


    /* -----------------------------------------------------
       SURPRISE 5
    ----------------------------------------------------- */

    {
        emoji: "⭐",

        title: "Birthday Wish",

        question:
            "I shine at night and disappear in the morning. What am I?",

        answer:
            "star",

        message: `
            <h3>🌟 My Birthday Wish For You</h3>

            <p>
                May you have a year filled with
                happiness, amazing memories,
                laughter and dreams coming true.
            </p>

            <p>
                And obviously...
                LOTS OF CAKE. 🎂
            </p>
        `
    },


    /* -----------------------------------------------------
       SURPRISE 6
    ----------------------------------------------------- */

    {
        emoji: "🦋",

        title: "Something Special",

        question:
            "What has many keys but cannot open a door?",

        answer:
            "piano",

        message: `
            <h3>🦋 You Found It!</h3>

            <p>
                Never stop being curious,
                funny and completely yourself.
            </p>

            <p>
                That's what makes you awesome. 💗
            </p>
        `
    },


    /* -----------------------------------------------------
       SURPRISE 7
    ----------------------------------------------------- */

    {
        emoji: "🎂",

        title: "Cake Time",

        question:
            "What food is usually the most important part of a birthday?",

        answer:
            "cake",

        message: `
            <h3>🎂 IMPORTANT ANNOUNCEMENT 🎂</h3>

            <p>
                This website officially declares that
                birthday cake has zero calories.
            </p>

            <p>
                Yes, I made the rules. 😂💗
            </p>
        `
    },


    /* -----------------------------------------------------
       SURPRISE 8
    ----------------------------------------------------- */

    {
        emoji: "💖",

        title: "A Tiny Compliment",

        question:
            "What is the opposite of sad?",

        answer:
            "happy",

        message: `
            <h3>💖 You Are Awesome</h3>

            <p>
                You are genuinely amazing.
            </p>

            <p>
                This is your official reminder that
                you are loved, appreciated and
                incredibly special.
            </p>

            <p>
                Never forget that. 🌸
            </p>
        `
    },


    /* -----------------------------------------------------
       SURPRISE 9
    ----------------------------------------------------- */

    {
        emoji: "🌈",

        title: "The Rainbow Surprise",

        question:
            "What comes after the letter A?",

        answer:
            "b",

        message: `
            <h3>🌈 You Made It Here!</h3>

            <p>
                Every little surprise was just an excuse
                to remind you that someone thinks
                you're pretty amazing.
            </p>

            <p>
                💗 Happy Birthday!
            </p>
        `
    },


    /* -----------------------------------------------------
       SURPRISE 10
    ----------------------------------------------------- */

    {
        emoji: "🔮",

        title: "The Final Secret",

        question:
            "What do you say when someone has a birthday?",

        answer:
            "happy birthday",

        message: `
            <h3>🔮 THE FINAL SECRET!</h3>

            <p>
                You unlocked the final surprise!
            </p>

            <p>
                But wait...
            </p>

            <p>
                There is still one final celebration
                waiting for you. 🎉
            </p>
        `
    }

];



/* =========================================================
   DON'T CHANGE BELOW THIS LINE
========================================================= */


let currentChallenge = 0;

let unlocked = [];



/* =========================================================
   START GAME
========================================================= */

function startGame() {

    showScreen("game-screen");

    createConfetti(60);

    updateProgress();
}



/* =========================================================
   CHANGE SCREEN
========================================================= */

function showScreen(id) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove("active");

        });


    document
        .getElementById(id)
        .classList.add("active");
}



/* =========================================================
   OPEN QUESTION
========================================================= */

function openChallenge(index) {

    currentChallenge = index;

    const challenge =
        surprises[index];


    /*
       If already unlocked,
       show the surprise again.
    */

    if (unlocked[index]) {

        showSurprise(index);

        return;
    }


    document.getElementById(
        "challenge-emoji"
    ).textContent =
        challenge.emoji;


    document.getElementById(
        "challenge-title"
    ).textContent =
        challenge.title;


    document.getElementById(
        "challenge-question"
    ).textContent =
        challenge.question;


    document.getElementById(
        "wrong-answer"
    ).textContent =
        "";


    const input =
        document.getElementById(
            "answer-input"
        );


    input.value = "";


    document
        .getElementById(
            "challenge-popup"
        )
        .classList.add("show");


    setTimeout(() => {

        input.focus();

    }, 200);
}



/* =========================================================
   CHECK ANSWER
========================================================= */

function checkAnswer() {

    const input =
        document.getElementById(
            "answer-input"
        );


    const userAnswer =
        input.value
            .trim()
            .toLowerCase();


    const correctAnswer =
        surprises[currentChallenge]
            .answer
            .trim()
            .toLowerCase();


    const error =
        document.getElementById(
            "wrong-answer"
        );


    if (userAnswer === correctAnswer) {

        unlocked[currentChallenge] =
            true;


        error.textContent =
            "🎉 Correct!";


        createConfetti(70);

        updateProgress();


        setTimeout(() => {

            closeChallenge();

            showSurprise(
                currentChallenge
            );

        }, 600);

    }

    else {

        error.textContent =
            "❌ Not quite! Try again 💗";

        input.classList.remove("shake");

        void input.offsetWidth;

        input.classList.add("shake");
    }
}



/* =========================================================
   ENTER KEY
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter" &&
            document
                .getElementById("challenge-popup")
                .classList.contains("show")
        ) {

            checkAnswer();
        }

    }
);



/* =========================================================
   CLOSE QUESTION
========================================================= */

function closeChallenge() {

    document
        .getElementById(
            "challenge-popup"
        )
        .classList.remove("show");
}



/* =========================================================
   SHOW SURPRISE
========================================================= */

function showSurprise(index) {

    const surprise =
        surprises[index];


    document.getElementById(
        "surprise-emoji"
    ).textContent =
        surprise.emoji;


    document.getElementById(
        "surprise-title"
    ).textContent =
        surprise.title;


    document.getElementById(
        "surprise-content"
    ).innerHTML =
        surprise.message;


    document
        .getElementById(
            "surprise-popup"
        )
        .classList.add("show");


    createConfetti(40);


    /*
       Check if all 10 are unlocked.
    */

    if (
        unlocked.filter(Boolean).length ===
        surprises.length
    ) {

        setTimeout(() => {

            closeSurprise();

            showFinal();

        }, 1800);
    }
}



/* =========================================================
   CLOSE SURPRISE
========================================================= */

function closeSurprise() {

    document
        .getElementById(
            "surprise-popup"
        )
        .classList.remove("show");
}



/* =========================================================
   PROGRESS
========================================================= */

function updateProgress() {

    const amount =
        unlocked.filter(Boolean).length;


    document.getElementById(
        "progress-count"
    ).textContent =
        amount;


    if (amount === 0) {

        document.getElementById(
            "game-hint"
        ).textContent =
            "🔐 Everything is locked...";

    }

    else if (amount < 10) {

        document.getElementById(
            "game-hint"
        ).textContent =
            `✨ ${amount} surprise${amount === 1 ? "" : "s"} unlocked!`;

    }

    else {

        document.getElementById(
            "game-hint"
        ).textContent =
            "🎉 EVERYTHING UNLOCKED!";
    }
}



/* =========================================================
   FINAL CELEBRATION
========================================================= */

function showFinal() {

    document.getElementById(
        "final-name"
    ).textContent =
        birthdayPerson;


    document
        .getElementById(
            "final-popup"
        )
        .classList.add("show");


    createConfetti(200);
}



/* =========================================================
   MASSIVE PARTY
========================================================= */

function massiveParty() {

    createConfetti(300);


    document
        .getElementById(
            "final-popup"
        )
        .classList.remove("show");


    setTimeout(() => {

        alert(
            "🎉 HAPPY BIRTHDAY!!! 🎂💗🎊"
        );

    }, 800);
}



/* =========================================================
   INSTRUCTIONS
========================================================= */

function showInstructions() {

    document
        .getElementById(
            "instructions-popup"
        )
        .classList.add("show");
}


function closeInstructions() {

    document
        .getElementById(
            "instructions-popup"
        )
        .classList.remove("show");
}



/* =========================================================
   CONFETTI
========================================================= */

function createConfetti(amount) {

    const container =
        document.getElementById(
            "confetti-container"
        );


    const colors = [

        "#ff65aa",
        "#a66ee8",
        "#ffd45c",
        "#65d9ff",
        "#72df9a",
        "#ff8d8d",
        "#ffffff"

    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const piece =
            document.createElement(
                "div"
            );


        piece.className =
            "confetti";


        piece.style.left =
            Math.random() * 100 +
            "vw";


        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        piece.style.animationDuration =
            (
                2 +
                Math.random() * 4
            ) +
            "s";


        piece.style.animationDelay =
            (
                Math.random() * 0.5
            ) +
            "s";


        piece.style.width =
            (
                6 +
                Math.random() * 8
            ) +
            "px";


        piece.style.height =
            (
                10 +
                Math.random() * 15
            ) +
            "px";


        container.appendChild(
            piece
        );


        setTimeout(() => {

            piece.remove();

        }, 7000);
    }
}



/* =========================================================
   FLOATING HEARTS / STARS
========================================================= */

const floatingItems = [

    "💗",
    "💕",
    "💖",
    "💜",
    "✨",
    "⭐",
    "🌸",
    "🎀",
    "🦋"

];


function createFloatingItem() {

    const item =
        document.createElement(
            "div"
        );


    item.className =
        "floating";


    item.textContent =
        floatingItems[
            Math.floor(
                Math.random() *
                floatingItems.length
            )
        ];


    item.style.left =
        Math.random() * 100 +
        "vw";


    item.style.fontSize =
        (
            15 +
            Math.random() * 25
        ) +
        "px";


    item.style.animationDuration =
        (
            7 +
            Math.random() * 8
        ) +
        "s";


    document
        .getElementById(
            "floating-items"
        )
        .appendChild(item);


    setTimeout(() => {

        item.remove();

    }, 16000);
}


setInterval(
    createFloatingItem,
    500
);



/* =========================================================
   STARTUP
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        createConfetti(30);

    }
);
