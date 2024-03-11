// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active");
}))

// Main gallery image slider
const slides = document.querySelectorAll('#gallery .slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('showing');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('showing');
}

setInterval(nextSlide, 5000);

// progress bar 

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                document.querySelector('.progress-bar').style.strokeDashoffset = '314'; // Change '157' based on the percentage you want to show
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.6 }
);

observer.observe(document.querySelector('.donation-card'));

  