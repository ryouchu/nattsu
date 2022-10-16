
var scrollAnimationFunc = function() {
    const works_target1 = document.querySelector('.works .title');
    const works_target2 = document.querySelector('.works-list');
    const about_target1 = document.querySelector('.about .title');
    const about_target2 = document.querySelector('.profile-img');
    const about_target3 = document.querySelector('.profile-body');
    const contact_target1 = document.querySelector('.contact .title');
    const contact_target2 = document.querySelector('.contact-body');

    const time_rug = 300;
    var triggerMargin = 200;

    if (window.innerHeight > works_target1.getBoundingClientRect().top + triggerMargin) {
        works_target1.classList.add('fade-in-bottom');
        setTimeout(function(){
            works_target2.classList.add('fade-in-bottom');
        },time_rug);
    }

    if (window.innerHeight > about_target1.getBoundingClientRect().top + triggerMargin) {
        about_target1.classList.add('fade-in-bottom');
        setTimeout(function(){
            about_target2.classList.add('fade-in-bottom');
            setTimeout(function(){
                about_target3.classList.add('fade-in-bottom');
            },time_rug);
        },time_rug);
    }

    if (window.innerHeight > contact_target1.getBoundingClientRect().top + triggerMargin) {
        contact_target1.classList.add('fade-in-bottom');
        setTimeout(function(){
            contact_target2.classList.add('fade-in-bottom');
        },time_rug);
    }
}
window.addEventListener('scroll', scrollAnimationFunc);