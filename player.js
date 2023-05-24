const music = new Audio('audio/01.mp3');

const songsPlayer = [
    {
        id: '01',
        songName: `Sodade <br>
        <div class="subtitle">Cesária Évora</div>`,
        poster: "img/01.jpg"
    },
    {
        id: '02',
        songName: `Nós Morna <br>
        <div class="subtitle">Ildo Lobo</div>`,
        poster: "img/02.jpg"
    },
    {
        id: '03',
        songName: `Fica ma mi <br>
        <div class="subtitle">Tito Paris</div>`,
        poster: "img/03.jpg"
    },
    {
        id: '04',
        songName: `Raquel <br>
        <div class="subtitle">Bau</div>`,
        poster: "img/04.jpg"
    },
    {
        id: '05',
        songName: `Nha Fidjo Matcho <br>
        <div class="subtitle">Bana</div>`,
        poster: "img/05.jpg"
    },
    {
        id: '06',
        songName: `Amor e Mar <br>
        <div class="subtitle">Ildo Lobo</div>`,
        poster: "img/06.jpg"
    },
    {
        id: '07',
        songName: `Mar Azul <br>
        <div class="subtitle">Cesária Évora</div>`,
        poster: "img/07.jpg"
    },
    {
        id: '08',
        songName: `Angola <br>
        <div class="subtitle">Cesária Évora</div>`,
        poster: "img/08.jpg"
    },
    {
        id: '09',
        songName: `Miss Perfumado <br>
        <div class="subtitle">Cesária Évora</div>`,
        poster: "img/09.jpg"
    },
    {
        id: '10',
        songName: `Incondicional <br>
        <div class="subtitle">Ildo Lobo</div>`,
        poster: "img/10.jpg"
    },
    {
        id: '11',
        songName: `Pamodi <br>
        <div class="subtitle">Ildo Lobo</div>`,
        poster: "img/11.jpg"
    }
]

/*Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songsPlayer[i].poster;
    e.getElementsByTagName('img')[0].innerHTML = songsPlayer[i].songName;
});*/

// Player
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill')
        masterPlay.classList.remove('bi-pause-fill');
    }
});

let index = 0;
let poster_master_play = document.getElementById('poster_master_player');
let title = document.getElementById('title');

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playList')).forEach((el) => {
        el.classList.add('bi-play-fill');
        el.classList.remove('bi-pause-fill');  
    });
}

// javascript style 
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((e) => {
        e.style.background = 'rgb(105, 105, 105, .0)';
    })
}

Array.from(document.getElementsByClassName('playList')).forEach((e) => {
    e.addEventListener('click', (al) => {
        index = al.target.id;
    })
});
Array.from(document.getElementsByClassName('playList')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        if (music.paused || music.currentTime <= 0){
            music.play();
            wave.classList.add('active1');
        } else {
            music.pause();
            wave.classList.remove('active1');
        }

        makeAllPlays();
        el.target.classList.remove('bi-play-fill');
        el.target.classList.add('bi-pause-fill');

        let songTitles = songsPlayer.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let {songName} = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)"
    });
})

// Player timer
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    currentStart.innerText = `${min2}:${sec2}`;

    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
})