var passion = new Typed(".passion", {
    strings: ["Data Engineer", "Automation", "Python", "SQL"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const toTop = document.querySelector(".top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    }
    else {
        toTop.classList.remove("active");
    }
});

// Calculate Experience from December 2024
function calculateExperience() {
    const startDate = new Date(2024, 11); // December 2024 (0-indexed month)
    const currentDate = new Date();

    let totalMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + (currentDate.getMonth() - startDate.getMonth());

    if (totalMonths < 0) totalMonths = 0;

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    let expString = "";
    if (years > 0) {
        expString += years + (years === 1 ? " yr " : " yrs ");
    }
    if (months > 0) {
        expString += months + (months === 1 ? " mo" : " mos");
    }

    if (expString === "") {
        expString = "Newly Joined";
    }

    // Inject
    const expEl = document.getElementById("experience");
    if (expEl) expEl.innerText = expString.trim();

    const aboutExpEl = document.getElementById("about-experience");
    if (aboutExpEl) aboutExpEl.innerText = expString.trim();
}

calculateExperience();
