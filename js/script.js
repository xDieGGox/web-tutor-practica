const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");

burgerBtn.addEventListener("click", function () {
    navMenu.classList.toggle("header__nav--active");
});


const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("reveal--active");
        }
    });
}, {
    threshold: 0.2
});

revealElements.forEach((element) => {
    observer.observe(element);
});