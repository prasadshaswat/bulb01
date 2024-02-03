// Get references to elements
let audio = document.getElementById('clickaudio');
let check = document.getElementById('check');
let body = document.querySelector('body');
check.addEventListener('click', () => {
    body.classList.toggle('lighton');

    if (check.checked) {
        audio.play();
    }
});
