const closeF = document.querySelector('.closed');
const openF = document.querySelector('.open');
const speakFace = document.querySelector('.speak');
const faceF = document.querySelector('.faced');

closeF.addEventListener('click', () => {
    if (openF.classList.contains('open')) {
        openF.classList.add('active');
        closeF.classList.remove('active');
    }
});
openF.addEventListener('click', () => {
    if (closeF.classList.contains('closed')) {
        closeF.classList.add('active');
        openF.classList.remove('active');
    }
});

speakFace.addEventListener('click', () => {
    if (faceF.classList.contains('faced')) {
        faceF.classList.add('active');
        speakFace.classList.remove('active');
    }
});
faceF.addEventListener('click', () => {
    if (speakFace.classList.contains('speak')) {
        speakFace.classList.add('active');
        faceF.classList.remove('active');
    }
})