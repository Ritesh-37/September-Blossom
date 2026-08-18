document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       ELEMENTS
    ========================================== */

    const transition =
        document.getElementById("pageTransition");

    const introScreen =
        document.getElementById("introScreen");

    const universe =
        document.getElementById("universe");

    const exploreButton =
        document.getElementById("exploreButton");

    const memoryStars =
        document.querySelectorAll(".memory-star");

    const memoryModal =
        document.getElementById("memoryModal");

    const closeMemory =
        document.getElementById("closeMemory");

    const memoryDone =
        document.getElementById("memoryDone");

    const memoryTitle =
        document.getElementById("memoryTitle");

    const memoryText =
        document.getElementById("memoryText");

    const memoryNumber =
        document.getElementById("memoryNumber");

    const memoryIcon =
        document.getElementById("memoryIcon");

    const progressText =
        document.getElementById("progressText");

    const progressFill =
        document.getElementById("progressFill");

    const universeComplete =
        document.getElementById("universeComplete");

    const continueButton =
        document.getElementById("continueButton");

    const musicButton =
        document.getElementById("musicButton");


    /* =========================================
       MEMORY CONTENT
    ========================================== */

    const memories = [

        {
            title: "Our Beginning",
            icon: "💫",
            text:
                "It all started with something so simple. I sent you a follow request... and one day, you accepted it. Then came one tiny word that started something much bigger than either of us knew... \"Hi.\" ❤️"
        },

        {
            title: "12.03.26",
            icon: "📅",
            text:
                "12.03.26 — the day we started talking. A simple date on a calendar, but one that became the beginning of so many little moments, conversations and memories."
        },

        {
            title: "That First Day",
            icon: "🥹",
            text:
                "One of my favorite little memories... you falling asleep on my lap when we were together for the first day. Maybe it was just a small moment, but it made me feel incredibly lucky."
        },

        {
            title: "A Little Confession",
            icon: "😂",
            text:
                "The first time I heard your voice, I told you that you sounded very young. Looking back... I have absolutely no idea why I thought saying that was a good idea. 😂"
        },

        {
            title: "Something I Love",
            icon: "✨",
            text:
                "I love how charismatic you are. How interactive you are. How full of life you are. You have this energy that makes being around you feel different... and I absolutely love that about you."
        },

        {
            title: "A Secret",
            icon: "❤️",
            text:
                "Here's something I hope you never forget: I'm genuinely blessed to have you as someone so close to me. Around you, I feel comfortable. I feel loved. And you have a very special place in my life."
        }

    ];


    /* =========================================
       STATE
    ========================================== */

    let discovered = 0;

    let currentMemory = null;


    /* =========================================
       PAGE LOAD
    ========================================== */

    setTimeout(function () {

        transition.classList.add("fade-out");

    }, 300);


    /* =========================================
       CREATE BACKGROUND STARS
    ========================================== */

    const starContainer =
        document.getElementById("stars");

    for (let i = 0; i < 80; i++) {

        const star =
            document.createElement("span");

        star.className =
            "background-star";

        star.textContent =
            Math.random() > .8 ? "✦" : "•";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 4 + "s";

        star.style.animationDuration =
            (2 + Math.random() * 4) + "s";

        starContainer.appendChild(star);
    }


    /* =========================================
       ENTER UNIVERSE
    ========================================== */

    exploreButton.addEventListener(
        "click",
        function () {

            introScreen.classList.remove("active");

            setTimeout(function () {

                universe.classList.add("active");

            }, 700);

        }
    );


    /* =========================================
       OPEN MEMORY
    ========================================== */

    memoryStars.forEach(function (star) {

        star.addEventListener(
            "click",
            function () {

                const index =
                    Number(
                        star.dataset.memory
                    );

                currentMemory = index;

                const memory =
                    memories[index];


                memoryTitle.textContent =
                    memory.title;

                memoryIcon.textContent =
                    memory.icon;

                memoryText.textContent =
                    memory.text;

                memoryNumber.textContent =
                    "MEMORY " +
                    String(index + 1).padStart(2, "0");


                memoryModal.classList.add("show");

            }
        );

    });


    /* =========================================
       MARK MEMORY AS DISCOVERED
    ========================================== */

    memoryDone.addEventListener(
        "click",
        function () {

            if (
                currentMemory !== null
                &&
                !memoryStars[currentMemory]
                    .classList
                    .contains("discovered")
            ) {

                memoryStars[currentMemory]
                    .classList
                    .add("discovered");

                discovered++;

                updateProgress();

            }

            closeModal();

        }
    );


    /* =========================================
       PROGRESS
    ========================================== */

    function updateProgress() {

        progressText.textContent =
            discovered +
            " / 6 discovered";

        progressFill.style.width =
            ((discovered / 6) * 100) +
            "%";


        if (discovered === 6) {

            setTimeout(function () {

                universeComplete.classList.add("show");

            }, 900);

        }

    }


    /* =========================================
       CLOSE MODAL
    ========================================== */

    function closeModal() {

        memoryModal.classList.remove("show");

        currentMemory = null;

    }


    closeMemory.addEventListener(
        "click",
        closeModal
    );


    /* =========================================
       CLOSE WHEN CLICKING BACKDROP
    ========================================== */

    memoryModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target.classList
                    .contains("modal-backdrop")
            ) {

                closeModal();

            }

        }
    );


    /* =========================================
       ESC KEY
    ========================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
                &&
                memoryModal.classList.contains("show")
            ) {

                closeModal();

            }

        }
    );


    /* =========================================
       CONTINUE TO PAGE 4
    ========================================== */

    continueButton.addEventListener(
        "click",
        function () {

            universeComplete.classList.remove("show");

            transition.classList.remove("fade-out");

            setTimeout(function () {

                window.location.href =
                    "page4.html";

            }, 900);

        }
    );


    /* =========================================
       MUSIC BUTTON
    ========================================== */

    let musicOn = false;

    musicButton.addEventListener(
        "click",
        function () {

            musicOn = !musicOn;

            if (musicOn) {

                musicButton.textContent =
                    "🔊";

            } else {

                musicButton.textContent =
                    "♫";

            }

        }
    );

});
