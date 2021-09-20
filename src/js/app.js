
document.addEventListener('DOMContentLoaded', function() {
    

    fixedNavigation();
});

function fixedNavigation() {

    const bar = document.querySelector('.header');

    // Registrar el Intersection Observer
    const observer = new IntersectionObserver( function(entries) {
        if(entries[0].isIntersecting) {
            bar.classList.remove('fixed');
        } else {
            bar.classList.add('fixed');
        }
    });

    // Elemento a observar
    observer.observe(document.querySelector('.about-festival'));
}



