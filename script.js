let curr_track = document.createElement('audio');
let isPlaying = false;

// Configurar a fonte de áudio
curr_track.src = "http://12.stmip.net:8566/stream";
curr_track.load();

function playpauseTrack() {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
}

function playTrack() {
    curr_track.play();
    isPlaying = false;
    //wave.classList.add('loader');
    document.querySelector('.playpause-track i').classList.remove('fa-play-circle');
    document.querySelector('.playpause-track i').classList.add('fa-pause-circle');
}

function pauseTrack() {
    curr_track.pause();
    isPlaying = false;
    document.querySelector('.playpause-track i').classList.remove('fa-pause-circle');
    document.querySelector('.playpause-track i').classList.add('fa-play-circle');
}

// Outras funções e manipulação de elementos podem ser removidas
