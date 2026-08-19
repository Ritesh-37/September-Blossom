document.addEventListener("DOMContentLoaded", function () {

    const transition =
        document.getElementById("pageTransition");

    const scenes = [
        document.getElementById("scene1"),
        document.getElementById("scene2"),
        document.getElementById("scene3"),
        document.getElementById("scene4"),
        document.getElementById("scene5"),
        document.getElementById("scene6")
    ];

    const music =
        document.getElementById("page2Music");

    const musicButton =
        document.getElementById("musicButton");

    const musicStatus =
        document.getElementById("musicStatus");


    /* ==============================
       PAGE LOAD
    =============================== */

    setTimeout(function () {

        transition.classList.add("fade-out");

    }, 300);


    /* ==============================
       SCENE SWITCHER
    =============================== */

    function showScene(number) {

        scenes.forEach(function (scene) {

            scene.classList.remove("active");

        });

        setTimeout(function () {

            scenes[number].classList.add("active");

        }, 100);
    }


    /* ==============================
       MUSIC
    =============================== */

    function startMusic() {

        music.volume = 0;

        const promise = music.play();

        if (promise !== undefined) {

            promise.then(function () {

                let volume = 0;

                const fade = setInterval(function () {

                    volume += 0.03;

                    music.volume =
                        Math.min(volume, 0.35);

                    if (volume >= 0.35) {

                        clearInterval(fade);

                    }

                }, 100);

            }).catch(function () {

                // Browser blocked autoplay.
                // User can use the music button.

            });

        }
    }


    /* ==============================
       MUSIC BUTTON
    =============================== */

    musicButton.addEventListener(
        "click",
        function () {

            if (music.paused) {

                music.play();

                musicButton.textContent = "♫";

                musicStatus.textContent =
                    "♫ Music on";

            } else {

                music.pause();

                musicButton.textContent = "🔇";

                musicStatus.textContent =
                    "Music off";

            }

            musicStatus.classList.add("show");

            setTimeout(function () {

                musicStatus.classList.remove("show");

            }, 1800);

        }
    );


    /* ==============================
       CHAPTER 1 → 2
    =============================== */

    document
        .getElementById("chapter1Button")
        .addEventListener("click", function () {

            startMusic();

            showScene(1);

        });


    /* ==============================
       CHAPTER 2 → 3
    =============================== */

    document
        .getElementById("chapter2Button")
        .addEventListener("click", function () {

            showScene(2);

        });


    /* ==============================
       CHAPTER 3 → 4
    =============================== */

    document
        .getElementById("chapter3Button")
        .addEventListener("click", function () {

            showScene(3);

        });


    /* ==============================
       CHAPTER 4 → 5
    =============================== */

    document
        .getElementById("chapter4Button")
        .addEventListener("click", function () {

            showScene(4);

        });


    /* ==============================
       CHAPTER 5 → 6
    =============================== */

    document
        .getElementById("chapter5Button")
        .addEventListener("click", function () {

            showScene(5);

        });


    /* ==============================
       PAGE 3 CONNECTION
    =============================== */

    document
        .getElementById("nextPageButton")
        .addEventListener("click", function () {

            /*
             * We will connect Page 3 here.
             *
             * DO NOT CHANGE THIS YET.
             */

            window.location.href = "page3.html";

        });

});
