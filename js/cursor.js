function rotateCross() {
    const cross = document.querySelector('.menu-cross');

    cross.addEventListener('mouseover', () => {
        cross.classList.add('menu-cross-rotate');
    });

    cross.addEventListener('mouseout', () => {
        cross.classList.remove('menu-cross-rotate');
    });
}

document.addEventListener('DOMContentLoaded', rotateCross);
