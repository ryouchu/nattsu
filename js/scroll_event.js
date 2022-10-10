
var scrollAnimationFunc = function() {
    const target1 = document.querySelector('.works .container');
    const target2 = document.querySelector('.about .container');
    const target3 = document.querySelector('.contact .container');
    var triggerMargin = 300;
    if (window.innerHeight > target1.getBoundingClientRect().top + triggerMargin) {
        target1.classList.add('fade-in-bottom');
    }
    if (window.innerHeight > target2.getBoundingClientRect().top + triggerMargin) {
        target2.classList.add('fade-in-bottom');
    }
    if (window.innerHeight > target3.getBoundingClientRect().top + triggerMargin - 100) {
        target3.classList.add('fade-in-bottom');
    }
}
// window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);