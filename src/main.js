import productos from './db/productos'
import './sass/main.scss'


const contenedorProductos = document.getElementById('container-productos')

const start = () => {

    let html = ''

    productos.forEach(prod => {
        //concatenar
        html +=`<div class="card">
                    <article class="card__article">
                        <div class="card__image-container">
                            <img class="card__image" src="${prod.foto}" alt="${prod.nombre}">
                        </div>
                        <div class="card__content">
                            <h2 class="card__heading">${prod.nombre}</h2>
                            <div class="card__description">
                                <p>${prod.descripcion}</p>
                            </div>
                        </div>
                    </article>
                </div>`
    })

    /* console.log(html); // voy a tener varios elementos div.card */

    contenedorProductos.innerHTML = html

}

const start2 = () => {

    productos.forEach (prod => {

        // creo div.card
        const card = document.createElement('div')
        card.classList.add('card')

        // article.card__article
        const articulo = document.createElement('article')
        articulo.classList.add('card__article')

        // meto el articulo dentro del div.card
        card.appendChild(articulo)

        // creo div.image__container
        const cardImageContainer = document.createElement('div')
        cardImageContainer.classList.add('card__image-container')

        //creo la foto.card__image
        const foto = document.createElement('img')
        foto.classList.add('card__image')
        foto.src = prod.foto
        foto.alt = prod.nombre

        // meto la foto.card__image dentro del div.card__image-container
        cardImageContainer.appendChild(foto)

        // meto div.card__image-container dentro del article.card__article
        articulo.appendChild(cardImageContainer)

        // creo div.card__content
        const cardContent = document.createElement('div')
        cardContent.classList.add('card__content')

        // creo el h2.card__heading
        const h2Titulo = document.createElement('h2')
        h2Titulo.classList.add('card__heading')
        h2Titulo.textContent = prod.nombre

        // creo el div.card_description
        const cardDescripcion = document.createElement('div')
        cardDescripcion.classList.add('card__description')

        // creo el parrafo descriptivo
        const parrafo = document.createElement('p')
        parrafo.textContent = prod.descripcion

        // meto el parrafo dentro del div.card__description
        cardDescripcion.appendChild(parrafo)

        // meto el h2.card__heading dentro del div.card__content
        cardContent.appendChild(h2Titulo)

        // meto cardDescripcion dentro del div.card__content
        cardContent.appendChild(cardDescripcion)

        // meto el div.card__content dentro del articulo.card__article
        articulo.appendChild(cardContent)

        // meto el div.card que creamos y cargamos, al HTML
        contenedorProductos.appendChild(card)
    })

}

window.addEventListener('DOMContentLoaded', start2) // se disparará cuando se haya cargado todo el HTML (se haya leído)

const card =`<div class="card">
                <article class="card__article">
                    <div class="card__image-container">
                        <img class="card__image" src="imgs/apple-iphone-11-pro-max.jpg" alt="IPhone 11 Pro Max">
                    </div>
                    <div class="card__content">
                        <h2 class="card__heading">IPhone 11 Pro Max</h2>
                        <div class="card__description">
                            <p>El iPhone 11 Pro Max ofrece una pantalla Super Retina XDR de 6.5", potente chip A13 Bionic, triple cámara de 12 MP, y batería de larga duración para un rendimiento excepcional.</p>
                        </div>
                    </div>
                </article>
            </div>`