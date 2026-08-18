document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       ELEMENTS
    ========================================== */

    const scene1 = document.getElementById("scene1");
    const scene2 = document.getElementById("scene2");
    const scene3 = document.getElementById("scene3");
    const scene4 = document.getElementById("scene4");

    const scene1Button = document.getElementById("scene1Button");
    const scene2Button = document.getElementById("scene2Button");
    const scene3Button = document.getElementById("scene3Button");
    const nextPageButton = document.getElementById("nextPageButton");

    const messageLine1 = document.getElementById("messageLine1");
    const messageLine2 = document.getElementById("messageLine2");
    const messageLine3 = document.getElementById("messageLine3");
    const messageLine4 = document.getElementById("messageLine4");

    const memories = document.querySelectorAll(".memory");

    const music = document.getElementById("page2Music");
    const musicButton = document.getElementById("musicButton");


    /* =========================================
       MESSAGE
       YOU CAN PERSONALIZE THIS LATER
    ========================================== */

    const messages = [
        "There are some people who enter your life...",
        "and somehow make ordinary days feel a little more special.",
        "You're one of those people for me. ❤️",
        "And this little story is my way of showing you why."
    ];


    /* =========================================
       SHOW ONE SCENE
    ========================================== */

    function showScene(scene) {

        const scenes = [
            scene1,
            scene2,
            scene3,
            scene4
        ];

        scenes.forEach(function (item) {
            item.classList.remove("active");
        });

        setTimeout(function () {

            scene.classList.add("active");

        }, 100);

    }


    /* =========================================
       START MUSIC
    ========================================== */

    function startMusic() {

        music.volume = 0.35;

        music.play()
            .then(function () {

                musicButton.style.display = "block";

            })
            .catch(function () {

                musicButton.style.display = "block";

            });

    }


    /* =========================================
       MUSIC BUTTON
    ========================================== */

    musicButton.addEventListener("click", function () {

        if (music.paused) {

            music.play();

            musicButton.textContent = "♫";

        } else {

            music.pause();

            musicButton.textContent = "🔇";

        }

    });


    /* =========================================
       SCENE 1 → SCENE 2
    ========================================== */

    scene1Button.addEventListener("click", function () {

        showScene(scene2);

        startMusic();

        setTimeout(function () {

            messageLine1.textContent = messages[0];
            messageLine1.classList.add("visible");

        }, 700);

        setTimeout(function () {

            messageLine2.textContent = messages[1];
            messageLine2.classList.add("visible");

        }, 1900);

        setTimeout(function () {

            messageLine3.textContent = messages[2];
            messageLine3.classList.add("visible");

        }, 3100);

        setTimeout(function () {

            messageLine4.textContent = messages[3];
            messageLine4.classList.add("visible");

        }, 4300);

        setTimeout(function () {

            scene2Button.classList.add("show");

        }, 5600);

    });


    /* =========================================
       SCENE 2 → SCENE 3
    ========================================== */

    scene2Button.addEventListener("click", function () {

        showScene(scene3);

        setTimeout(function () {

            memories.forEach(function (memory, index) {

                setTimeout(function () {

                    memory.classList.add("visible");

                }, index * 500);

            });

        }, 600);

    });


    /* =========================================
       SCENE 3 → SCENE 4
    ========================================== */

    scene3Button.addEventListener("click", function () {

        showScene(scene4);

    });


    /* =========================================
       SCENE 4 → PAGE 3
    ========================================== */

    nextPageButton.addEventListener("click", function () {

        /*
         * We will connect Page 3 here later.
         */

        alert(
            "Page 3 will be connected here next. ❤️"
        );

    });

});
