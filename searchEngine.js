const songs = [
    {
        id: '01',
        image: 'img/01.jpg',
        name: 'Cesária Évora',
        nameOfSong: 'Sodade'
    },
    {
        id: '02',
        image: 'img/02.jpg',
        name: 'Ildo Lobo',
        nameOfSong: 'Nós Morna'
    },
    {
        id: '03',
        image: 'img/03.jpg',
        name: 'Tito Paris',
        nameOfSong: 'Fica ma mi'
    },
    {
        id: '04',
        image: 'img/04.jpg',
        name: 'Bau',
        nameOfSong: 'Raquel'
    },
    {
        id: '05',
        image: 'img/05.jpg',
        name: 'Bana',
        nameOfSong: 'Nha Fidjo Matcho'
    },
    {
        id: '06',
        image: 'img/06.jpg',
        name: 'Ildo Lobo',
        nameOfSong: 'Amor e Mar'
    },
    {
        id: '07',
        image: 'img/07.jpg',
        name: 'Cesária Évora',
        nameOfSong: 'Mar Azul'
    },
    {
        id: '08',
        image: 'img/08.jpg',
        name: 'Cesária Évora',
        nameOfSong: 'Angola'
    },
    {
        id: '09',
        image: 'img/09.jpg',
        name: 'Cesária Évora',
        nameOfSong: 'Miss Perfumado'
    },
    {
        id: '10',
        image: 'img/10.jpg',
        name: 'Ildo Lobo',
        nameOfSong: 'Incondicional'
    },
    {
        id: '11',
        image: 'img/11.jpg',
        name: 'Ildo Lobo',
        nameOfSong: 'Pamodi'
    }
]

const categories = [...new Set(songs.map((item) => {return item}))]

document.getElementById('input_txt').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item) => {
        return(
            item.nameOfSong.toLocaleLowerCase().includes(searchData) || item.name.toLocaleLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
});

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var {id, image, name, nameOfSong} = item;
        return(
            `<li class="songItem">
                <i class="bi playList bi-play-fill" id="${id}"></i>
                <span>${id}</span>
                <img src="${image}" alt="">
                <h5>${nameOfSong}
                    <div class="subtitle">${name}</div>
                </h5>
            </li>`
        )
    }).join('')
};

displayItem(categories);