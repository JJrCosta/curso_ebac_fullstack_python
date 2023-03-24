
const logRegStatus = document.querySelector('.form');
const logLink = document.querySelector('.sign-in');
const regLink = document.querySelector('.sign-up');
let verBtn = 1

regLink.addEventListener('click', () => {
    logRegStatus.classList.add('active');
});

logLink.addEventListener('click', () => {
    logRegStatus.classList.remove('active');
});

document.querySelector('.menu-btn').addEventListener('click', () => {
    if (verBtn == 1) {
        document.querySelector('.search-bar').classList.add('active');
        document.querySelector('.nav-container').classList.add('active')
        verBtn = 0
    } else {
        document.querySelector('.search-bar').classList.remove('active');
        document.querySelector('.nav-container').classList.remove('active');
        verBtn = 1
    }
})