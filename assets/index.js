const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Mahasiswa";
    }, 0);
    setTimeout(() => {
        text.textContent = "Airsofter";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Programer";
    }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000)