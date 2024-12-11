function rotateCross() {
    const cross = document.querySelector('.menu-cross');

    console.log('rotate')

    cross.addEventListener('mouseover', () => {
        cross.classList.add('menu-cross-rotate');
    });

    cross.addEventListener('mouseout', () => {
        cross.classList.remove('menu-cross-rotate');
    });
}

if (window.innerWidth > 550) {
    document.addEventListener('DOMContentLoaded', () => {
        rotateCross();
        initCursor();
    })
}

function initCursor() {
    const cursor = document.querySelector('.the-custom-cursor');
    const introSection = document.querySelector('body');

    cursor.textContent = '✦'; 

    if (cursor && introSection) {

        cursor.style.opacity = 1;
        cursor.style.position = 'absolute'; 
        cursor.style.pointerEvents = 'none';

        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
            });
        });

        introSection.addEventListener('mouseenter', () => {
            gsap.to(cursor, { opacity: 1, scale: 1.2, duration: 0.2 });
            introSection.classList.add('no-arrow'); 
        });

        introSection.addEventListener('mouseleave', () => {
            gsap.to(cursor, { opacity: 0, scale: 1, duration: 0.2 });
            introSection.classList.remove('no-arrow'); 
        });

        introSection.addEventListener('mouseover', () => {
            gsap.to(cursor, { opacity: 1, duration: 0.2 });
        });

        introSection.addEventListener('mouseout', () => {
            gsap.to(cursor, { opacity: 0, duration: 0.2 });
        });
    }
}