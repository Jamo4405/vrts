function adjustSpacing() {
    const textContainer = document.querySelector('.text-container');
    
    if (window.innerWidth <= 800) {

        textContainer.innerHTML = textContainer.innerHTML
            .replace(/(&nbsp;)+/g, '&nbsp;&nbsp;');
    } else {

        textContainer.innerHTML = `
            <p style="padding: 0px; margin: 0px;">
                <span class="normal-large">Making</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="bar-code">makingvrts</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <p style="padding: 0px; margin: 0px;">
                <span class="bold-large">Supply Chains</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <p style="padding: 0px; margin: 0px;">
                <span class="bar-code">supply</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="normal-large">Transparent</span>
            </p>
        `;
    }
}

window.addEventListener('load', adjustSpacing);

window.addEventListener('resize', adjustSpacing);


