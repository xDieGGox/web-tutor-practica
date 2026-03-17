const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");

burgerBtn.addEventListener("click", function () {
    navMenu.classList.toggle("header__nav--active");
});
