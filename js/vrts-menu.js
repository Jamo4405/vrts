const menuInfo = {
    "Solutions": {
        title: "SOLUTIONS",
        content: [
            "<a href='what-we-do.html' class='menu-link'><div class='menu-item physical'>Physical</div></a>", 
            "<div class='menu-item digital'>Digital</div>", 
            "<div class='menu-item finance'>Finance</div>"
        ],
        text: "We’re creating tools to make anything verifiable, starting with physical products. By tokenizing items on-chain, we enable anyone, anywhere to access information like ownership history, authenticity, warranties, and unique brand experiences."
    },
    "Our Tech": {
        title: "OUR TECH",
        content: [
            "<div class='menu-item blockchain'>Blockchain</div>", 
            "<div class='menu-item partners'>Partners</div>"
        ],
        text: "We leverage hyper-scalable public and private blockchains, seamlessly integrated into the background. By eliminating front-end complexity, we deliver systems that are fully immutable and transparent."
    },
    "About Us": {
        title: "ABOUT US",
        content: [
            "<div class='menu-item mission'>The Mission</div>", 
            "<div class='menu-item philosophy'>Our Philosophy</div>"
        ],
        text: "Learn about our ethos and our mission."
    }
}

function menuPopUp() {
    const navbarElements = document.querySelectorAll('.navbar-center .nav-text');
    const theMenu = document.querySelector('.menu-div');
    const menuText = document.querySelector('.line-div-text');
    const header = document.querySelector('.header-not-active');
    const navbar = document.querySelector('.navbar');
    const menuIcon = document.querySelector('.menu-cross');
    const mainMenu = document.querySelector('.main-menu-hidden');

    let isMenuVisible = false;
    let isMainMenuVisible = false;

    navbarElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            const menuItem = element.textContent.trim();

            if (isMainMenuVisible) {
                mainMenu.classList.remove('main-menu-appear');
                isMainMenuVisible = false;
            }

            if (menuInfo[menuItem]) {
                theMenu.innerHTML = '';
                const menuHtml = `
                    <div class="dynamic-container">
                        <div class='menu-title'>${menuInfo[menuItem].title}</div>
                        ${menuInfo[menuItem].content.join('')}
                    </div>
                `;
                theMenu.innerHTML = menuHtml;

                menuText.innerHTML = '';
                const text = `
                    <p class="line-div-text-in-text">
                        ${menuInfo[menuItem].text}
                    </p>
                `;
                menuText.innerHTML = text;
            }

            header.classList.add('header-active');
            isMenuVisible = true;
        });

        element.addEventListener('mouseout', () => {
            if (!navbar.matches(':hover') && !header.matches(':hover')) {
                header.classList.remove('header-active');
                theMenu.innerHTML = '';
                menuText.innerHTML = '';
                isMenuVisible = false;
            }
        });
    });

    menuIcon.addEventListener('mouseover', () => {

        if (isMenuVisible) {
            header.classList.remove('header-active');
            theMenu.innerHTML = '';
            menuText.innerHTML = '';
            isMenuVisible = false;
        }

        mainMenu.classList.add('main-menu-appear');
        isMainMenuVisible = true;
    });

    mainMenu.addEventListener('mouseout', (event) => {

        if (!mainMenu.contains(event.relatedTarget) && 
            !navbar.matches(':hover') && 
            !header.matches(':hover') && 
            !menuIcon.matches(':hover')) {
            mainMenu.classList.remove('main-menu-appear');
            isMainMenuVisible = false;
        }
    });

    navbar.addEventListener('mouseover', () => {
        if (isMenuVisible) {
            header.classList.add('header-active');
        }
        if (isMainMenuVisible) {
            mainMenu.classList.add('main-menu-appear');
        }
    });

    header.addEventListener('mouseover', () => {
        if (isMenuVisible) {
            header.classList.add('header-active');
        }
    });

    document.addEventListener('mouseover', (event) => {
        const isInMenuArea = 
            navbar.contains(event.target) || 
            header.contains(event.target) || 
            mainMenu.contains(event.target) || 
            menuIcon.contains(event.target);

        if (!isInMenuArea) {

            header.classList.remove('header-active');
            theMenu.innerHTML = '';
            menuText.innerHTML = '';
            mainMenu.classList.remove('main-menu-appear');
            isMenuVisible = false;
            isMainMenuVisible = false;
        }
    });

    navbar.addEventListener('mouseout', () => {
        if (!header.matches(':hover') && !navbar.matches(':hover')) {
            header.classList.remove('header-active');
            theMenu.innerHTML = '';
            menuText.innerHTML = '';
            isMenuVisible = false;
        }
    });

    header.addEventListener('mouseout', () => {
        if (!navbar.matches(':hover') && !header.matches(':hover')) {
            header.classList.remove('header-active');
            theMenu.innerHTML = '';
            menuText.innerHTML = '';
            isMenuVisible = false;
        }
    });
}

function menuOnPhone() {

    const phoneMenu = document.querySelector('.menu-cross')
    const mainMenu = document.querySelector('.main-menu-hidden');

    let tick = 0;

    phoneMenu.addEventListener('click', () => {
        if (tick % 2 === 0) {
            mainMenu.classList.add('main-menu-appear')
            phoneMenu.classList.add('menu-cross-rotate');
            tick++
        } else if (tick % 2 !== 0) {
            mainMenu.classList.remove('main-menu-appear')
            phoneMenu.classList.remove('menu-cross-rotate');
            tick++
        }
    })
}

function initializeMenu() {
    if (window.innerWidth > 550) {
        menuPopUp();
    } else {
        menuOnPhone();
    }
}

document.addEventListener('DOMContentLoaded', initializeMenu);

window.addEventListener('resize', initializeMenu);

function handleMenuClicks() {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {

            menuItems.forEach(el => el.classList.remove('active'));

            item.classList.add('active');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 550) {
        handleMenuClicks();
    }
});

window.addEventListener('resize', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    if (window.innerWidth <= 550) {
        handleMenuClicks();
    } else {

        menuItems.forEach(item => item.classList.remove('active'));
    }
});
