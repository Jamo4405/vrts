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

if (window.innerWidth > 375) {
    document.addEventListener('DOMContentLoaded', rotateCross)
}