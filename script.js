document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    for (const link of navLinks) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href') === "#" ? 'header' : event.currentTarget.getAttribute('href').substring(1);
        const targetPosition = document.getElementById(targetId).offsetTop - 70;
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Parallax effect for sections
    window.addEventListener('scroll', function() {
        const parallaxElements = document.querySelectorAll('.parallax');
        parallaxElements.forEach(function(element) {
            let speed = element.getAttribute('data-speed');
            element.style.backgroundPositionY = -(window.pageYOffset * speed) + 'px';
        });
    });
});
