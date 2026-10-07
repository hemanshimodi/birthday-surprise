/* ---------------- PAGE NAVIGATION ---------------- */

function nextPage(pageNumber) {

    // Hide all pages
    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });


    // Show selected page
    document.getElementById("page" + pageNumber)
        .classList.add("active");


    // Start typing message when page 3 opens
    if (pageNumber === 3) {

        startTyping();

    }

}


/* ---------------- TYPING MESSAGE ---------------- */

const message = `
Happy Birthday to one of the most handsome person of my life! 💗 😌

You do mean a lot to me but meri YAADDAASH KAMJOR HAI!! , nahi yaad rehte bdays yaar!!

I'm really grateful for all the random conversations, laughs, chaos and little moments we've shared.

I hope this new year of your life will be full of 100s of varities of food 😂🎂

Keep smiling, keep being your amazing self, and please never change the romantic person you are. 🫶😂

One more thing, if you dont know what to reply to this...pls rehne dena mat karna!!, Your replies are insensitive as hell!!😭😒
Happy Birthday once again! 🌷

`;


let typingStarted = false;


function startTyping() {

    if (typingStarted) return;

    typingStarted = true;

    const textElement =
        document.getElementById("typingText");

    let index = 0;


    function type() {

        if (index < message.length) {

            textElement.innerHTML +=
                message.charAt(index);

            index++;

            setTimeout(type, 25);

        }

    }


    type();

}


/* ---------------- FLIP CARDS ---------------- */

function flipCard(card) {

    card.classList.toggle("flipped");

}


/* ---------------- GIFT ---------------- */

function openGift() {

    const gift =
        document.querySelector(".gift");

    gift.classList.add("open");


    document.getElementById("giftText").innerHTML =
        "🎊 SURPRISE! 🎊<br><br>" +
        "You're officially one year more useless and amazing! 💗🙃";


    createConfetti();


    setTimeout(function() {

        nextPage(6);

    }, 2500);

}


/* ---------------- FLOATING HEARTS ---------------- */

function createHearts() {

    const container =
        document.querySelector(".hearts");


    const heartSymbols = [
        "💗",
        "💕",
        "💖",
        "💓",
        "🌸",
        "✨"
    ];


    setInterval(function() {

        const heart =
            document.createElement("span");


        heart.innerHTML =
            heartSymbols[
                Math.floor(
                    Math.random() * heartSymbols.length
                )
            ];


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.animationDuration =
            (5 + Math.random() * 5) + "s";


        heart.style.fontSize =
            (15 + Math.random() * 20) + "px";


        container.appendChild(heart);


        setTimeout(function() {

            heart.remove();

        }, 10000);


    }, 700);

}


createHearts();


/* ---------------- CONFETTI ---------------- */

function createConfetti() {

    const confettiSymbols = [
        "🎉",
        "🎊",
        "✨",
        "💗",
        "💕",
        "🌸"
    ];


    for (let i = 0; i < 60; i++) {

        const confetti =
            document.createElement("div");


        confetti.innerHTML =
            confettiSymbols[
                Math.floor(
                    Math.random() *
                    confettiSymbols.length
                )
            ];


        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-30px";

        confetti.style.fontSize =
            (15 + Math.random() * 20) + "px";

        confetti.style.zIndex = "999";

        confetti.style.pointerEvents = "none";


        document.body.appendChild(confetti);


        const fall =
            confetti.animate(

                [
                    {
                        transform:
                            "translateY(0) rotate(0deg)"
                    },

                    {
                        transform:
                            `translateY(110vh) rotate(${Math.random() * 720}deg)`
                    }
                ],

                {
                    duration:
                        2500 + Math.random() * 2500,

                    easing: "ease-out"
                }

            );


        fall.onfinish = function() {

            confetti.remove();

        };

    }

}