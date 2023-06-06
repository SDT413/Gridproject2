const images = document.querySelectorAll('img');

images.forEach(img => {
    img.onclick = function () {
        this.classList.toggle('spin');
    }
});