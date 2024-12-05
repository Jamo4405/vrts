const menuInfo = {
    "Solutions": {
        title: "SOLUTIONS",
        content: [
            "<div class='menu-item physical'>Physical</div>", 
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

    let isMenuVisible = false;

    navbarElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            const menuItem = element.textContent.trim();

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

    navbar.addEventListener('mouseover', () => {
        if (isMenuVisible) {
            header.classList.add('header-active');
        }
    });

    header.addEventListener('mouseover', () => {
        if (isMenuVisible) {
            header.classList.add('header-active');
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

document.addEventListener('DOMContentLoaded', menuPopUp);







