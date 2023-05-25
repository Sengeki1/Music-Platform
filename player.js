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

// display playlist
const categories = [...new Set(songsPlayer.map((item) => {return item}))]

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var {id, poster, songName} = item;
        return(
            `<li class="songItem">
                <i class="bi playList bi-play-fill" id="${id}"></i>
                <span>${id}</span>
                <img src="${poster}" alt="">
                <h5>
                    ${songName}
                </h5>
            </li>`
        )
    }).join('')
};
displayItem(categories);

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
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    // bar
    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value > 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

// next & back player
let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    } else if (index == 10){
        index = 10;
    }else index = `0${index}`;

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

    let songTitles = songsPlayer.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)"
    
    makeAllPlays();
});

next.addEventListener('click', () => {
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
        index = `0${index}`;
    } else if (index > 9){
        index = `${index}`;
    }else index = `0${index}`;

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

    let songTitles = songsPlayer.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)"
    
    makeAllPlays();
});

document.getElementById('input_txt').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item) => {
        return(
            item.songName.toLocaleLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
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
    });
});