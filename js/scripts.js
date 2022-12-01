document.querySelector('.toggle-btn').addEventListener('click', burger);

function burger() {
    document.querySelector('.site-nav').classList.toggle('active');
    document.querySelector('.toggle-btn').classList.toggle('open');
}