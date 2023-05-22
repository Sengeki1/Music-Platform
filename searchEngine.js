const songs = [
    {
        id: 1,
        image: 'img/Cesaria Evora.jpg',
        title: 'Cesária Évora',
        nameOfSong: 'Sodade'
    },
    {
        id: 2,
        image: 'img/Ildo Lobo.jpg',
        title: 'Ildo Lobo',
        nameOfSong: 'Nós Morna'
    },
    {
        id: 3,
        image: 'img/Tito Paris.jpg',
        title: 'Tito Paris',
        nameOfSong: 'Fica ma mi'
    },
    {
        id: 4,
        image: 'img/Bau.jpg',
        title: 'Bau',
        nameOfSong: 'Raquel'
    },
    {
        id: 5,
        image: 'img/Bana.jpg',
        title: 'Bana',
        nameOfSong: 'Nha Fidjo Matcho'
    },
    {
        id: 6,
        image: 'img/Ildo Lobo.jpg',
        title: 'Ildo Lobo',
        nameOfSong: 'Amor e Mar'
    },
    {
        id: 7,
        image: 'img/Cesaria Evora.jpg',
        title: 'Cesária Évora',
        nameOfSong: 'Mar Azul'
    },
    {
        id: 8,
        image: 'img/Cesaria Evora.jpg',
        title: 'Cesária Évora',
        nameOfSong: 'Angola'
    },
    {
        id: 9,
        image: 'img/Cesaria Evora.jpg',
        title: 'Cesária Évora',
        nameOfSong: 'Miss Perfumado'
    },
    {
        id: 10,
        image: 'img/Ildo Lobo.jpg',
        title: 'Ildo Lobo',
        nameOfSong: 'Incondicional'
    },
    {
        id: 11,
        image: 'img/Ildo Lobo.jpg',
        title: 'Ildo Lobo',
        nameOfSong: 'Pamodi'
    },
]

const categories = [...new Set(songs.map((item) => {return item}))]

document.getElementById('input_txt').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item) => {
        return(
            item.nameOfSong.toLocaleLowerCase().includes(searchData) || item.title.toLocaleLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
});

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var {image, title, nameOfSong} = item;
        return(
            `<li class="songItem">
                <img src="${image}">
                <h5>${nameOfSong}
                    <div class="subtitle">${title}</div>
                </h5>
            </li>`
        )
    }).join('')
};

displayItem(categories);