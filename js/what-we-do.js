
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: '.intro',
    start: 'top top',
    end: '+=100%',
    pin: true,
    scrub: true,
    markers: false 
});

gsap.to('.inner-text span', {
    opacity: 1, 
    y: 0, 
    stagger: 0.2, 
    scrollTrigger: {
        trigger: '.intro',
        start: 'top top',
        end: 'bottom top',
        scrub: true 
    }
});

gsap.to('.eu-dpp-badge', {
    opacity: 1, 
    y: 0, 
    scrollTrigger: {
        trigger: '.intro',
        start: 'top top',
        end: '90% top',
        scrub: true 
    }
});

ScrollTrigger.create({
    trigger: '.intro', 
    start: 'top top',
    end: '30% top', 
    onEnter: () => {
        document.querySelectorAll('.navbar-left, .navbar-center, .navbar-right').forEach((el) => {
            el.classList.remove('with-border');
        });
    },
    onLeaveBack: () => {
        document.querySelectorAll('.navbar-left, .navbar-center, .navbar-right').forEach((el) => {
            el.classList.add('with-border'); 
        });
    },
    markers: false 
});

gsap.to('.navbar-center', {
    opacity: 0,
    scale: 0.9,
    y: -40,
    scrollTrigger: {
        trigger: '.intro',
        start: 'top top',
        end: '30% top',
        scrub: true,
        markers: false
    }
});

gsap.to('.logo-name', {
    opacity: 0,
    scale: 0.7,
    y: -20,
    scrollTrigger: {
        trigger: '.intro',
        start: 'top top',
        end: '5% top',
        scrub: true,
        markers: false
    }
});

gsap.to('.the-logo', {
    x: '2.4vw',
    scrollTrigger: {
        trigger: '.intro',
        start: 'top top',
        end: '15% top',
        scrub: true,
        markers: false
    }
});

gsap.to('.navbar-right', {
    x: '-7.5vw',
    ease: 'linear',
    scrollTrigger: {
        trigger: '.intro',
        start: 'top top',
        end: '15% top',
        scrub: true,
        markers: false
    }
});

const cursor = document.querySelector('.custom-cursor');
const introSection = document.querySelector('.intro');
const imageSection = document.querySelector('.intro-image');
const middleSection = document.querySelector('.middle');
const afterSection = document.querySelector('.middle-after');
const theEnd = document.querySelector('.middle-end');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
    });
});

introSection.addEventListener('mouseenter', () => {
    cursor.textContent = '↓';
    gsap.to(cursor, { opacity: 1, scale: 1.2, duration: 0.2 });
    introSection.classList.add('no-arrow')

});

introSection.addEventListener('mouseleave', () => {
    gsap.to(cursor, { opacity: 0, scale: 1, duration: 0.2 });
    introSection.classList.remove('no-arrow')

});

imageSection.addEventListener('mouseenter', () => {
    cursor.textContent = 'Our solutions seamlessly integrate with any product, from clothing and pharmaceuticals to furniture.';
    cursor.classList.add('no-border')
    gsap.to(cursor, { opacity: 1, scale: 1.2, duration: 0.2 });
});

imageSection.addEventListener('mouseleave', () => {
    gsap.to(cursor, { opacity: 0, scale: 1, duration: 0.2 });
    cursor.classList.remove('no-border')
});

middleSection.addEventListener('mouseenter', () => {
    cursor.textContent = '✢';
    gsap.to(cursor, { opacity: 1, scale: 1.2, duration: 0.2 });
    cursor.classList.add('other-border')
});

middleSection.addEventListener('mouseleave', () => {
    gsap.to(cursor, { opacity: 0, scale: 1, duration: 0.2 });
    cursor.classList.remove('other-border')
});

afterSection.addEventListener('mouseenter', () => {
    cursor.textContent = '✺';
    gsap.to(cursor, { opacity: 1, scale: 1.2, duration: 0.2 });
    cursor.classList.add('other-border-tri')
});

afterSection.addEventListener('mouseleave', () => {
    gsap.to(cursor, { opacity: 0, scale: 1, duration: 0.2 });
    cursor.classList.remove('other-border-tri')
});

theEnd.addEventListener('mouseenter', () => {
    cursor.textContent = '✦';
    gsap.to(cursor, { opacity: 1, scale: 1.2, duration: 0.2 });
    cursor.classList.add('other-border-tri-f')
});

theEnd.addEventListener('mouseleave', () => {
    gsap.to(cursor, { opacity: 0, scale: 1, duration: 0.2 });
    cursor.classList.remove('other-border-tri-f')
});



