const imageSlides = document.querySelectorAll('.image-slide');
const testimonialSlides = document.querySelectorAll('.testimonial-slide');

imageSlides.forEach((elem, idx) => {
    move(imageSlides[idx], testimonialSlides[idx],  idx);
    
});

function move(node1, node2, value) {
    node1.style.transform = `translateX(${(value) * 100}%)`;
    node2.style.transform = `translateX(${(value) * 100}%)`;
}

function moveUp(node1, node2, value) {
    node1.style.transform = `translateY(${(value * -1) * 100}%)`
    node2.style.transform = `translateY(${(value * -1) * 100}%)`
}

const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
console.log(nextButton)

let currentSlide = 0;

nextButton.addEventListener('click', function() {
    if(currentSlide === 1) {
        currentSlide = 0;
    }else {
        currentSlide++;
    }

    imageSlides.forEach((elem, idx) => {
        move(imageSlides[idx], testimonialSlides[idx], (idx - currentSlide));
    })
});

prevButton.addEventListener('click', function() {
    if(currentSlide === 0) {
        currentSlide = 1;
    }else {
        currentSlide--;
    }

    imageSlides.forEach((elem, idx) => {
        move(imageSlides[idx], testimonialSlides[idx], (idx - currentSlide));
    })
});