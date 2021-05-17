const sliders = document.querySelectorAll('.slide-in');

const aboutOptions = {
   threshold: 0 
};
const slideOnScroll = new IntersectionObserver(function(entries, slideOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            slideOnScroll.unobserve(entry.target);
        }
    })
}, aboutOptions);

sliders.forEach(slider=> {
    slideOnScroll.observe(slider);
})