let audio = document.createElement('audio');
let tocando = false;

// Configurar a fonte de áudio
audio.src = "http://12.stmip.net:8566/stream";
audio.load();

function tocarpausarRadio() {
    if (tocando) {
        pausarRadio();
    } else {
        tocarRadio();
    }
}

function tocarRadio() {
    audio.play();
    tocando = true;
    wave.classList.add('loader');
    document.querySelector('.playpause-track i').classList.remove('fa-play-circle');
    document.querySelector('.playpause-track i').classList.add('fa-pause-circle');
}

function pausarRadio() {
    audio.pause();
    tocando = false;
    wave.classList.remove('loader');
    document.querySelector('.playpause-track i').classList.remove('fa-pause-circle');
    document.querySelector('.playpause-track i').classList.add('fa-play-circle');
}
