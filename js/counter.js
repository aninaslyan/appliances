// script.js
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the number, the faster the count

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;

                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 50);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
    };

    const handleScroll = () => {
        const section = document.querySelector('.counter-container');
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = sectionTop - window.innerHeight < 0;

        if (sectionVisible) {
            animateCounters();
            window.removeEventListener('scroll', handleScroll);
        }
    };

    window.addEventListener('scroll', handleScroll);
});
