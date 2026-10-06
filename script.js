s
// =============================
// MOBILE MENU
// =============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// =============================
// CURRENT YEAR
// =============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =============================
// SIMPLE SCROLL REVEAL
// =============================

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .education-card"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(25px)";
    card.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(card);

});