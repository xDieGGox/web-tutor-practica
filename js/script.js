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



const modal = document.getElementById("contactModal");
const openModalButtons = document.querySelectorAll(".open-modal");
const closeModal = document.getElementById("closeModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalOverlay = document.getElementById("modalOverlay");

openModalButtons.forEach((button) => {
    button.addEventListener("click", function () {
        modal.classList.add("modal--show");
    });
});

function hideModal() {
    modal.classList.remove("modal--show");
}

closeModal.addEventListener("click", hideModal);
closeModalBtn.addEventListener("click", hideModal);
modalOverlay.addEventListener("click", hideModal);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        hideModal();
    }
});