function titleModify() {
    const theTitle = document.querySelector("title");
    const originalTitle = theTitle.textContent;
    let currentTitle = originalTitle;
    
    function removeOneVowel() {

        const vowelMatch = currentTitle.match(/[aeiou]/i);
        if (vowelMatch) {
            const index = currentTitle.search(/[aeiou]/i);
            currentTitle = currentTitle.slice(0, index) + currentTitle.slice(index + 1);
            theTitle.textContent = currentTitle;
        }
    }
    
    setInterval(removeOneVowel, 1000);
}

window.onload = titleModify;

