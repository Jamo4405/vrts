
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
    x: '7.5vw',
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


