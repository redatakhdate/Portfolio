/* ================= toggle style switcher ========================== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide style switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

/* ================= toggle style switcher ========================== */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

/* ================= theme light and dark mode ========================== */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});

// Set default styles on load
window.addEventListener("load", () => {
    // Ensure the default theme is light (white)
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
    }

    // Activate the fourth color style
    const fourthColor = alternateStyles[3]; // Assuming styles are indexed from 0
    if (fourthColor) {
        fourthColor.removeAttribute("disabled");
    }
    
    // Update icon based on the current theme
    dayNight.querySelector("i").classList.add("fa-moon");
});
