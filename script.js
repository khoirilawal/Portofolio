/* =====================================================
   KHOIRIL AWAL PORTFOLIO V2
   JAVASCRIPT
===================================================== */


/* ================= PRELOADER ================= */

window.addEventListener("load", () => {

    const preloader = document.querySelector(".preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 800);

});


/* ================= CUSTOM CURSOR ================= */

const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (event) => {

    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;

    cursorDot.style.left = `${event.clientX}px`;
    cursorDot.style.top = `${event.clientY}px`;

});


const interactiveElements = document.querySelectorAll(
    "a, button, input, textarea"
);


interactiveElements.forEach(element => {

    element.addEventListener("mouseenter", () => {

        cursor.style.width = "55px";
        cursor.style.height = "55px";

        cursor.style.background = "rgba(124,92,255,0.08)";

    });


    element.addEventListener("mouseleave", () => {

        cursor.style.width = "35px";
        cursor.style.height = "35px";

        cursor.style.background = "transparent";

    });

});


/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

    document.body.classList.toggle("menu-open");


    const icon = menuButton.querySelector("i");

    if (mobileMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


const mobileLinks = document.querySelectorAll(
    ".mobile-menu a"
);


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        document.body.classList.remove("menu-open");

        const icon = menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* ================= DARK / LIGHT MODE ================= */

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("portfolioTheme");


if (savedTheme === "light") {

    document.body.classList.add("light-mode");

}


function updateThemeIcon() {

    const icon =
        themeToggle.querySelector("i");


    if (document.body.classList.contains("light-mode")) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

    }

}


updateThemeIcon();


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");


    const isLight =
        document.body.classList.contains("light-mode");


    localStorage.setItem(
        "portfolioTheme",
        isLight ? "light" : "dark"
    );


    updateThemeIcon();

});


/* ================= TYPING EFFECT ================= */

const typingText =
    document.getElementById("typingText");


const words = [
    "Pelajar Kreatif",
    "Crew Multimedia",
    "Desainer",
    "Dokumentator",
    "Digital Creator",
    "Technology Enthusiast"
];


let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1600);

            return;

        }

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 50 : 90
    );

}


typeEffect();


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= SKILL ANIMATION ================= */

const skillBoxes =
    document.querySelectorAll(".skill-box");


const skillObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    skillObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.3
        }

    );


skillBoxes.forEach(skill => {

    skillObserver.observe(skill);

});


/* ================= COUNTER ================= */

const counters =
    document.querySelectorAll(".counter");


const counterObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }


                const counter =
                    entry.target;


                const target =
                    Number(
                        counter.dataset.target
                    );


                let current = 0;


                const increment =
                    target / 50;


                const updateCounter = () => {

                    current += increment;


                    if (current < target) {

                        counter.textContent =
                            Math.ceil(current);

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        counter.textContent =
                            target + "+";

                    }

                };


                updateCounter();


                counterObserver.unobserve(
                    counter
                );

            });

        },

        {
            threshold: 0.5
        }

    );


counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* ================= ACTIVE NAVBAR ================= */

const sections =
    document.querySelectorAll("section[id]");


const navLinks =
    document.querySelectorAll(".nav-link");


function updateActiveNav() {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 200;


        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);


updateActiveNav();


/* ================= BACK TO TOP ================= */

const backTop =
    document.getElementById("backTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================= GALLERY MODAL ================= */

const galleryButtons =
    document.querySelectorAll(".gallery-view");


const imageModal =
    document.getElementById("imageModal");


const modalImage =
    document.getElementById("modalImage");


const modalClose =
    document.getElementById("modalClose");


galleryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const image =
            button.dataset.image;


        modalImage.src = image;


        imageModal.classList.add("active");

        document.body.classList.add("menu-open");

    });

});


function closeModal() {

    imageModal.classList.remove("active");

    document.body.classList.remove("menu-open");

}


modalClose.addEventListener(
    "click",
    closeModal
);


imageModal.addEventListener(
    "click",
    event => {

        if (event.target === imageModal) {

            closeModal();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            imageModal.classList.contains("active")
        ) {

            closeModal();

        }

    }
);


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();


        const email =
            document.getElementById("email").value.trim();


        const message =
            document.getElementById("message").value.trim();


        if (!name || !email || !message) {

            alert(
                "Silakan lengkapi semua data terlebih dahulu."
            );

            return;

        }


        const whatsappNumber =
            "6285878884169";


        const whatsappText =
            `Halo Khoiril Awal!%0A%0A` +

            `Nama: ${name}%0A` +

            `Email: ${email}%0A%0A` +

            `Pesan:%0A${message}`;


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${whatsappText}`;


        window.open(
            whatsappURL,
            "_blank"
        );


        contactForm.reset();

    }
);


/* ================= IMAGE ERROR HANDLER ================= */

const galleryImages =
    document.querySelectorAll(
        ".gallery-item img"
    );


galleryImages.forEach(image => {

    image.addEventListener("error", () => {

        image.style.background =
            "linear-gradient(135deg,#17171f,#30245c)";

        image.style.objectFit = "contain";

    });

});


/* ================= CONSOLE ================= */

console.log(
    "%cKhoiril Awal Portfolio V2",
    "color:#7c5cff;font-size:20px;font-weight:bold;"
);

console.log(
    "Multimedia • Design • Documentation • Technology"
);