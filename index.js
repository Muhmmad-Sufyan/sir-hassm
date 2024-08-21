
let currentSlide = 0;
const totalSlides = document.querySelectorAll('.carousel-item').length;
const carousel = document.getElementById('carousel');
const circles = document.querySelectorAll('.circle');

function updateActiveCircle() {
    circles.forEach((circle, index) => {
        if (index === currentSlide) {
            circle.classList.add('bg-[#c2ff00]', 'border-0');
        } else {
            circle.classList.remove('bg-[#c2ff00]', 'border-0');
            circle.classList.add('border-[1px]');
        }
    });
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    const offset = currentSlide * -100;
    carousel.style.transform = `translateX(${offset}%)`;
    updateActiveCircle();
    resetAutoSlide();
}

function autoSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
}

let autoSlideInterval = setInterval(autoSlide, 3000);

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 3000);
}
