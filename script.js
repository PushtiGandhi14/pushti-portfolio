// =====================================
// PUSHTI GANDHI PORTFOLIO JAVASCRIPT
// =====================================


// =====================================
// MOBILE MENU
// =====================================

const menuBtn = document.getElementById("menuBtn");

const navMenu = document.getElementById("navMenu");


menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {

        menuBtn.textContent = "✕";

    } else {

        menuBtn.textContent = "☰";

    }

});


// Close menu when link is clicked

const navLinks =
    document.querySelectorAll("#navMenu a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("open");

        menuBtn.textContent = "☰";

    });

});



// =====================================
// DARK / LIGHT MODE
// =====================================

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";

    }

});



// =====================================
// TYPING ANIMATION
// =====================================

const typingText =
    document.getElementById("typingText");


const words = [

    "Software Developer.",

    "Web Developer.",

    "Programmer.",

    "Problem Solver."

];


let wordIndex = 0;

let letterIndex = 0;

let deleting = false;


function typingAnimation() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                letterIndex
            );

        letterIndex++;


        if (
            letterIndex >
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typingAnimation,
                1200
            );

            return;

        }

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                letterIndex
            );

        letterIndex--;


        if (letterIndex < 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1)
                % words.length;

            letterIndex = 0;

        }

    }


    setTimeout(

        typingAnimation,

        deleting ? 60 : 100

    );

}


typingAnimation();



// =====================================
// CURRENT YEAR
// =====================================

document.getElementById("year")
    .textContent =
    new Date().getFullYear();



// =====================================
// ACTIVE NAVIGATION
// =====================================

window.addEventListener(
    "scroll",
    function () {

        const sections =
            document.querySelectorAll(
                "section[id]"
            );


        let currentSection = "home";


        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 200;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    currentSection =
                        section.id;

                }

            }
        );


        navLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute("href") ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);