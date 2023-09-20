// Your code goes here

document.addEventListener('DOMContentLoaded', (event) => {
    let p = document.querySelector('p');
    if (p.textContent === "JavaScript is so cool. It lets me add text to my page programmatically.") {
        p.textContent = "This is really cool!";
    }
})