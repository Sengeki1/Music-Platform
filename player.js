const music = new Audio('audio/Cesária Evora/Sodade.mp3');

const songsPlayer = [
    {
        id: '01',
        songName: `Sodade <br>
        <div class="subtitle">Cesária Évora</div>`,
        poster: "img/Cesaria Evora.jpg"
    },
    {
        id: '02',
        songName: `Nós Morna <br>
        <div class="subtitle">Ildo Lobo</div>`,
        poster: "img/Ildo Lobo.jpg"
    },
    {
        id: '03',
        songName: `Fica ma mi <br>
        <div class="subtitle">Tito Paris</div>`,
        poster: "img/Tito Paris.jpg"
    },
    {
        id: '04',
        songName: `Raquel <br>
        <div class="subtitle">Bau</div>`,
        poster: "img/Bau.jpg"
    },
    {
        id: '05',
        songName: `Nha Fidjo Matcho <br>
        <div class="subtitle">Bana</div>`,
        poster: "img/Bana.jpg"
    },
    {
        id: '06',
        songName: `Amor e Mar <br>
        <div class="subtitle">Ildo Lobo</div>`,
        poster: "img/Ildo Lobo.jpg"
    },
    {
        id: '07',
        songName: `Mar Azul <br>
        <div class="subtitle">Cesária Évora</div>`,
        poster: "img/Cesaria Evora.jpg"
    },
    {
        id: '08',
        songName: `Angola <br>
        <div class="subtitle">Cesária Évora</div>`,
        poster: "img/Cesaria Evora.jpg"
    },
    {
        id: '09',
        songName: `Miss Perfumado <br>
        <div class="subtitle">Cesária Évora</div>`,
        poster: "img/Cesaria Evora.jpg"
    },
    {
        id: '10',
        songName: `Incondicional <br>
        <div class="subtitle">Ildo Lobo</div>`,
        poster: "img/Ildo Lobo.jpg"
    },
    {
        id: '11',
        songName: `Pamodi <br>
        <div class="subtitle">Ildo Lobo</div>`,
        poster: "img/Ildo Lobo.jpg"
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songsPlayer[i].poster;
    e.getElementsByTagName('img')[0].innerHTML = songsPlayer[i].songName;
});

let masterPlay = document.getElementById('masterPlay');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0){
        music.play();
    } else {

    }
})