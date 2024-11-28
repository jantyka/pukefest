// JavaScript Document

document.addEventListener('DOMContentLoaded', function () {
    let audio = document.getElementById('myAudio');
    let playButton = document.getElementById('playButton');

    playButton.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playButton.innerHTML = '<i class="bi bi-cassette"></i>';
        } else {
            audio.pause();
            playButton.innerHTML = '<i class="bi bi-cassette-fill"></i>';
        }
    });
});
