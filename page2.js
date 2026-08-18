document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       ELEMENTS
    ========================================== */

    const transition = document.getElementById("pageTransition");

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

    const pauseText = document.getElementById("pauseText");
    const finalText = document.getElementById("finalText");

    const music = document.getElementById("page2Music");
    const musicButton = document.getElementById("musicButton");
    const musicStatus = document.getElementById("musicStatus");


    /* =========================================
       PERSONAL MESSAGE
       EDIT THESE LATER
    ========================================== */

    const messages = [
        "There are some people who enter your life...",

        "and somehow make ordinary days feel a little more special.",

        "You're one of those people for me. ❤️",

        "And this little story is my way of showing you why."
    ];


    /* =========================================
       PAGE LOAD TRANSITION
    ========================================== */

    setTimeout(function () {

        transition.classList.add("fade-out");

    }, 300);


    /* =========================================
       SHOW SCENE
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
       MUSIC
    ========================================== */

    function startMusic() {

        music.volume = 0;

        const playPromise = music.play();

        if (playPromise !== undefined) {

            playPromise
                .then(function () {

                    let volume = 0;

                    const fadeIn = setInterval(function () {

                        volume += 0.03;

                        music.volume = Math.min(volume, 0.35);

                        if (volume >= 0.35) {

                            clearInterval(fadeIn);

                        }

                    }, 100);

                })
                .catch(function () {

                    /*
                     * Some browsers block autoplay.
                     * Music can still be started with
                     * the music button.
                     */

                });
        }
    }


    /* =========================================
       MUSIC BUTTON
    ========================================== */

    musicButton.addEventListener("click", function () {

        if (music.paused) {

            music.play();

            musicButton.textContent = "♫";

            musicStatus.textContent = "♫ Music on";

        } else {

            music.pause();

            musicButton.textContent = "🔇";

            musicStatus.textContent = "Music off";

        }

        musicStatus.classList.add("show");

        setTimeout(function () {

            musicStatus.classList.remove("show");

        }, 1800);

    });


    /* =========================================
       SCENE 1 → SCENE 2
    ========================================== */

    scene1Button.addEventListener("click", function () {

        startMusic();

        showScene(scene2);


        setTimeout(function () {

            messageLine1.textContent = messages[0];

            messageLine1.classList.add("visible");

        }, 700);


        setTimeout(function () {

            messageLine2.textContent = messages[1];

            messageLine2.classList.add("visible");

        }, 2000);


        setTimeout(function () {

            messageLine3.textContent = messages[2];

            messageLine3.classList.add("visible");

        }, 3300);


        setTimeout(function () {

            messageLine4.textContent = messages[3];

            messageLine4.classList.add("visible");

        }, 4600);


        setTimeout(function () {

            scene2Button.classList.add("show");

        }, 5900);

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

                }, index * 550);

            });

        }, 600);

    });


    /* =========================================
       SCENE 3 → SCENE 4
    ========================================== */

    scene3Button.addEventListener("click", function () {

        showScene(scene4);


        setTimeout(function () {

            pauseText.classList.add("show");

        }, 900);


        setTimeout(function () {

            finalText.classList.add("show");

        }, 2200);

    });


    /* =========================================
       SCENE 4 → PAGE 3
    ========================================== */

    nextPageButton.addEventListener("click", function () {

        /*
         * PAGE 3 WILL BE CONNECTED HERE LATER.
         *
         * Do not change this yet.
         */

        alert(
            "Page 3 will be connected here next. ❤️"
        );

    });

});
