window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');



    const musicContainer = document.querySelector('.music-container');
    const playBtn = document.querySelector('#play');
    const prevBtn = document.querySelector('#prev');
    const nextBtn = document.querySelector('#next');
    const audio = document.querySelector('#audio');
    const progress = document.querySelector('.progress');
    const progressContainer = document.querySelector('.progress-container');
    const title = document.querySelector('#title');
    const cover = document.querySelector('#cover');

    const songs = ['hey', 'summer', 'ukulele']

    


    let songIndex = 2;

    loadSong(songs[songIndex])


    function loadSong(song) {

        title.innerText = song;
        audio.src = `music/${song}.mp3`
        cover.src = `images/${song}.jpg`






    }

    function playSong() {

         musicContainer.classList.add('play');
         playBtn.querySelector('i.fas').classList.remove('fa-play');
         playBtn.querySelector('i.fas').classList.add('fa-pause');

         audio.play();
    }

    function pauseSong() {

        playBtn.querySelector('i.fas').classList.remove('fa-pause');
        playBtn.querySelector('i.fas').classList.add('fa-play');
        musicContainer.classList.remove('play');

        audio.pause()

    


    }

    function prevSong() {

        songIndex --;

        if(songIndex < 0){

            songIndex = songs.length - 1;
        }

        loadSong(songs[songIndex]);
        playSong();


    }


    function nextSong() {

        songIndex ++;

        if(songIndex >= songs.length){

            songIndex = 0;
        }

        loadSong(songs[songIndex]);
        playSong();


    }


    function setProgress(event){

        const width = this.clientWidth
        const clickX = event.offsetX
        const duration = audio.duration

        audio.currentTime = (clickX / width) * duration;


    }

    function updateProgress(event) {

        const {duration, currentTime} = event.srcElement
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`


    }

    



    playBtn.addEventListener('click', () => {

        const isPlaying = musicContainer.classList.contains('play');

        if(isPlaying) {

            pauseSong()
        } else {

            playSong()
        }
    })


    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);
    audio.addEventListener('timeupdate', updateProgress);

    progressContainer.addEventListener('click', setProgress)


    audio.addEventListener('ended', nextSong)

    

});
