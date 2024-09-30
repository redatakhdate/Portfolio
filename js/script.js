/* ================= typing animation ========================== */
var typed = new Typed(".typing",{
    strings: ["", "Software Engineer", "Data Scientist", "Data Analyst"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
/* ================= Aside ========================== */
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length;

// Function to handle click events
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");

    a.addEventListener("click", function () {
        // Reset all links to the default base color and remove active class
        for (let j = 0; j < totalNavList; j++) {
            navList[j].querySelector("a").classList.remove("active");
            navList[j].querySelector("a").style.color = ""; // Reset to default color
        }

        // Add active class to the clicked nav link
        this.classList.add("active");

        // Apply active style color to the clicked link
        const activeStyle = document.querySelector(".alternate-style:not([disabled])");
        const activeColor = activeStyle ? activeStyle.getAttribute("data-color") : "#ff0000"; // Default color if no active style is set

        this.style.color = activeColor;
    });
}

// Function to handle scroll events
window.addEventListener("scroll", () => {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (let i = 0; i < totalNavList; i++) {
        const section = document.querySelector(navList[i].querySelector("a").getAttribute("href"));

        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            // Reset all links to default base color and remove active class
            for (let j = 0; j < totalNavList; j++) {
                navList[j].querySelector("a").classList.remove("active");
                navList[j].querySelector("a").style.color = ""; // Reset to default color
            }

            // Add active class to the currently viewed section's link
            navList[i].querySelector("a").classList.add("active");

            // Apply active style color to the active link
            const activeStyle = document.querySelector(".alternate-style:not([disabled])");
            const activeColor = activeStyle ? activeStyle.getAttribute("data-color") : "#ff0000"; // Default color if no active style is set

            navList[i].querySelector("a").style.color = activeColor;
        }
    }
});

