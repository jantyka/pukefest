// JavaScript Document

window.addEventListener('scroll', function() {
    let scrollToTop = document.getElementById('scrollToTop');

    if (window.scrollY > 200) {
        scrollToTop.classList.add('show');
    } else {
        scrollToTop.classList.remove('show');
    }
});

document.getElementById('scrollToTop').addEventListener('click', function(e) {
    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
