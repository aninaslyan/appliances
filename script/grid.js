// script.js
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.slide-in');

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const animateImages = () => {
        images.forEach(image => {
            if (isInViewport(image)) {
                image.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', animateImages);
    window.addEventListener('resize', animateImages); // Also check on resize
    animateImages(); // Initial check
});
