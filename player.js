const music = new Audio('audio/01.mp3');

const songsPlayer = [
    {
        id: 1,
        n: '01',
        songName: 'Sodade',
        Artista: 'Cesária Évora',
        poster: "img/1.jpg"
    },
    {
        id: 2,
        n: '02',
        songName: 'Nós Morna',
        Artista: 'Ildo Lobo',
        poster: "img/2.jpg"
    },
    {
        id: 3,
        n: '03',
        songName: 'Fica ma mi',
        Artista: 'Tito Paris',
        poster: "img/3.jpg"
    },
    {
        id: 4,
        n: '04',
        songName: 'Raquel',
        Artista: 'Bau',
        poster: "img/4.jpg"
    },
    {
        id: 5,
        n: '05',
        songName: 'Nha Fidjo Matcho',
        Artista: 'Bana',
        poster: "img/5.jpg"
    },
    {
        id: 6,
        n: '06',
        songName: 'Amor e Mar',
        Artista: 'Ildo Lobo',
        poster: "img/6.jpg"
    },
    {
        id: 7,
        n: '07',
        songName: 'Mar Azul',
        Artista: 'Cesária Évora',
        poster: "img/7.jpg"
    },
    {
        id: 8,
        n: '08',
        songName: 'Angola',
        Artista: 'Cesária Évora',
        poster: "img/8.jpg"
    },
    {
        id: 9,
        n: '09',
        songName: 'Miss Perfumado',
        Artista: 'Cesária Évora',
        poster: "img/9.jpg"
    },
    {
        id: 10,
        n: '10',
        songName: 'Incondicional',
        Artista: 'Ildo Lobo',
        poster: "img/10.jpg"
    },
    {
        id: 11,
        n: '11',
        songName: 'Pamodi',
        Artista: 'Ildo Lobo',
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
        var {n ,id, poster, songName, Artista} = item;
        return(
            `<li class="songItem">
                <i class="bi playList bi-play-fill" id="${id}"></i>
                <span>${n}</span>
                <img src="${poster}" alt="">
                <h5>
                    ${songName} <br>
                    <div class="subtitle">${Artista}</div>
                </h5>
            </li>`
        )
    }).join('')
};
displayItem(categories);

//display Inicio
let clickIni = document.getElementById('ini');

clickIni.addEventListener('click', () => {
    displayItem(categories);

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
                let {songName, Artista} = elss;
                title.innerHTML = `${songName} <br>
                <div class="subtitle">${Artista}</div>`
            });
    
            makeAllBackground();
            Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)"
        });
    })
})

//display  Artistas
let clickArtist = document.getElementById('art');

clickArtist.addEventListener('click', () => {
    const displayArtista = (items) => {
        document.getElementById('root').innerHTML = items.map((item) => {
            var {id, Artista, poster} = item;
            return(``)
        }).join('')
    };
    displayArtista(categories);
})

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
            let {songName, Artista} = elss;
            title.innerHTML = `${songName} <br>
            <div class="subtitle">${Artista}</div>`
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

back.addEventListener('click', (el) => {
    index -= 1;
    if (index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    } 

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
        let {songName, Artista} = elss;
        title.innerHTML = `${songName} <br>
        <div class="subtitle">${Artista}</div>`;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)"
   
    makeAllPlays(); 
});

next.addEventListener('click', () => {
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }

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
        let {songName, Artista} = elss;
        title.innerHTML = `${songName} <br>
        <div class="subtitle">${Artista}</div>`;
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