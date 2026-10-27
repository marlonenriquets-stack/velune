// ═══════════════════════════════════════════════════════════
//  KINEMAX — CATÁLOGO EXTERNO
//  Agrega, edita o elimina entradas aquí sin tocar la app.
//  Formatos soportados por tipo:
//    movie       → { id, tipo:"movie",        titulo, portada, banner, categorias, descripcion, año, calificacion, video }
//    tv          → { id, tipo:"tv",           titulo, portada, banner, categorias, descripcion, año, calificacion, temporadas:[{nombre, capitulos:[{titulo,video}]}] }
//    anime       → { id, tipo:"anime",        titulo, portada, banner, categorias, descripcion, año, calificacion, temporadas:[...] }
//    proximamente→ { id, tipo:"proximamente", titulo, portada, banner, categorias, descripcion, año, calificacion, fechaEstreno }
// ═══════════════════════════════════════════════════════════

        // ═══════════════════════════════════════════════
        //  CATÁLOGO
        // ═══════════════════════════════════════════════
        const contentData = [
        {
                "id": "dan-da-dan-2024",
                "tipo": "anime",
                "titulo": "DAN DA DAN",
                "portada": "https://image.tmdb.org/t/p/w500/wQy1dCYgdSwoY78aKFTWFT1xADX.jpg",
                "banner": "https://image.tmdb.org/t/p/original/uNTrRKIOyKYISthoeizghtXPEOK.jpg",
                "categorias": ["Acción","Comedia","Animación"],
                "descripcion": "Dos adolescentes deciden probar si los fantasmas o los álienes existen y terminan enfrentando aterradoras amenazas paranormales, recibiendo superpoderes y, tal vez, enamorándose.",
                "año": "2024",
                "calificacion": 8.5,
                "temporadas": [{"nombre":"Temporada 1","capitulos":[{"titulo":"Capítulo 1:","video":"https://vimeus.com/e/anime?tmdb=240411&se=1&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 2:","video":"https://vimeus.com/e/anime?tmdb=240411&se=1&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 3:","video":"https://vimeus.com/e/anime?tmdb=240411&se=1&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 4:","video":"https://vimeus.com/e/anime?tmdb=240411&se=1&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 5:","video":"https://vimeus.com/e/anime?tmdb=240411&se=1&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 6:","video":"https://vimeus.com/e/anime?tmdb=240411&se=1&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 7:","video":"https://vimeus.com/e/anime?tmdb=240411&se=1&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 8:","video":"https://vimeus.com/e/anime?tmdb=240411&se=1&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 9:","video":"https://vimeus.com/e/anime?tmdb=240411&se=1&ep=9&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 10:","video":"https://vimeus.com/e/anime?tmdb=240411&se=1&ep=10&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 11:","video":"https://vimeus.com/e/anime?tmdb=240411&se=1&ep=11&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 12:","video":"https://vimeus.com/e/anime?tmdb=240411&se=1&ep=12&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 13:","video":"https://vimeus.com/e/anime?tmdb=240411&se=1&ep=13&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 14:","video":"https://vimeus.com/e/anime?tmdb=240411&se=1&ep=14&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 15:","video":"https://vimeus.com/e/anime?tmdb=240411&se=1&ep=15&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 16:","video":"https://vimeus.com/e/anime?tmdb=240411&se=1&ep=16&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 17:","video":"https://vimeus.com/e/anime?tmdb=240411&se=1&ep=17&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 18:","video":"https://vimeus.com/e/anime?tmdb=240411&se=1&ep=18&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 19:","video":"https://vimeus.com/e/anime?tmdb=240411&se=1&ep=19&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 20:","video":"https://vimeus.com/e/anime?tmdb=240411&se=1&ep=20&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 21:","video":"https://vimeus.com/e/anime?tmdb=240411&se=1&ep=21&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 22:","video":"https://vimeus.com/e/anime?tmdb=240411&se=1&ep=22&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 23:","video":"https://vimeus.com/e/anime?tmdb=240411&se=1&ep=23&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 24:","video":"https://vimeus.com/e/anime?tmdb=240411&se=1&ep=24&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"}]}]
            },
            {
                "id": "super-mario-galaxy-la-pelicula-2026",
                "tipo": "movie",
                "titulo": "Super Mario Galaxy: La película",
                "portada": "https://image.tmdb.org/t/p/w500/79EVB4qhyfrdlMgT8GIRAikdzsQ.jpg",
                "banner": "https://image.tmdb.org/t/p/original/9Z2uDYXqJrlmePznQQJhL6d92Rq.jpg",
                "categorias": ["Familiares","Comedia","Animación"],
                "descripcion": "Mario y Luigi se enfrentan una nueva amenaza: Bowser Jr., quién está decidido liberar a su padre del cautiverio y restaurar el legado familiar.",
                "año": "2026",
                "calificacion": 7.7,
                "video": "https://vimeus.com/e/movie?tmdb=1226863&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
            },
            {
    "id": "forrest-gump-1994",
    "tipo": "movie",
    "titulo": "Forrest Gump",
    "portada": "https://image.tmdb.org/t/p/w500/azV6hV99lYkdhydsQbJCI6FqMl4.jpg",
    "banner": "https://image.tmdb.org/t/p/original/66Kn4XWhkuPkJxOJyPEx4U2CUfN.jpg",
    "categorias": [
        "Familiares",
        "Comedia"
    ],
    "descripcion": "Forrest Gump (Tom Hanks) sufre desde pequeño un cierto retraso mental. A pesar de todo, gracias a su tenacidad y a su buen corazón será protagonista de acontecimientos cruciales de su país durante varias décadas. Mientras pasan por su vida multitud de cosas en su mente siempre está presente la bella Jenny (Robin Wright), su gran amor desde la infancia, que junto a su madre será la persona más importante en su vida.",
    "año": "1994",
    "calificacion": 8.5,
    "video": "https://vimeus.com/e/movie?tmdb=13&view_key=4CFPPiDGDuYJRpF-3CxKzq3jyj3E0bLa-fVwwOsv90Q"
},
{
    "id": "after-almas-perdidas-2021",
    "tipo": "movie",
    "titulo": "After: Almas Perdidas",
    "portada": "https://image.tmdb.org/t/p/w500/cAvUp7ngPyuhx1nLjmCOTCBNo91.jpg",
    "banner": "https://image.tmdb.org/t/p/original/mxdiaM2tsx8M6W3zLgiPwAkhQfq.jpg",
    "categorias": [],
    "descripcion": "Cuando Tessa toma la decisión más importante de su vida, todo cambia. Los secretos que salen a la luz sobre su familia, y también sobre la de Hardin, ponen en peligro su relación y su futuro juntos. La vida de Tessa empieza a desmoronarse, nada es como ella creía que sería. Nunca ha sentido algo así por nadie, pero empieza a cuestionarse si vale la pena. Antes el amor bastaba para mantenerlos juntos, pero ahora ya no está claro lo que dictan sus corazones...",
    "año": "2021",
    "calificacion": 7,
    "video": "https://vimeus.com/e/movie?tmdb=744275&view_key=4CFPPiDGDuYJRpF-3CxKzq3jyj3E0bLa-fVwwOsv90Q"
},
{
    "id": "goat-la-cabra-que-cambio-el-juego-2026",
    "tipo": "movie",
    "titulo": "GOAT: La cabra que cambió el juego",
    "portada": "https://image.tmdb.org/t/p/w500/3dH7p6eAfzDElYYFKfYWpf9xlsG.jpg",
    "banner": "https://image.tmdb.org/t/p/original/tq3h43fZy0H80vzf47MAY7R9Mxo.jpg",
    "categorias": [
        "Familiares",
        "Comedia",
        "Animación"
    ],
    "descripcion": "Will, un pequeño cabrito con grandes sueños, tiene la oportunidad única de unirse a los profesionales y jugar al roarball, un deporte de contacto intenso y mixto, dominado por los animales más rápidos y feroces del mundo. A sus nuevos compañeros no les entusiasma tener un pequeño cabrito en su equipo, pero Will está decidido a revolucionar el deporte y demostrar de una vez por todas que los pequeños también pueden jugar al béisbol.",
    "año": "2026",
    "calificacion": 8.1,
    "video": "https://vimeus.com/e/movie?tmdb=1297842&view_key=4CFPPiDGDuYJRpF-3CxKzq3jyj3E0bLa-fVwwOsv90Q"
},
{
    "id": "jack-ryan-de-tom-clancy-guerra-fantasma-2026",
    "tipo": "movie",
    "titulo": "Jack Ryan de Tom Clancy: Guerra fantasma",
    "portada": "https://image.tmdb.org/t/p/w500/7wiq6ld0p7AeWFlZsnXZfNKXIB2.jpg",
    "banner": "https://image.tmdb.org/t/p/original/dd31qJxOarrHyGZwYsCzOjobQzP.jpg",
    "categorias": [
        "Acción",
        "Suspenso"
    ],
    "descripcion": "En esta nueva película, Jack Ryan vuelve a regañadientes al espionaje cuando una misión encubierta internacional destapa una conspiración mortal. En una carrera contra el tiempo, se une a sus aliados de la CIA Mike November y James Greer y a la astuta oficial del MI6 Emma Marlowe para enfrentarse a una unidad renegada de operaciones encubiertas en una pelea muy personal y con mucho en juego.",
    "año": "2026",
    "calificacion": 7.2,
    "video": "https://vimeus.com/e/movie?tmdb=1380291&view_key=4CFPPiDGDuYJRpF-3CxKzq3jyj3E0bLa-fVwwOsv90Q"
},
{
    "id": "interestelar-2014",
    "tipo": "movie",
    "titulo": "Interestelar",
    "portada": "https://image.tmdb.org/t/p/w500/d1QKiYtceF3GDtxvTFXFAqwwah9.jpg",
    "banner": "https://image.tmdb.org/t/p/original/5XNQBqnBwPA9yT0jZ0p3s8bbLh0.jpg",
    "categorias": [
        "Ciencia Ficción"
    ],
    "descripcion": "Cooper y un grupo de exploradores utilizan un agujero de gusano recién descubierto para superar las limitaciones de los viajes espaciales humanos y conquistar las vastas distancias que implica un viaje interestelar.",
    "año": "2014",
    "calificacion": 8.5,
    "video": "https://vimeus.com/e/movie?tmdb=157336&view_key=4CFPPiDGDuYJRpF-3CxKzq3jyj3E0bLa-fVwwOsv90Q"
},
            {
                "id": "the-boys-2019",
                "tipo": "tv",
                "titulo": "The Boys",
                "portada": "https://image.tmdb.org/t/p/w500/lTb6v3ZRanWLWoOpofXrBHNo9s1.jpg",
                "banner": "https://image.tmdb.org/t/p/original/bq28ajZaoMyzEIm6REelqyqtEDZ.jpg",
                "categorias": ["Acción"],
                "descripcion": "Un grupo de vigilantes decide hacer todo lo posible por frenar a los superhéroes que están perjudicando a la sociedad.",
                "año": "2019",
                "calificacion": 8.5,
                "temporadas": [
                    {"nombre":"Temporada 1","capitulos":[{"titulo":"Capítulo 1:","video":"https://vimeus.com/e/serie?tmdb=76479&se=1&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 2:","video":"https://vimeus.com/e/serie?tmdb=76479&se=1&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 3:","video":"https://vimeus.com/e/serie?tmdb=76479&se=1&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 4:","video":"https://vimeus.com/e/serie?tmdb=76479&se=1&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 5:","video":"https://vimeus.com/e/serie?tmdb=76479&se=1&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 6:","video":"https://vimeus.com/e/serie?tmdb=76479&se=1&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 7:","video":"https://vimeus.com/e/serie?tmdb=76479&se=1&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 8:","video":"https://vimeus.com/e/serie?tmdb=76479&se=1&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"}]},
                    {"nombre":"Temporada 2","capitulos":[{"titulo":"Capítulo 1:","video":"https://vimeus.com/e/serie?tmdb=76479&se=2&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 2:","video":"https://vimeus.com/e/serie?tmdb=76479&se=2&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 3:","video":"https://vimeus.com/e/serie?tmdb=76479&se=2&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 4:","video":"https://vimeus.com/e/serie?tmdb=76479&se=2&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 5:","video":"https://vimeus.com/e/serie?tmdb=76479&se=2&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 6:","video":"https://vimeus.com/e/serie?tmdb=76479&se=2&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 7:","video":"https://vimeus.com/e/serie?tmdb=76479&se=2&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 8:","video":"https://vimeus.com/e/serie?tmdb=76479&se=2&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"}]},
                    {"nombre":"Temporada 3","capitulos":[{"titulo":"Capítulo 1:","video":"https://vimeus.com/e/serie?tmdb=76479&se=3&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 2:","video":"https://vimeus.com/e/serie?tmdb=76479&se=3&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 3:","video":"https://vimeus.com/e/serie?tmdb=76479&se=3&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 4:","video":"https://vimeus.com/e/serie?tmdb=76479&se=3&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 5:","video":"https://vimeus.com/e/serie?tmdb=76479&se=3&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 6:","video":"https://vimeus.com/e/serie?tmdb=76479&se=3&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 7:","video":"https://vimeus.com/e/serie?tmdb=76479&se=3&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 8:","video":"https://vimeus.com/e/serie?tmdb=76479&se=3&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"}]},
                    {"nombre":"Temporada 4","capitulos":[{"titulo":"Capítulo 1:","video":"https://vimeus.com/e/serie?tmdb=76479&se=4&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 2:","video":"https://vimeus.com/e/serie?tmdb=76479&se=4&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 3:","video":"https://vimeus.com/e/serie?tmdb=76479&se=4&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 4:","video":"https://vimeus.com/e/serie?tmdb=76479&se=4&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 5:","video":"https://vimeus.com/e/serie?tmdb=76479&se=4&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 6:","video":"https://vimeus.com/e/serie?tmdb=76479&se=4&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 7:","video":"https://vimeus.com/e/serie?tmdb=76479&se=4&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 8:","video":"https://vimeus.com/e/serie?tmdb=76479&se=4&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"}]},
                    {"nombre":"Temporada 5","capitulos":[{"titulo":"Capítulo 1:","video":"https://vimeus.com/e/serie?tmdb=76479&se=5&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 2:","video":"https://vimeus.com/e/serie?tmdb=76479&se=5&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 3:","video":"https://vimeus.com/e/serie?tmdb=76479&se=5&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 4:","video":"https://vimeus.com/e/serie?tmdb=76479&se=5&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 5:","video":"https://vimeus.com/e/serie?tmdb=76479&se=5&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 6:","video":"https://vimeus.com/e/serie?tmdb=76479&se=5&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 7:","video":"https://vimeus.com/e/serie?tmdb=76479&se=5&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"},{"titulo":"Capítulo 8:","video":"https://vimeus.com/e/serie?tmdb=76479&se=5&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"}]}
                ]
            },

            {
    "id": "hambre-2023",
    "tipo": "movie",
    "titulo": "Hambre",
    "portada": "https://image.tmdb.org/t/p/w500/jaot9ZW8pLcFAXiIe5J6DG8G1Bn.jpg",
    "banner": "https://image.tmdb.org/t/p/original/A048jIRzQHCIqjX3hBMQOwyWMKD.jpg",
    "categorias": [],
    "descripcion": "Aoy regenta el restaurante de fideos de su familia en el casco antiguo de Bangkok. Un día recibe una invitación para dejar el negocio familiar y unirse al Team Hunger, el principal equipo de chefs de lujo de Tailandia.",
    "año": "2023",
    "calificacion": 7.1,
    "video": "https://vimeus.com/e/movie?tmdb=1110859&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},

{
    "id": "la-posesion-de-la-momia-2026",
    "tipo": "movie",
    "titulo": "La posesión de la momia",
    "portada": "https://image.tmdb.org/t/p/w500/5RhY8eHWzvjw32449pHdUkOeDCN.jpg",
    "banner": "https://image.tmdb.org/t/p/original/wMrV8SLne1jHLeYS0lLrA1Tf86P.jpg",
    "categorias": [
        "Terror"
    ],
    "descripcion": "La joven hija de un periodista desaparece en el desierto sin dejar rastro. Ocho años después, la familia rota se sorprende cuando ella regresa con ellos, mientras lo que debería ser una reunión alegre se convierte en una pesadilla viviente.",
    "año": "2026",
    "calificacion": 8,
    "video": "https://vimeus.com/e/movie?tmdb=1304313&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "maquina-de-guerra-2026",
    "tipo": "movie",
    "titulo": "Máquina de guerra",
    "portada": "https://image.tmdb.org/t/p/w500/SPGBZj12OVOCZdYJVPIJcpOYvZ.jpg",
    "banner": "https://image.tmdb.org/t/p/original/6yeVcxFR0j08vlv2OlL6zbewm4D.jpg",
    "categorias": [
        "Acción",
        "Ciencia Ficción",
        "Suspenso"
    ],
    "descripcion": "En su última misión de entrenamiento, un ingeniero de combate debe liderar a su unidad en una lucha por sobrevivir ante una amenaza inimaginable.",
    "año": "2026",
    "calificacion": 7.3,
    "video": "https://vimeus.com/e/movie?tmdb=1265609&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "el-telefono-negro-2022",
    "tipo": "movie",
    "titulo": "El teléfono negro",
    "portada": "https://image.tmdb.org/t/p/w500/1D2R2wIgbTyXTPzmyJIKSbVN9wG.jpg",
    "banner": "https://image.tmdb.org/t/p/original/AfvIjhDu9p64jKcmohS4hsPG95Q.jpg",
    "categorias": [
        "Terror",
        "Suspenso"
    ],
    "descripcion": "El tímido pero inteligente Finney Blake, de 13 años, es secuestrado por un asesino sádico. En el sótano insonorizado, un teléfono desconectado en la pared empieza a sonar.",
    "año": "2022",
    "calificacion": 7.5,
    "video": "https://vimeus.com/e/movie?tmdb=756999&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "telefono-negro-2-2025",
    "tipo": "movie",
    "titulo": "Teléfono negro 2",
    "portada": "https://image.tmdb.org/t/p/w500/A6QNBDV1u3oaq3guBHGKcEJkYkX.jpg",
    "banner": "https://image.tmdb.org/t/p/original/6zKjoOOb3OZnZuiHtQZn4Kd69Gq.jpg",
    "categorias": [
        "Terror",
        "Suspenso"
    ],
    "descripcion": "A sus 17 años, Finney Blake lucha por su vida tras su cautiverio. Sin embargo, su hermana Gwen empieza a recibir llamadas de un teléfono negro en sus sueños y visiones inquietantes qué los conduce a ambos en un campamento de invierno.",
    "año": "2025",
    "calificacion": 6.7,
    "video": "https://vimeus.com/e/movie?tmdb=1197137&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "intensa-mente-2015",
    "tipo": "movie",
    "titulo": "Intensa-Mente",
    "portada": "https://image.tmdb.org/t/p/w500/ewEX6VcVohyrQ52usZb1XovN1Bj.jpg",
    "banner": "https://image.tmdb.org/t/p/original/o3i6AfTcWAuNvzAUV3q5lOmi6Gx.jpg",
    "categorias": [
        "Familiares",
        "Comedia",
        "Animación"
    ],
    "descripcion": "Riley es una chica que disfruta o padece toda clase de sentimientos. Aunque su vida ha estado marcada por la Alegría, también se ve afectada por otro tipo de emociones. Lo que Riley no entiende muy bien es por qué motivo tiene que existir la Tristeza en su vida. Una serie de acontecimientos hacen que Alegría y Tristeza se mezclen en una peligrosa aventura que dará un vuelco al mundo de Riley.",
    "año": "2015",
    "calificacion": 7.9,
    "video": "https://vimeus.com/e/movie?tmdb=150540&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "intensamente-2-2024",
    "tipo": "movie",
    "titulo": "IntensaMente 2",
    "portada": "https://image.tmdb.org/t/p/w500/4HEJdpcmTGm3BWWic31G4aCnuC6.jpg",
    "banner": "https://image.tmdb.org/t/p/original/p5ozvmdgsmbWe0H8Xk7Rc8SCwAB.jpg",
    "categorias": [
        "Familiares",
        "Comedia",
        "Animación"
    ],
    "descripcion": "Riley, ahora adolescente, enfrenta una reforma en la Central de sus emociones. Alegría, Tristeza, Ira, Miedo y Asco deben adaptarse a la llegada de nuevas emociones: Ansiedad, Vergüenza, Envidia y Ennui.",
    "año": "2024",
    "calificacion": 7.5,
    "video": "https://vimeus.com/e/movie?tmdb=1022789&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "five-nights-at-freddys-2023",
    "tipo": "movie",
    "titulo": "Five Nights at Freddy's",
    "portada": "https://image.tmdb.org/t/p/w500/t6RSJ1z8bDEYpk4fLwxfkXciUak.jpg",
    "banner": "https://image.tmdb.org/t/p/original/7NRGAtu8E4343NSKwhkgmVRDINw.jpg",
    "categorias": [
        "Terror",
        "Suspenso"
    ],
    "descripcion": "Un guardia de seguridad con problemas comienza a trabajar en Freddy Fazbear's Pizza. Mientras pasa su primera noche en el trabajo, se da cuenta de que el turno de noche en Freddy's no será tan fácil de superar.",
    "año": "2023",
    "calificacion": 7.3,
    "video": "https://vimeus.com/e/movie?tmdb=507089&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "five-nights-at-freddys-2-2025",
    "tipo": "movie",
    "titulo": "Five Nights at Freddy's 2",
    "portada": "https://image.tmdb.org/t/p/w500/bYdANgEjbb3L1k1KpprAeZ6a5HN.jpg",
    "banner": "https://image.tmdb.org/t/p/original/54BOXpX2ieTXMDzHymdDMnUIzYG.jpg",
    "categorias": [
        "Terror",
        "Suspenso"
    ],
    "descripcion": "Un año después de los sucesos de Freddy Fazbear's Pizza, y con la llegada de un nuevo Faszfest al pueblo. Abby se escapa para reencontrarse con Freddy, Bonnie, Chica y Foxy con oscuros secretos revelándose.",
    "año": "2025",
    "calificacion": 6.7,
    "video": "https://vimeus.com/e/movie?tmdb=1228246&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "el-hombre-arana-2002",
    "tipo": "movie",
    "titulo": "El hombre araña",
    "portada": "https://image.tmdb.org/t/p/w500/or6XJBVpcEbIkma0V9zshnbEtx4.jpg",
    "banner": "https://image.tmdb.org/t/p/original/zQ8AxTPiCiS5nnwXpwTBPBHSaa5.jpg",
    "categorias": [
        "Acción",
        "Ciencia Ficción"
    ],
    "descripcion": "Cuando es mordido por una araña genéticamente modificada, un estudiante de secundaria nerd, tímido y torpe, adquiere habilidades parecidas a las de una araña que eventualmente debe usar para luchar contra el mal como un superhéroe después de que la tragedia cae sobre su familia.",
    "año": "2002",
    "calificacion": 7.3,
    "video": "https://vimeus.com/e/movie?tmdb=557&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "spider-man-de-regreso-a-casa-2017",
    "tipo": "movie",
    "titulo": "Spider-Man: De regreso a casa",
    "portada": "https://image.tmdb.org/t/p/w500/81qIJbnS2L0rUAAB55G8CZODpS5.jpg",
    "banner": "https://image.tmdb.org/t/p/original/tPpYGm2mVecue7Bk3gNVoSPA5qn.jpg",
    "categorias": [
        "Acción",
        "Ciencia Ficción"
    ],
    "descripcion": "Peter Parker comienza a experimentar su recién descubierta identidad como el superhéroe Spider-Man (El Hombre Araña). Después de la experiencia vivida con los Vengadores, Peter regresa a casa, donde vive con su tía. Bajo la atenta mirada de su mentor Tony Stark, Peter intenta mantener una vida normal como cualquier joven de su edad, pero interrumpe en su rutina diaria el nuevo villano Vulture y, con él, lo más importante de la vida de Peter comenzará a verse amenazado.",
    "año": "2017",
    "calificacion": 7.3,
    "video": "https://vimeus.com/e/movie?tmdb=315635&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "spider-man-sin-camino-a-casa-2021",
    "tipo": "movie",
    "titulo": "Spider-Man: Sin camino a casa",
    "portada": "https://image.tmdb.org/t/p/w500/miZFgV81xG324rpUknQX8dtXuBl.jpg",
    "banner": "https://image.tmdb.org/t/p/original/zD5v1E4joAzFvmAEytt7fM3ivyT.jpg",
    "categorias": [
        "Acción",
        "Ciencia Ficción"
    ],
    "descripcion": "Peter Parker es desenmascarado y ya no puede separar su vida normal de los altos riesgos de ser un súper héroe. Cuando pide ayuda al Doctor Strange para recuperar su secreto, el hechizo crea un agujero en su mundo, liberando a los villanos más poderosos que han luchado con cualquier Spider-Man, en cualquier universo. Ahora Peter debe de superar su reto más grande, que no solo alterara su propio futuro pero el del multiverso, forzándolo a descubrir lo que realmente significa ser Spider-Man.",
    "año": "2021",
    "calificacion": 7.9,
    "video": "https://vimeus.com/e/movie?tmdb=634649&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "spider-man-2-lejos-de-casa-2019",
    "tipo": "movie",
    "titulo": "Spider-Man 2: Lejos de Casa",
    "portada": "https://image.tmdb.org/t/p/w500/o59zDVJDIehGcWZsMUGU5SN0V0D.jpg",
    "banner": "https://image.tmdb.org/t/p/original/34jW8LvjRplM8Pv06cBFDpLlenR.jpg",
    "categorias": [
        "Acción",
        "Ciencia Ficción"
    ],
    "descripcion": "Peter Parker decide irse junto a MJ, Ned y el resto de sus amigos a pasar unas vacaciones a Europa. Sin embargo, el plan de Parker por dejar de lado sus superpoderes durante unas semanas se ven truncados cuando Nick Fury contacta con él para solicitarle ayuda para frenar el ataque de unas criaturas elementales que están causando el caos en el continente. En ese momento, Parker vuelve a ponerse el traje de Spider-Man para cumplir con su labor.",
    "año": "2019",
    "calificacion": 7.4,
    "video": "https://vimeus.com/e/movie?tmdb=429617&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "spider-man-un-nuevo-universo-2018",
    "tipo": "movie",
    "titulo": "Spider-Man: Un nuevo universo",
    "portada": "https://image.tmdb.org/t/p/w500/e47p9fHR6jMrrLeoa7l5hU05vhR.jpg",
    "banner": "https://image.tmdb.org/t/p/original/8mnXR9rey5uQ08rZAvzojKWbDQS.jpg",
    "categorias": [
        "Acción",
        "Animación",
        "Ciencia Ficción"
    ],
    "descripcion": "En un universo paralelo donde Peter Parker ha muerto, un jóven de secundaria llamado Miles Morales es el nuevo Spider-Man. Sin embargo, cuando el líder mafioso Wilson Fisk (a.k.a Kingpin) construye el \"Super Colisionador\" trae a una versión alternativa de Peter Parker que tratará de enseñarle a Miles como ser un mejor Spider-Man. Pero no será el único Spider Man en entrar a este universo, 4 versiones alternas de Spidey aparecerán y buscarán regresar a su universo antes de que toda la realidad colapse.",
    "año": "2018",
    "calificacion": 8.4,
    "video": "https://vimeus.com/e/movie?tmdb=324857&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "spider-man-a-traves-del-spider-verso-2023",
    "tipo": "movie",
    "titulo": "Spider-Man: A través del Spider-Verso",
    "portada": "https://image.tmdb.org/t/p/w500/rXhgHQmtjTIQOEDU8E2TbUFMjWM.jpg",
    "banner": "https://image.tmdb.org/t/p/original/9xfDWXAUbFXQK585JvByT5pEAhe.jpg",
    "categorias": [
        "Acción",
        "Animación",
        "Ciencia Ficción"
    ],
    "descripcion": "Después de reunirse con Gwen Stacy, Miles Morales, el amigable Spider-Man del vecindario de tiempo completo de Brooklyn, es catapultado a través del Multiverso, donde se encuentra con un equipo de Spider-People encargado de proteger su existencia. Pero cuando los héroes chocan sobre cómo manejar una nueva amenaza, Miles se enfrenta a las otras arañas y debe redefinir lo que significa ser un héroe para poder salvar a las personas que más ama.",
    "año": "2023",
    "calificacion": 8.3,
    "video": "https://vimeus.com/e/movie?tmdb=569094&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "el-hombre-arana-3-2007",
    "tipo": "movie",
    "titulo": "El hombre araña 3",
    "portada": "https://image.tmdb.org/t/p/w500/yqQRaD0uBWKLvSVe6LuMveb0ZLv.jpg",
    "banner": "https://image.tmdb.org/t/p/original/w1oD1MzHjnBJc5snKupIQaSBLIh.jpg",
    "categorias": [
        "Acción",
        "Ciencia Ficción"
    ],
    "descripcion": "Una extraña entidad negra de otro mundo se vincula con Peter Parker y le provoca confusión interna mientras lucha contra nuevos villanos, tentaciones y venganza.",
    "año": "2007",
    "calificacion": 6.5,
    "video": "https://vimeus.com/e/movie?tmdb=559&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "el-sorprendente-hombre-arana-2012",
    "tipo": "movie",
    "titulo": "El Sorprendente Hombre-Araña",
    "portada": "https://image.tmdb.org/t/p/w500/4cw1Vpp68ec518BHiS6gfa3yDoU.jpg",
    "banner": "https://image.tmdb.org/t/p/original/HVcza6tJtWFrLriuh3Ano4Vt46.jpg",
    "categorias": [
        "Acción",
        "Ciencia Ficción"
    ],
    "descripcion": "Peter Parker es un estudiante que fue abandonado por sus padres cuando era niño, quedando a cargo de su tío Ben y su tía May. Cuando Peter descubre un misterioso maletín perteneciente a su padre, comienza la búsqueda para entender la desaparición de sus padres, que lo lleva directamente al laboratorio en Oscorp del Dr. Curt Connors , ex compañero de trabajo de su padre.",
    "año": "2012",
    "calificacion": 6.7,
    "video": "https://vimeus.com/e/movie?tmdb=1930&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "el-hombre-arana-2-2004",
    "tipo": "movie",
    "titulo": "El hombre araña 2",
    "portada": "https://image.tmdb.org/t/p/w500/9vAx9vN27TpRv98fREN4aXIdhbp.jpg",
    "banner": "https://image.tmdb.org/t/p/original/6al048Lat3eLVQOuKtc9h6Tu94d.jpg",
    "categorias": [
        "Acción",
        "Ciencia Ficción"
    ],
    "descripcion": "Peter Parker se ve acosado por problemas en su fallida vida personal mientras lucha contra un brillante científico llamado Doctor Otto Octavius.",
    "año": "2004",
    "calificacion": 7.3,
    "video": "https://vimeus.com/e/movie?tmdb=558&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "el-sorprendente-hombre-arana-2-la-amenaza-de-electro-2014",
    "tipo": "movie",
    "titulo": "El Sorprendente Hombre-Araña 2: La Amenaza de Electro",
    "portada": "https://image.tmdb.org/t/p/w500/z07KnqwHWDY3q5utu0xBLKo3UWo.jpg",
    "banner": "https://image.tmdb.org/t/p/original/u7SeO6Y42P7VCTWLhpnL96cyOqd.jpg",
    "categorias": [
        "Acción",
        "Ciencia Ficción"
    ],
    "descripcion": "Ser el Hombre Araña es genial. Para Peter Parker, no hay mejor sensación que columpiarse entre rascacielos, ser el héroe y pasar el tiempo con Gwen. Pero ser el Hombre Araña no es gratuito: solo él puede proteger a sus conciudadanos de Nueva York de los temibles villanos que amenazan a la ciudad. Con el surgimiento de Electro, Peter debe enfrentar a un enemigo mucho más poderoso que él. Y como su antiguo amigo, Harry Osborn, regresa, Peter se da cuenta de que todos sus enemigos tienen algo en común: Oscorp.",
    "año": "2014",
    "calificacion": 6.5,
    "video": "https://vimeus.com/e/movie?tmdb=102382&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "besos-kitty-2023",
    "tipo": "tv",
    "titulo": "Besos, Kitty",
    "portada": "https://image.tmdb.org/t/p/w500/3y3uLS6HV3IJebjXHnd9K640F3Q.jpg",
    "banner": "https://image.tmdb.org/t/p/original/h0CQ36rm9cSLznve5ocCDtYlnwN.jpg",
    "categorias": [
        "Comedia"
    ],
    "descripcion": "Siguiendo la voz de su corazón, Kitty, la celestina, llega a una escuela en Seúl. Allí, descubre que la vida, el amor y la familia son más complicados de lo que imaginaba...",
    "año": "2023",
    "calificacion": 8.1,
    "temporadas": [
        {
            "nombre": "Temporada 1",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=195670&se=1&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=195670&se=1&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=195670&se=1&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=195670&se=1&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=195670&se=1&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=195670&se=1&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=195670&se=1&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=195670&se=1&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://vimeus.com/e/serie?tmdb=195670&se=1&ep=9&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 10:",
                    "video": "https://vimeus.com/e/serie?tmdb=195670&se=1&ep=10&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 2",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=195670&se=2&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=195670&se=2&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=195670&se=2&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=195670&se=2&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=195670&se=2&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=195670&se=2&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=195670&se=2&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=195670&se=2&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 3",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=195670&se=3&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=195670&se=3&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=195670&se=3&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=195670&se=3&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=195670&se=3&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=195670&se=3&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=195670&se=3&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=195670&se=3&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        }
    ]
},
{
    "id": "it-bienvenidos-a-derry-2025",
    "tipo": "tv",
    "titulo": "IT: Bienvenidos a Derry",
    "portada": "https://image.tmdb.org/t/p/w500/vC6LSYC8uhZPkPM01L6HKrr1lMD.jpg",
    "banner": "https://image.tmdb.org/t/p/original/2fOKVDoc2O3eZmBZesWPuE5kgPN.jpg",
    "categorias": [],
    "descripcion": "En 1958, un grupo de siete amigos están empezando a ver cosas extrañas en el tranquilo pueblito Derry. Con el tiempo, descubren que todos estaban viendo lo mismo: un ser sobrenatural y malvado que puede adoptar muchas formas.",
    "año": "2025",
    "calificacion": 8.2,
    "temporadas": [
        {
            "nombre": "Temporada 1",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=200875&se=1&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=200875&se=1&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=200875&se=1&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=200875&se=1&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=200875&se=1&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=200875&se=1&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=200875&se=1&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=200875&se=1&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        }
    ]
},
{
    "id": "malcolm-in-the-middle-la-vida-sigue-siendo-injusta-2026",
    "tipo": "tv",
    "titulo": "Malcolm in the Middle: La vida sigue siendo injusta",
    "portada": "https://image.tmdb.org/t/p/w500/65VaeGPDrKYU8TIyMjnDmeFUqY0.jpg",
    "banner": "https://image.tmdb.org/t/p/original/uekZzyLReK777QKO9xKwiPOelCQ.jpg",
    "categorias": [
        "Comedia"
    ],
    "descripcion": "Han pasado veinte años, y Malcolm y su familia siguen sin aprender nada.",
    "año": "2026",
    "calificacion": 8.1,
    "temporadas": [
        {
            "nombre": "Miniserie",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=279471&se=1&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=279471&se=1&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=279471&se=1&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=279471&se=1&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        }
    ]
},
{
    "id": "la-oficina-2026",
    "tipo": "tv",
    "titulo": "La oficina",
    "portada": "https://image.tmdb.org/t/p/w500/uUEPJHIGiNeV69RIco01j5Yqu1F.jpg",
    "banner": "https://image.tmdb.org/t/p/original/w6518nngLn8awWDRnqZGLvIpcSS.jpg",
    "categorias": [
        "Comedia"
    ],
    "descripcion": "Jerónimo Ponce III, jefe regional de Jabones Olimpo Aguascalientes, una filial de la empresa familiar, es una pesadilla para sus empleados, un grupo de oficinistas pintorescos que diariamente tienen que sobrevivir a sus desplantes políticamente incorrectos y técnicas organizacionales autodestructivas para llegar ilesos al final del día.",
    "año": "2026",
    "calificacion": 9.3,
    "temporadas": [
        {
            "nombre": "Temporada 1",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=275202&se=1&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=275202&se=1&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=275202&se=1&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=275202&se=1&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=275202&se=1&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=275202&se=1&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=275202&se=1&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=275202&se=1&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        }
    ]
},
{
    "id": "merlina-2022",
    "tipo": "tv",
    "titulo": "Merlina",
    "portada": "https://image.tmdb.org/t/p/w500/5DlNYe4e8aVHoKH4XrUuREWMY8s.jpg",
    "banner": "https://image.tmdb.org/t/p/original/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
    "categorias": [
        "Comedia"
    ],
    "descripcion": "Inteligente, sarcástica y un poco muerta por dentro, Merlina Addams investiga misterios macabros mientras hace nuevos amigos (y enemigos) en la Academia Nunca Más.",
    "año": "2022",
    "calificacion": 8.3,
    "temporadas": [
        {
            "nombre": "Temporada 1",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=119051&se=1&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=119051&se=1&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=119051&se=1&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=119051&se=1&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=119051&se=1&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=119051&se=1&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=119051&se=1&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=119051&se=1&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 2",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=119051&se=2&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=119051&se=2&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=119051&se=2&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=119051&se=2&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=119051&se=2&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=119051&se=2&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=119051&se=2&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=119051&se=2&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 3",
            "capitulos": []
        }
    ]
},
{
    "id": "berlin-y-la-dama-del-armino-2026",
    "tipo": "tv",
    "titulo": "Berlín y la dama del armiño",
    "portada": "https://image.tmdb.org/t/p/w500/3uhJ3AHKxSsEWe1BUG9pV0bpqna.jpg",
    "banner": "https://image.tmdb.org/t/p/original/ntPgSYKwPg9xKO4VvLJYfInSyZa.jpg",
    "categorias": [
        "Acción",
        "Comedia"
    ],
    "descripcion": "Berlín, ansioso por dar un nuevo golpe, reúne a su banda en Sevilla y convierte a un ambicioso duque en víctima de su propio plan: robar una obra de arte de Leonardo da Vinci.",
    "año": "2026",
    "calificacion": 8.3,
    "temporadas": [
        {
            "nombre": "Miniserie",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=308014&se=1&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=308014&se=1&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=308014&se=1&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=308014&se=1&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=308014&se=1&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=308014&se=1&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=308014&se=1&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=308014&se=1&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        }
    ]
},
{
    "id": "euphoria-2019",
    "tipo": "tv",
    "titulo": "Euphoria",
    "portada": "https://image.tmdb.org/t/p/w500/6Sdm5XwdCnspdEF8fTFx6UJrl7o.jpg",
    "banner": "https://image.tmdb.org/t/p/original/mez2Z3WqlPKNXpi7mWoiiE5guE9.jpg",
    "categorias": [],
    "descripcion": "Un grupo de adolescentes experimenta los altibajos del amor y la amistad en un mundo de redes sociales, sexo, drogas y violencia.",
    "año": "2019",
    "calificacion": 8.3,
    "temporadas": [
        {
            "nombre": "Temporada 1",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=85552&se=1&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=85552&se=1&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=85552&se=1&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=85552&se=1&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=85552&se=1&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=85552&se=1&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=85552&se=1&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=85552&se=1&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 2",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=85552&se=2&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=85552&se=2&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=85552&se=2&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=85552&se=2&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=85552&se=2&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=85552&se=2&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=85552&se=2&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=85552&se=2&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 3",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=85552&se=3&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=85552&se=3&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=85552&se=3&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=85552&se=3&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=85552&se=3&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=85552&se=3&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=85552&se=3&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=85552&se=3&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        }
    ]
},
{
    "id": "ninfomania-segunda-parte-2013",
    "tipo": "movie",
    "titulo": "Ninfomanía: segunda parte",
    "portada": "https://image.tmdb.org/t/p/w500/rxsV36TqzDwKoQnoocwEID71TMk.jpg",
    "banner": "https://image.tmdb.org/t/p/original/oQEAWIr3thvSICvoQnFEqyuf0Oz.jpg",
    "categorias": [],
    "descripcion": "Joe continua relatando su vida sexualmente dictada, profundizando los aspectos más oscuros de su vida adulta, y como la llevó a estar bajo el cuidado de Seligman.",
    "año": "2013",
    "calificacion": 6.7,
    "video": "https://vimeus.com/e/movie?tmdb=249397&view_key=4CFPPiDGDuYJRpF-3CxKzq3jyj3E0bLa-fVwwOsv90Q"
},
{
    "id": "scream-7-2026",
    "tipo": "movie",
    "titulo": "Scream 7",
    "portada": "https://image.tmdb.org/t/p/w500/jgJCp2TOtTMGWS766tQhNcuFhjs.jpg",
    "banner": "https://image.tmdb.org/t/p/original/t9J2HXaDuJR7bvIG9XF7mttn4VY.jpg",
    "categorias": [
        "Terror"
    ],
    "descripcion": "La tranquila y rehecha vida Sidney Prescott se cae a pedazos cuando Ghostface llega al pueblo. Sin embargo, sus peores temores se hacen realidad cuando su hija Tatum se convierte en la próxima víctima.",
    "año": "2026",
    "calificacion": 6.1,
    "video": "https://vimeus.com/e/movie?tmdb=1159559&view_key=4CFPPiDGDuYJRpF-3CxKzq3jyj3E0bLa-fVwwOsv90Q"
},
{
    "id": "el-diablo-viste-a-la-moda-2-2026",
    "tipo": "movie",
    "titulo": "El diablo viste a la moda 2",
    "portada": "https://image.tmdb.org/t/p/w500/rdvPsRItlhErfKF8Y0f0wjnxUzz.jpg",
    "banner": "https://image.tmdb.org/t/p/original/y3fQa7pytlysovXzovpXc1OQlTW.jpg",
    "categorias": [
        "Comedia"
    ],
    "descripcion": "Sigue la lucha de Miranda Priestly contra Emily Charlton, su ex asistente convertida en ejecutiva rival, mientras compiten por los ingresos por publicidad en medio de la decadencia de los medios impresos y Miranda se acerca a la jubilación.",
    "año": "2026",
    "calificacion": 6.6,
    "video": "https://vimeus.com/e/movie?tmdb=1314481&view_key=4CFPPiDGDuYJRpF-3CxKzq3jyj3E0bLa-fVwwOsv90Q"
},
{
    "id": "kick-ass-un-superheroe-sin-superpoderes-2010",
    "tipo": "movie",
    "titulo": "Kick-Ass: Un superhéroe sin superpoderes",
    "portada": "https://image.tmdb.org/t/p/w500/dyYP52hnVzioCxLSheogZBX0vXv.jpg",
    "banner": "https://image.tmdb.org/t/p/original/P4bGyJQF0shAcRku3I2perNUQR.jpg",
    "categorias": [
        "Acción"
    ],
    "descripcion": "Dave Lizewski es un inadvertido estudiante de secundaria y fanático de los cómics que un día decide convertirse en un superhéroe, aunque no tenga poderes, entrenamiento o una razón significativa para hacerlo.",
    "año": "2010",
    "calificacion": 7.1,
    "video": "https://vimeus.com/e/movie?tmdb=23483&view_key=4CFPPiDGDuYJRpF-3CxKzq3jyj3E0bLa-fVwwOsv90Q"
},
{
    "id": "gigantes-de-acero-2011",
    "tipo": "movie",
    "titulo": "Gigantes de Acero",
    "portada": "https://image.tmdb.org/t/p/w500/2iYS1XVm8vh5vokZhO3N4dtgODn.jpg",
    "banner": "https://image.tmdb.org/t/p/original/pjlxrd646cBYznHoPBWTzz6FujX.jpg",
    "categorias": [
        "Acción",
        "Ciencia Ficción"
    ],
    "descripcion": "En un futuro no muy lejano el boxeo es robótico: en los combates ya no se enfrentan seres humanos, sino robots humanoides, sofisticadas máquinas diseñadas para luchar. Charlie Kenton, un antiguo boxeador que casi llegó a alcanzar la gloria, está pasando una mala racha como promotor de combates. Un día, encuentra un viejo robot desechado y, al comprobar que es un gran boxeador, decide entrenarlo.",
    "año": "2011",
    "calificacion": 7.1,
    "video": "https://vimeus.com/e/movie?tmdb=39254&view_key=4CFPPiDGDuYJRpF-3CxKzq3jyj3E0bLa-fVwwOsv90Q"
},
{
    "id": "titanes-del-pacifico-2013",
    "tipo": "movie",
    "titulo": "Titanes Del Pacífico",
    "portada": "https://image.tmdb.org/t/p/w500/qGu6CHagpxv1XW6Bn3sUJ9SFaH0.jpg",
    "banner": "https://image.tmdb.org/t/p/original/9X7Im1YuBhyHYVD8r7CAONPJR5k.jpg",
    "categorias": [
        "Acción",
        "Ciencia Ficción"
    ],
    "descripcion": "Cuando legiones de monstruosas criaturas, denominadas Kaiju, comienzan a salir del mar, se inicia una guerra que acabará con millones de vidas y que consumirá los recursos de la humanidad durante interminables años. Para combatir a los Kaiju gigantes diseñan un tipo especial de arma: enormes robots, llamados Jaegers, que son controlados simultáneamente por dos pilotos cuyas mentes están bloqueadas en un puente neural. Pero incluso los Jaegers proporcionan poca defensa ante los incansables Kaiju. A punto de la derrota, las fuerzas que defienden a la humanidad no tienen otra elección que recurrir a dos insólitos héroes: un ex piloto acabado y un aprendiz que todavía no se ha puesto a prueba. Ambos se unen para traer a un legendario pero al parecer obsoleto Jaeger del pasado. Juntos, son la última esperanza de la humanidad frente al Apocalipsis que se avecina",
    "año": "2013",
    "calificacion": 6.9,
    "video": "https://vimeus.com/e/movie?tmdb=68726&view_key=4CFPPiDGDuYJRpF-3CxKzq3jyj3E0bLa-fVwwOsv90Q"
},
{
    "id": "titanes-del-pacifico-la-insurreccion-2018",
    "tipo": "movie",
    "titulo": "Titanes del Pacífico: La insurrección",
    "portada": "https://image.tmdb.org/t/p/w500/a35Ixg328dayyBuTZynfg34UnQs.jpg",
    "banner": "https://image.tmdb.org/t/p/original/oMaj75G2WFw66xI1TREg1hrToSg.jpg",
    "categorias": [
        "Acción",
        "Ciencia Ficción"
    ],
    "descripcion": "Un futuro cercano. Han pasado 10 años tras la primera invasión que sufrió la humanidad, pero la lucha aún no ha terminado. El planeta vuelve a ser asediado por los Kaiju, una raza de alienígenas colosales, que emergen desde un portal interdimensional con el objetivo de destruir a la raza humana. Ante esta nueva amenaza, los Jaegers, robots gigantes de guerra pilotados por dos personas para sobrellevar la inmensa carga neuronal que conlleva manipularlos, ya no están a la altura de lo que se les viene encima. Será entonces cuando los supervivientes de la primera invasión, además de nuevos personajes como el hijo de Pentecost, tendrán que idear la manera de sorprender al enorme enemigo, apostando por nuevas estrategias defensivas y de ataque. Con la Tierra en ruinas e intentando reconstruirse, esta nueva batalla puede ser decisiva para el futuro...",
    "año": "2018",
    "calificacion": 6.1,
    "video": "https://vimeus.com/e/movie?tmdb=268896&view_key=4CFPPiDGDuYJRpF-3CxKzq3jyj3E0bLa-fVwwOsv90Q"
},
{
    "id": "kick-ass-2-2013",
    "tipo": "movie",
    "titulo": "Kick-Ass 2",
    "portada": "https://image.tmdb.org/t/p/w500/wjFX0jaUl7tfgN0CDAbdgqqRwOT.jpg",
    "banner": "https://image.tmdb.org/t/p/original/dHBYguQvCDa00GMoidNYa7IOD8y.jpg",
    "categorias": [
        "Acción"
    ],
    "descripcion": "Después de la heroica acción de Kick-Ass, otros ciudadanos se inspiran para convertirse en cruzados enmascarados. Pero Niebla Roja dirige su propio grupo de supervillanos malvados para vengarse, matar a Kick-Ass y destruir todo lo que representa.",
    "año": "2013",
    "calificacion": 6.4,
    "video": "https://vimeus.com/e/movie?tmdb=59859&view_key=4CFPPiDGDuYJRpF-3CxKzq3jyj3E0bLa-fVwwOsv90Q"
},
{
    "id": "arcane-2021",
    "tipo": "tv",
    "titulo": "Arcane",
    "portada": "https://image.tmdb.org/t/p/w500/i1vSPUbiBe2iK2HapGDfHItBFlC.jpg",
    "banner": "https://image.tmdb.org/t/p/original/q8eejQcg1bAqImEV8jh8RtBD4uH.jpg",
    "categorias": [
        "Acción",
        "Animación"
    ],
    "descripcion": "Mientras la discordia separa las ciudades gemelas de Piltóver y Zaun, dos hermanas se enfrentan en una guerra feroz entre tecnologías mágicas y convicciones opuestas.",
    "año": "2021",
    "calificacion": 8.8,
    "temporadas": [
        {
            "nombre": "Temporada 1",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=94605&se=1&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=94605&se=1&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=94605&se=1&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=94605&se=1&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=94605&se=1&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=94605&se=1&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=94605&se=1&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=94605&se=1&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://vimeus.com/e/serie?tmdb=94605&se=1&ep=9&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 2",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=94605&se=2&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=94605&se=2&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=94605&se=2&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=94605&se=2&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=94605&se=2&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=94605&se=2&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=94605&se=2&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=94605&se=2&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://vimeus.com/e/serie?tmdb=94605&se=2&ep=9&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        }
    ]
},
{
    "id": "chernobyl-2019",
    "tipo": "tv",
    "titulo": "Chernobyl",
    "portada": "https://image.tmdb.org/t/p/w500/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg",
    "banner": "https://image.tmdb.org/t/p/original/3URK0z9PzpVNJrGE7XOuyy6KFzk.jpg",
    "categorias": [],
    "descripcion": "Sigue \"la verdadera historia\" de una de las peores catástrofes provocadas por el hombre y habla de los valientes hombres y mujeres que se sacrificaron para salvar a Europa de un desastre inimaginable. La miniserie se centra en el desgarrador alcance del desastre de la planta nuclear que ocurrió en Ucrania en abril de 1986, revelando cómo y por qué ocurrió, además contando las sorprendentes y notables historias de los héroes que lucharon y cayeron.",
    "año": "2019",
    "calificacion": 8.7,
    "temporadas": [
        {
            "nombre": "Miniseries",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=87108&se=1&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=87108&se=1&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=87108&se=1&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=87108&se=1&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=87108&se=1&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        }
    ]
},
{
    "id": "stranger-things-2016",
    "tipo": "tv",
    "titulo": "Stranger Things",
    "portada": "https://image.tmdb.org/t/p/w500/1sRJ8D1vpXE5WQBGrUBky3uUwvX.jpg",
    "banner": "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
    "categorias": [
        "Acción"
    ],
    "descripcion": "Después de la extraña desaparición de un niño, un pueblo se encuentra ante un misterio que revela experimentos secretos, fuerzas sobrenaturales y a una niña muy especial.",
    "año": "2016",
    "calificacion": 8.6,
    "temporadas": [
        {
            "nombre": "Stranger Things",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=1&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=1&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=1&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=1&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=1&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=1&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=1&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=1&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Stranger Things 2",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=2&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=2&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=2&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=2&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=2&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=2&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=2&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=2&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=2&ep=9&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Stranger Things 3",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=3&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=3&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=3&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=3&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=3&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=3&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=3&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=3&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Stranger Things 4",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=4&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=4&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=4&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=4&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=4&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=4&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=4&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=4&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=4&ep=9&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Stranger Things 5",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=5&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=5&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=5&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=5&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=5&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=5&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=5&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=66732&se=5&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        }
    ]
},
{
    "id": "rick-y-morty-2013",
    "tipo": "tv",
    "titulo": "Rick y Morty",
    "portada": "https://image.tmdb.org/t/p/w500/5Yiep9EwcQgLolg013ETBVqHxuD.jpg",
    "banner": "https://image.tmdb.org/t/p/original/Ao5pBFuWY32cVuh6iYjEjZMEscN.jpg",
    "categorias": [
        "Acción",
        "Comedia",
        "Animación"
    ],
    "descripcion": "Rick Sánchez es un genio científico alcohólico que se ha mudado con la familia de su hija Beth. Él pasa el tiempo con su nieto adolescente Morty (y en ocasiones con otros miembros de la familia) en aventuras peligrosas y surrealistas a través del espacio y universos paralelos.",
    "año": "2013",
    "calificacion": 8.7,
    "temporadas": [
        {
            "nombre": "Temporada 1",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=1&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=1&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=1&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=1&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=1&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=1&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=1&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=1&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=1&ep=9&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 10:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=1&ep=10&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 11:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=1&ep=11&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 2",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=2&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=2&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=2&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=2&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=2&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=2&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=2&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=2&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=2&ep=9&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 10:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=2&ep=10&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 3",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=3&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=3&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=3&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=3&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=3&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=3&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=3&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=3&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=3&ep=9&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 10:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=3&ep=10&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 4",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=4&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=4&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=4&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=4&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=4&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=4&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=4&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=4&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=4&ep=9&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 10:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=4&ep=10&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 5",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=5&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=5&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=5&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=5&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=5&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=5&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=5&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=5&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=5&ep=9&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 10:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=5&ep=10&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 6",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=6&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=6&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=6&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=6&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=6&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=6&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=6&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=6&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=6&ep=9&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 10:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=6&ep=10&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 7",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=7&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=7&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=7&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=7&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=7&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=7&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=7&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=7&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=7&ep=9&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 10:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=7&ep=10&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 8",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=8&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=8&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=8&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=8&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=8&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=8&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=8&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=8&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=8&ep=9&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 10:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=8&ep=10&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 9",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=9&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=9&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=9&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=9&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=9&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=9&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=9&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=9&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=9&ep=9&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 10:",
                    "video": "https://vimeus.com/e/serie?tmdb=60625&se=9&ep=10&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        }
    ]
},
{
    "id": "hora-de-aventura-con-fionna-cake-2023",
    "tipo": "tv",
    "titulo": "Hora de Aventura con Fionna & Cake",
    "portada": "https://image.tmdb.org/t/p/w500/2tgXQ9NU48mNgpsEWfyVzTb2Ho8.jpg",
    "banner": "https://image.tmdb.org/t/p/original/vRAM2el4bAygzUWfwXdt34E71Ee.jpg",
    "categorias": [
        "Acción",
        "Comedia",
        "Animación"
    ],
    "descripcion": "Fionna y Cake -con la ayuda de Simon Petrikov, el antiguo Rey Helado- se embarcan en una aventura a través de multiversos.",
    "año": "2023",
    "calificacion": 8.7,
    "temporadas": [
        {
            "nombre": "Temporada 1",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=131378&se=1&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=131378&se=1&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=131378&se=1&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=131378&se=1&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=131378&se=1&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=131378&se=1&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=131378&se=1&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=131378&se=1&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://vimeus.com/e/serie?tmdb=131378&se=1&ep=9&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 10:",
                    "video": "https://vimeus.com/e/serie?tmdb=131378&se=1&ep=10&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 2",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=131378&se=2&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=131378&se=2&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=131378&se=2&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=131378&se=2&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=131378&se=2&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=131378&se=2&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=131378&se=2&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=131378&se=2&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://vimeus.com/e/serie?tmdb=131378&se=2&ep=9&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 10:",
                    "video": "https://vimeus.com/e/serie?tmdb=131378&se=2&ep=10&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        }
    ]
},
{
    "id": "invencible-2021",
    "tipo": "tv",
    "titulo": "INVENCIBLE",
    "portada": "https://image.tmdb.org/t/p/w500/AdcfiT5FsjUooyP7CrKzEGmP9K1.jpg",
    "banner": "https://image.tmdb.org/t/p/original/9qrroces8C6R9aKr08hACNPVXdZ.jpg",
    "categorias": [
        "Acción",
        "Animación"
    ],
    "descripcion": "Mark Grayson hereda superpoderes a los diecisiete años y se une a su padre como uno de los mayores héroes de la Tierra. Todos sus sueños se hacen realidad, hasta que un evento impactante lo cambia todo.",
    "año": "2021",
    "calificacion": 8.6,
    "temporadas": [
        {
            "nombre": "Temporada 1",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=95557&se=1&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=95557&se=1&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=95557&se=1&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=95557&se=1&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=95557&se=1&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=95557&se=1&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=95557&se=1&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=95557&se=1&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 2",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=95557&se=2&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=95557&se=2&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=95557&se=2&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=95557&se=2&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=95557&se=2&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=95557&se=2&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=95557&se=2&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=95557&se=2&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 3",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=95557&se=3&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=95557&se=3&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=95557&se=3&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=95557&se=3&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=95557&se=3&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 4",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=95557&se=4&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=95557&se=4&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=95557&se=4&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=95557&se=4&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=95557&se=4&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=95557&se=4&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=95557&se=4&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=95557&se=4&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 5",
            "capitulos": []
        }
    ]
},
{
    "id": "the-punisher-la-ultima-muerte-2026",
    "tipo": "movie",
    "titulo": "The Punisher: La última muerte",
    "portada": "https://image.tmdb.org/t/p/w500/qkyqQqQN8HAkLezR6xWTYzz6Icv.jpg",
    "banner": "https://image.tmdb.org/t/p/original/qO55CD8tgVL1T4WKn6zYFFiD6lL.jpg",
    "categorias": [
        "Acción"
    ],
    "descripcion": "Mientras Frank Castle busca propósito más allá de la venganza, una fuerza inesperada lo arrastra de nuevo a la lucha.",
    "año": "2026",
    "calificacion": 8.5,
    "video": "https://vimeus.com/e/movie?tmdb=1439930&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "proyecto-fin-del-mundo-2026",
    "tipo": "movie",
    "titulo": "Proyecto Fin del Mundo",
    "portada": "https://image.tmdb.org/t/p/w500/cWpvRQcppLnXD0Kno4OZUzkA05R.jpg",
    "banner": "https://image.tmdb.org/t/p/original/2I1OFQJ0L9T0dpU6FobKFWV2PxX.jpg",
    "categorias": [
        "Ciencia Ficción"
    ],
    "descripcion": "El profesor de ciencias Ryland Grace despierta en una nave espacial a años luz de su hogar sin recordar quién es ni cómo llegó allí. A medida que recupera la memoria, comienza a descubrir su misión: resolver el enigma de la misteriosa sustancia que está causando la extinción del sol.",
    "año": "2026",
    "calificacion": 8.6,
    "video": "https://vimeus.com/e/movie?tmdb=687163&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "intercambiados-2026",
    "tipo": "movie",
    "titulo": "Intercambiados",
    "portada": "https://image.tmdb.org/t/p/w500/m0psah5Ttchm7Jlp74NZ5xDe6C8.jpg",
    "banner": "https://image.tmdb.org/t/p/original/zMwhWailP1WY7sb6AoE6b8ugoy.jpg",
    "categorias": [
        "Familiares",
        "Animación"
    ],
    "descripcion": "Una pequeña criatura del bosque y un ave majestuosa intercambian cuerpos. Ahora, deben aliarse para sobrevivir a la aventura más salvaje de sus vidas.",
    "año": "2026",
    "calificacion": 9,
    "video": "https://vimeus.com/e/movie?tmdb=1007757&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "el-diablo-viste-a-la-moda-2006",
    "tipo": "movie",
    "titulo": "El diablo viste a la moda",
    "portada": "https://image.tmdb.org/t/p/w500/gvBvYFS9LVeukBYcdBX2HJZN4DL.jpg",
    "banner": "https://image.tmdb.org/t/p/original/gkh6Nt8DtY1XT4gQsyFq9XAVJlJ.jpg",
    "categorias": [
        "Comedia"
    ],
    "descripcion": "En el vertiginoso mundo de la moda de Nueva York, la cumbre del éxito la representa la revista Runway, dirigida con mano de hierro por Miranda Priestly. Trabajar como ayudante de Miranda podría abrirle cualquier puerta a Andy Sachs, si no fuera porque es una chica que destaca por su desaliño estilo dentro del grupo de guapísimas periodistas de la revista. Andy comprende muy pronto que para triunfar en ese negocio va a necesitar algo más que iniciativa y preparación. Y la prueba está delante de ella, vestida de pies a cabeza de Prada.",
    "año": "2006",
    "calificacion": 7.4,
    "video": "https://vimeus.com/e/movie?tmdb=350&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "mortal-kombat-ii-2026",
    "tipo": "movie",
    "titulo": "Mortal Kombat II",
    "portada": "https://image.tmdb.org/t/p/w500/niXSl8jLAZu9fL1ywfNyLGCRXLh.jpg",
    "banner": "https://image.tmdb.org/t/p/original/4EAAwpylq313qrDqpCxulUrXBNF.jpg",
    "categorias": [
        "Acción"
    ],
    "descripcion": "Los campeones favoritos de los fans —ahora acompañados por el mismísimo Johnny Cage— se enfrentan entre sí en la batalla definitiva, sangrienta y sin reglas, para derrotar el oscuro dominio de Shao Kahn, que amenaza con destruir el Reino de la Tierra y a sus defensores.",
    "año": "2026",
    "calificacion": 6.9,
    "video": "https://vimeus.com/e/movie?tmdb=931285&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "apex-2026",
    "tipo": "movie",
    "titulo": "Ápex",
    "portada": "https://image.tmdb.org/t/p/w500/e4P0lkcHgsBJgWSvLV3ezGZYDUU.jpg",
    "banner": "https://image.tmdb.org/t/p/original/oTE4lNs4PSG5iIWjqaTdCIFJ4Bs.jpg",
    "categorias": [
        "Acción",
        "Suspenso"
    ],
    "descripcion": "Una mujer en duelo que busca poner a prueba sus límites en la naturaleza australiana queda atrapada en un retorcido juego mortal con un asesino que la considera su presa.",
    "año": "2026",
    "calificacion": 6.7,
    "video": "https://vimeus.com/e/movie?tmdb=1318447&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "mortal-kombat-2021",
    "tipo": "movie",
    "titulo": "Mortal Kombat",
    "portada": "https://image.tmdb.org/t/p/w500/wsbYUyEYO6dtOoTIBr8et8kGAhb.jpg",
    "banner": "https://image.tmdb.org/t/p/original/6ELCZlTA5lGUops70hKdB83WJxH.jpg",
    "categorias": [
        "Acción"
    ],
    "descripcion": "Un boxeador fracasado descubre un secreto familiar que le lleva a un torneo místico llamado Mortal Kombat donde conoce a un grupo de guerreros que luchan a muerte para salvar los reinos del malvado hechicero Shang Tsung.",
    "año": "2021",
    "calificacion": 7,
    "video": "https://vimeus.com/e/movie?tmdb=460465&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "avatar-fuego-y-ceniza-2025",
    "tipo": "movie",
    "titulo": "Avatar: Fuego y ceniza",
    "portada": "https://image.tmdb.org/t/p/w500/vHtH4xdcTbaCVftGwaeGFHfOB3p.jpg",
    "banner": "https://image.tmdb.org/t/p/original/iN41Ccw4DctL8npfmYg1j5Tr1eb.jpg",
    "categorias": [
        "Ciencia Ficción"
    ],
    "descripcion": "Devastados por la guerra contra la RDA y la perdida de su hijo mayor, Jake Sully y Neytiri se enfrentan a una nueva amenaza en Pandora: el pueblo de la ceniza, una violenta tribu Na'vi ávida de poder liderada por los despiadados Varang.",
    "año": "2025",
    "calificacion": 7.5,
    "video": "https://vimeus.com/e/movie?tmdb=83533&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "hoppers-operacion-castor-2026",
    "tipo": "movie",
    "titulo": "Hoppers: Operación castor",
    "portada": "https://image.tmdb.org/t/p/w500/7NRpCaksHX0FEsXCNITOvhq7cZ3.jpg",
    "banner": "https://image.tmdb.org/t/p/original/u53UYu5XG2hNgWGvs3xGhAVzypl.jpg",
    "categorias": [
        "Familiares",
        "Comedia",
        "Animación",
        "Ciencia Ficción"
    ],
    "descripcion": "Mabel, una amante de los animales, utiliza una nueva e inteligente tecnología diseñada para \"transmitir\" la conciencia humana a animales robóticos realistas en un intento de comunicarse con los castores, descubriendo misterios dentro del mundo animal más allá de lo que pudiera haber imaginado.",
    "año": "2026",
    "calificacion": 8.1,
    "video": "https://vimeus.com/e/movie?tmdb=1327819&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "sangre-asesina-2026",
    "tipo": "movie",
    "titulo": "Sangre asesina",
    "portada": "https://image.tmdb.org/t/p/w500/16TvbhCP8CfiGEbxcbtQLYWO6WG.jpg",
    "banner": "https://image.tmdb.org/t/p/original/xA6AM5MvEkieZKlv1Tn3sN23I7i.jpg",
    "categorias": [
        "Acción"
    ],
    "descripcion": "Una mujer perseguida por su inusual tipo de sangre encuentra protección y amor en los brazos de un asesino letal. Juntos, luchan por sobrevivir.",
    "año": "2026",
    "calificacion": 8.6,
    "video": "https://vimeus.com/e/movie?tmdb=1630423&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "demon-slayer-kimetsu-no-yaiba-castillo-infinito-2025",
    "tipo": "movie",
    "titulo": "Demon Slayer: Kimetsu no Yaiba Castillo infinito",
    "portada": "https://image.tmdb.org/t/p/w500/6N21gcFbhT4ocdTU4MGREAaM5Vz.jpg",
    "banner": "https://image.tmdb.org/t/p/original/1RgPyOhN4DRs225BGTlHJqCudII.jpg",
    "categorias": [
        "Acción",
        "Animación"
    ],
    "descripcion": "Tanjirō Kamado es un chico que se unió a una organización dedicada a cazar demonios después de que su hermana menor, Nezuko, fuera convertida. Mientras los miembros de la organización y los Pilares participaban en un programa de entrenamiento grupal, como preparación para la inminente batalla contra los demonios, Muzan Kibutsuji aparece en la Mansión Ubuyashiki. Con el jefe de la organización en peligro, Tanjirō y los Pilares corren hacia la mansión, pero son arrastrados a un espacio misterioso por obra de Kibutsuji. El lugar al que han caído Tanjirō y los cazadores es el bastión de los demonios: el Castillo Infinito. Así, el campo de batalla queda establecido para dar fin a la guerra entre humanos y demonios.",
    "año": "2025",
    "calificacion": 7.7,
    "video": "https://vimeus.com/e/movie?tmdb=1311031&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "zootopia-2-2025",
    "tipo": "movie",
    "titulo": "Zootopia 2",
    "portada": "https://image.tmdb.org/t/p/w500/LrMBxFwnsMgXTnaWqHYinn3vDN.jpg",
    "banner": "https://image.tmdb.org/t/p/original/lgotja3xMoJZbynwHfcQcJAEMWH.jpg",
    "categorias": [
        "Familiares",
        "Comedia",
        "Animación"
    ],
    "descripcion": "Tras resolver el caso más importante de la historia de Zootopia, los policías novatos Judy Hopps y Nick Wilde se encuentran en la sinuosa pista de un gran misterio cuando Gary De'Snake llega y revoluciona la metrópolis animal.",
    "año": "2025",
    "calificacion": 7.6,
    "video": "https://vimeus.com/e/movie?tmdb=1084242&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
},
{
    "id": "el-juego-del-calamar-2021",
    "tipo": "tv",
    "titulo": "El juego del calamar",
    "portada": "https://image.tmdb.org/t/p/w500/xx3Zurg2mVep7UhXAjeYuetOvsB.jpg",
    "banner": "https://image.tmdb.org/t/p/original/2meX1nMdScFOoV4370rqHWKmXhY.jpg",
    "categorias": [
        "Acción"
    ],
    "descripcion": "Cientos de jugadores cortos de dinero aceptan una extraña invitación a competir en juegos infantiles. Adentro les espera un premio irresistible... con un riesgo mortal.",
    "año": "2021",
    "calificacion": 7.9,
    "temporadas": [
        {
            "nombre": "Temporada 1",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=93405&se=1&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=93405&se=1&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=93405&se=1&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=93405&se=1&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=93405&se=1&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=93405&se=1&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=93405&se=1&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=93405&se=1&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://vimeus.com/e/serie?tmdb=93405&se=1&ep=9&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 2",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=93405&se=2&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=93405&se=2&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=93405&se=2&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=93405&se=2&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=93405&se=2&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=93405&se=2&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=93405&se=2&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 3",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=93405&se=3&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=93405&se=3&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=93405&se=3&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=93405&se=3&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=93405&se=3&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=93405&se=3&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        }
    ]
},
{
    "id": "fallout-2024",
    "tipo": "tv",
    "titulo": "Fallout",
    "portada": "https://image.tmdb.org/t/p/w500/uNctKf62RRL8RKPTrdyFrcttwT2.jpg",
    "banner": "https://image.tmdb.org/t/p/original/cIgHBLTMbcIkS0yvIrUUVVKLdOz.jpg",
    "categorias": [
        "Acción"
    ],
    "descripcion": "Basado en una de las mejores series de videojuegos de todos los tiempos, Fallout es la historia de los que tienen y los que no tienen en un mundo en el que ya casi no queda nada que tener. 200 años después del apocalipsis, los amables habitantes de los lujosos refugios nucleares se ven obligados a regresar al infierno irradiado que sus antepasados dejaron atrás y se sorprenden al descubrir un universo increíblemente complejo, alegremente extraño y altamente violento esperándolos.",
    "año": "2024",
    "calificacion": 8.1,
    "temporadas": [
        {
            "nombre": "Temporada 1",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=106379&se=1&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=106379&se=1&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=106379&se=1&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=106379&se=1&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=106379&se=1&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=106379&se=1&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=106379&se=1&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=106379&se=1&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 2",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=106379&se=2&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=106379&se=2&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=106379&se=2&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=106379&se=2&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=106379&se=2&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=106379&se=2&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=106379&se=2&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=106379&se=2&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        }
    ]
},
{
    "id": "game-of-thrones-2011",
    "tipo": "tv",
    "titulo": "Game of Thrones",
    "portada": "https://image.tmdb.org/t/p/w500/z9gCSwIObDOD2BEtmUwfasar3xs.jpg",
    "banner": "https://image.tmdb.org/t/p/original/2OMB0ynKlyIenMJWI2Dy9IWT4c.jpg",
    "categorias": [
        "Acción"
    ],
    "descripcion": "En un mundo fantástico y en un contexto medieval varias familias, relativas a la nobleza, se disputan el poder para dominar el territorio ficticio de Poniente (Westeros) y tomar el control de los Siete Reinos desde el Trono de Hierro, lugar donde el rey ejerce el poder.",
    "año": "2011",
    "calificacion": 8.5,
    "temporadas": [
        {
            "nombre": "Temporada 1",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=1&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=1&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=1&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=1&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=1&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=1&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=1&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=1&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=1&ep=9&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 10:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=1&ep=10&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 2",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=2&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=2&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=2&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=2&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=2&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=2&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=2&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=2&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=2&ep=9&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 10:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=2&ep=10&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 3",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=3&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=3&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=3&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=3&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=3&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=3&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=3&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=3&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=3&ep=9&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 10:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=3&ep=10&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 4",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=4&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=4&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=4&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=4&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=4&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=4&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=4&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=4&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=4&ep=9&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 10:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=4&ep=10&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 5",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=5&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=5&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=5&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=5&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=5&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=5&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=5&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=5&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=5&ep=9&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 10:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=5&ep=10&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 6",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=6&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=6&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=6&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=6&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=6&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=6&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=6&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=6&ep=8&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=6&ep=9&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 10:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=6&ep=10&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 7",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=7&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=7&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=7&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=7&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=7&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=7&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=7&ep=7&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        },
        {
            "nombre": "Temporada 8",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=8&ep=1&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=8&ep=2&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=8&ep=3&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=8&ep=4&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=8&ep=5&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://vimeus.com/e/serie?tmdb=1399&se=8&ep=6&view_key=iVqlpeCIuUBp2s1pqhEFHqFi2s1XdoAZKhJh0GcmXdo"
                }
            ]
        }
    ]
},
{
    "id": "spider-man-un-nuevo-dia-2026",
    "tipo": "movie",
    "titulo": "Spider-Man: Un nuevo día",
    "portada": "https://image.tmdb.org/t/p/w500/rG5OhgBvF0zRI7lw5lhOUYi196K.jpg",
    "banner": "https://image.tmdb.org/t/p/original/qeQJx07rK2xm8SD2sJxFKhE7gs0.jpg",
    "categorias": [
        "Acción",
        "Ciencia Ficción"
    ],
    "descripcion": "A medida qué Spider-Man está en la cima de su carrera protegiendo la ciudad de Nueva York, una serie de crímenes inusuales lo arrastran a una red de misterios más grande de lo que jamás haya enfrentado.",
    "año": "2026",
    "calificacion": 8,
    "video": "https://unlimplay.com/play/embed/movie/969681"
},
{
    "id": "supergirl-2026",
    "tipo": "movie",
    "titulo": "Supergirl",
    "portada": "https://image.tmdb.org/t/p/w500/xhei2GX9L2H1eQlrHeFw44VNLd1.jpg",
    "banner": "https://image.tmdb.org/t/p/original/4X2YSe8PaYbsBqX3TDmmIU4vOju.jpg",
    "categorias": [
        "Acción",
        "Ciencia Ficción"
    ],
    "descripcion": "Mientras celebra su cumpleaños número 21, Kara Zor-El viaja por la galaxia con su perro Krypto, durante el cual conoce a la joven Ruthye Marye Knoll y emprende una \"búsqueda asesina de venganza\".",
    "año": "2026",
    "calificacion": 6.8,
    "video": "https://unlimplay.com/play/embed/movie/1081003"
},
{
    "id": "minions-monstruos-2026",
    "tipo": "movie",
    "titulo": "Minions & Monstruos",
    "portada": "https://image.tmdb.org/t/p/w500/9THY3T4kn5D2rZhwwQ6t7XQtHtv.jpg",
    "banner": "https://image.tmdb.org/t/p/original/kkcwhgSFd81QDlXo8ytrpHPQjhy.jpg",
    "categorias": [
        "Familiares",
        "Comedia",
        "Animación"
    ],
    "descripcion": "Esta es la historia alocada, ridícula y totalmente verídica de cómo los Minions conquistaron Hollywood, se convirtieron en estrellas de cine, lo perdieron todo, desataron monstruos en el mundo y luego se unieron para intentar salvar al planeta del caos que acababan de crear.",
    "año": "2026",
    "calificacion": 6.4,
    "video": "https://unlimplay.com/play/embed/movie/1315772"
},
{
    "id": "scary-movie-terrorificamente-incorrecta-2026",
    "tipo": "movie",
    "titulo": "Scary Movie: Terroríficamente incorrecta",
    "portada": "https://image.tmdb.org/t/p/w500/cAvdDPtiuVCauhjCwqK4EX2woHL.jpg",
    "banner": "https://image.tmdb.org/t/p/original/xWBiXclrRmTggQHMRsIn84YHavs.jpg",
    "categorias": [
        "Comedia"
    ],
    "descripcion": "Veintiséis años después de conseguir escapar de un asesino enmascarado sospechosamente familiar, el Core Four están de vuelta en el punto de mira del asesino y ninguna película de terror está a salvo.",
    "año": "2026",
    "calificacion": 6.5,
    "video": "https://unlimplay.com/play/embed/movie/1273221"
},
{
    "id": "dragon-ball-super-broly-2018",
    "tipo": "movie",
    "titulo": "Dragon Ball Super: Broly",
    "portada": "https://image.tmdb.org/t/p/w500/ylSduoEUU750sTT7De088flcymS.jpg",
    "banner": "https://image.tmdb.org/t/p/original/Dnk4iSqqNkZBJBPeFdAegTaxD5.jpg",
    "categorias": [
        "Acción",
        "Animación",
        "Ciencia Ficción"
    ],
    "descripcion": "La Tierra se encuentra en paz luego de disputarse el Torneo del Poder. Al darse cuenta de que en el universo aún hay personas extremadamente fuertes, Goku pasa los días entrenando para alcanzar un nivel superior. Pero un día, Goku y Vegeta son confrontados por un misterioso Saiyajin llamado Broly. La raza Saiyajin debería haberse extinguido por completo tras la destrucción del Planeta Vegeta, pero entonces, ¿qué está haciendo en la Tierra? Freezer, que ha regresado del infierno, está involucrado nuevamente y el encuentro entre estos tres Saiyajins, que han tenido un destino totalmente diferente, se convertirá en una batalla feroz.",
    "año": "2018",
    "calificacion": 7.9,
    "video": "https://vimeus.com/e/movie?tmdb=503314&view_key=0tURgp37hTwP_15LiVU6wg6Yw1yNNh5EhFd1i7Bo96c"
},
{
    "id": "avatar-aang-el-ultimo-maestro-aire-2026",
    "tipo": "movie",
    "titulo": "Avatar: Aang, El último Maestro Aire",
    "portada": "https://image.tmdb.org/t/p/w500/e2VzQmZufeY3BPH0zWtIyr07Z7w.jpg",
    "banner": "https://image.tmdb.org/t/p/original/p7MklBlRr0eRAxJSOnuV4rO08z4.jpg",
    "categorias": [
        "Acción",
        "Animación"
    ],
    "descripcion": "Avatar Aang, el último Maestro Aire del mundo, se entera de un antiguo poder que podría salvar a su cultura de la extinción. Con la ayuda de sus amigos, se embarca en una búsqueda global para encontrarlo antes de que caiga en las manos equivocadas y amenace con deshacer la paz por la que lo sacrificaron todo.",
    "año": "2026",
    "calificacion": 9.3,
    "video": "https://unlimplay.com/play/embed/movie/980431"
},
{
    "id": "miraculous-las-aventuras-de-ladybug-2015",
    "tipo": "tv",
    "titulo": "Miraculous: Las aventuras de Ladybug",
    "portada": "https://image.tmdb.org/t/p/w500/z9n5ZOECtbug5h07kq7RxoLRBOZ.jpg",
    "banner": "https://image.tmdb.org/t/p/original/lH22EnM0ofC7GsVGU8dAA2RXV1c.jpg",
    "categorias": [
        "Acción",
        "Animación"
    ],
    "descripcion": "Ambientada en París, la serie está protagonizada por dos jóvenes de 14 años: Marinette Dupain-Cheng y Adrien Agreste. Ambos son compañeros en el colegio y llevan la vida normal de cualquier adolescente, pero cuando el mal amenaza la ciudad son capaces de transformarse en superhéroes gracias al poder de unas joyas mágicas, los Miraculous, y las criaturas que están asociadas a ellas, los kwamis.",
    "año": "2015",
    "calificacion": 8.1,
    "temporadas": [
        {
            "nombre": "Temporada 1",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/1/1"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/1/2"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/1/3"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/1/4"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/1/5"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/1/6"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/1/7"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/1/8"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/1/9"
                },
                {
                    "titulo": "Capítulo 10:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/1/10"
                },
                {
                    "titulo": "Capítulo 11:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/1/11"
                },
                {
                    "titulo": "Capítulo 12:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/1/12"
                },
                {
                    "titulo": "Capítulo 13:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/1/13"
                },
                {
                    "titulo": "Capítulo 14:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/1/14"
                },
                {
                    "titulo": "Capítulo 15:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/1/15"
                },
                {
                    "titulo": "Capítulo 16:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/1/16"
                },
                {
                    "titulo": "Capítulo 17:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/1/17"
                },
                {
                    "titulo": "Capítulo 18:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/1/18"
                },
                {
                    "titulo": "Capítulo 19:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/1/19"
                },
                {
                    "titulo": "Capítulo 20:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/1/20"
                },
                {
                    "titulo": "Capítulo 21:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/1/21"
                },
                {
                    "titulo": "Capítulo 22:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/1/22"
                },
                {
                    "titulo": "Capítulo 23:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/1/23"
                },
                {
                    "titulo": "Capítulo 24:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/1/24"
                },
                {
                    "titulo": "Capítulo 25:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/1/25"
                },
                {
                    "titulo": "Capítulo 26:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/1/26"
                }
            ]
        },
        {
            "nombre": "Temporada 2",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/2/1"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/2/2"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/2/3"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/2/4"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/2/5"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/2/6"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/2/7"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/2/8"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/2/9"
                },
                {
                    "titulo": "Capítulo 10:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/2/10"
                },
                {
                    "titulo": "Capítulo 11:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/2/11"
                },
                {
                    "titulo": "Capítulo 12:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/2/12"
                },
                {
                    "titulo": "Capítulo 13:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/2/13"
                },
                {
                    "titulo": "Capítulo 14:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/2/14"
                },
                {
                    "titulo": "Capítulo 15:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/2/15"
                },
                {
                    "titulo": "Capítulo 16:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/2/16"
                },
                {
                    "titulo": "Capítulo 17:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/2/17"
                },
                {
                    "titulo": "Capítulo 18:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/2/18"
                },
                {
                    "titulo": "Capítulo 19:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/2/19"
                },
                {
                    "titulo": "Capítulo 20:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/2/20"
                },
                {
                    "titulo": "Capítulo 21:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/2/21"
                },
                {
                    "titulo": "Capítulo 22:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/2/22"
                },
                {
                    "titulo": "Capítulo 23:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/2/23"
                },
                {
                    "titulo": "Capítulo 24:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/2/24"
                },
                {
                    "titulo": "Capítulo 25:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/2/25"
                }
            ]
        },
        {
            "nombre": "Temporada 3",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/3/1"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/3/2"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/3/3"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/3/4"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/3/5"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/3/6"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/3/7"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/3/8"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/3/9"
                },
                {
                    "titulo": "Capítulo 10:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/3/10"
                },
                {
                    "titulo": "Capítulo 11:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/3/11"
                },
                {
                    "titulo": "Capítulo 12:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/3/12"
                },
                {
                    "titulo": "Capítulo 13:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/3/13"
                },
                {
                    "titulo": "Capítulo 14:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/3/14"
                },
                {
                    "titulo": "Capítulo 15:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/3/15"
                },
                {
                    "titulo": "Capítulo 16:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/3/16"
                },
                {
                    "titulo": "Capítulo 17:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/3/17"
                },
                {
                    "titulo": "Capítulo 18:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/3/18"
                },
                {
                    "titulo": "Capítulo 19:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/3/19"
                },
                {
                    "titulo": "Capítulo 20:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/3/20"
                },
                {
                    "titulo": "Capítulo 21:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/3/21"
                },
                {
                    "titulo": "Capítulo 22:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/3/22"
                },
                {
                    "titulo": "Capítulo 23:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/3/23"
                },
                {
                    "titulo": "Capítulo 24:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/3/24"
                },
                {
                    "titulo": "Capítulo 25:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/3/25"
                }
            ]
        },
        {
            "nombre": "Temporada 4",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/4/1"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/4/2"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/4/3"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/4/4"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/4/5"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/4/6"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/4/7"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/4/8"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/4/9"
                },
                {
                    "titulo": "Capítulo 10:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/4/10"
                },
                {
                    "titulo": "Capítulo 11:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/4/11"
                },
                {
                    "titulo": "Capítulo 12:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/4/12"
                },
                {
                    "titulo": "Capítulo 13:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/4/13"
                },
                {
                    "titulo": "Capítulo 14:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/4/14"
                },
                {
                    "titulo": "Capítulo 15:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/4/15"
                },
                {
                    "titulo": "Capítulo 16:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/4/16"
                },
                {
                    "titulo": "Capítulo 17:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/4/17"
                },
                {
                    "titulo": "Capítulo 18:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/4/18"
                },
                {
                    "titulo": "Capítulo 19:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/4/19"
                },
                {
                    "titulo": "Capítulo 20:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/4/20"
                },
                {
                    "titulo": "Capítulo 21:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/4/21"
                },
                {
                    "titulo": "Capítulo 22:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/4/22"
                },
                {
                    "titulo": "Capítulo 23:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/4/23"
                },
                {
                    "titulo": "Capítulo 24:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/4/24"
                },
                {
                    "titulo": "Capítulo 25:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/4/25"
                },
                {
                    "titulo": "Capítulo 26:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/4/26"
                }
            ]
        },
        {
            "nombre": "Temporada 5",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/5/1"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/5/2"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/5/3"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/5/4"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/5/5"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/5/6"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/5/7"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/5/8"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/5/9"
                },
                {
                    "titulo": "Capítulo 10:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/5/10"
                },
                {
                    "titulo": "Capítulo 11:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/5/11"
                },
                {
                    "titulo": "Capítulo 12:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/5/12"
                },
                {
                    "titulo": "Capítulo 13:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/5/13"
                },
                {
                    "titulo": "Capítulo 14:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/5/14"
                },
                {
                    "titulo": "Capítulo 15:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/5/15"
                },
                {
                    "titulo": "Capítulo 16:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/5/16"
                },
                {
                    "titulo": "Capítulo 17:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/5/17"
                },
                {
                    "titulo": "Capítulo 18:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/5/18"
                },
                {
                    "titulo": "Capítulo 19:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/5/19"
                },
                {
                    "titulo": "Capítulo 20:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/5/20"
                },
                {
                    "titulo": "Capítulo 21:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/5/21"
                },
                {
                    "titulo": "Capítulo 22:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/5/22"
                },
                {
                    "titulo": "Capítulo 23:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/5/23"
                },
                {
                    "titulo": "Capítulo 24:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/5/24"
                },
                {
                    "titulo": "Capítulo 25:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/5/25"
                },
                {
                    "titulo": "Capítulo 26:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/5/26"
                }
            ]
        },
        {
            "nombre": "Temporada 6",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/6/1"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/6/2"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/6/3"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/6/4"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/6/5"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/6/6"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/6/7"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/6/8"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/6/9"
                },
                {
                    "titulo": "Capítulo 10:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/6/10"
                },
                {
                    "titulo": "Capítulo 11:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/6/11"
                },
                {
                    "titulo": "Capítulo 12:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/6/12"
                },
                {
                    "titulo": "Capítulo 13:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/6/13"
                },
                {
                    "titulo": "Capítulo 14:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/6/14"
                },
                {
                    "titulo": "Capítulo 15:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/6/15"
                },
                {
                    "titulo": "Capítulo 16:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/6/16"
                },
                {
                    "titulo": "Capítulo 17:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/6/17"
                },
                {
                    "titulo": "Capítulo 18:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/6/18"
                },
                {
                    "titulo": "Capítulo 19:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/6/19"
                },
                {
                    "titulo": "Capítulo 20:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/6/20"
                },
                {
                    "titulo": "Capítulo 21:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/6/21"
                },
                {
                    "titulo": "Capítulo 22:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/6/22"
                },
                {
                    "titulo": "Capítulo 23:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/6/23"
                },
                {
                    "titulo": "Capítulo 24:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/6/24"
                },
                {
                    "titulo": "Capítulo 25:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/6/25"
                },
                {
                    "titulo": "Capítulo 26:",
                    "video": "https://unlimplay.com/play/embed/tv/65334/6/26"
                }
            ]
        }
    ]
},
{
    "id": "avatar-la-leyenda-de-aang-2024",
    "tipo": "tv",
    "titulo": "Avatar: La leyenda de Aang",
    "portada": "https://image.tmdb.org/t/p/w500/bdWexsml1vsB1X2tJMZOz8YC93a.jpg",
    "banner": "https://image.tmdb.org/t/p/original/aVvRQJ2Ckhlym4uh0YGc166CUoP.jpg",
    "categorias": [
        "Familiares",
        "Acción"
    ],
    "descripcion": "Un chico dice ser el próximo Avatar, por lo cual debe aprender a dominar los cuatro elementos y salvar al mundo de una guerra contra un enemigo tan ambicioso como despiadado.",
    "año": "2024",
    "calificacion": 7.8,
    "temporadas": [
        {
            "nombre": "Temporada 1",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://unlimplay.com/play/embed/tv/82452/1/1"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://unlimplay.com/play/embed/tv/82452/1/2"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://unlimplay.com/play/embed/tv/82452/1/3"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://unlimplay.com/play/embed/tv/82452/1/4"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://unlimplay.com/play/embed/tv/82452/1/5"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://unlimplay.com/play/embed/tv/82452/1/6"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://unlimplay.com/play/embed/tv/82452/1/7"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://unlimplay.com/play/embed/tv/82452/1/8"
                }
            ]
        },
        {
            "nombre": "Temporada 2",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://unlimplay.com/play/embed/tv/82452/2/1"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://unlimplay.com/play/embed/tv/82452/2/2"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://unlimplay.com/play/embed/tv/82452/2/3"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://unlimplay.com/play/embed/tv/82452/2/4"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://unlimplay.com/play/embed/tv/82452/2/5"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://unlimplay.com/play/embed/tv/82452/2/6"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://unlimplay.com/play/embed/tv/82452/2/7"
                }
            ]
        }
    ]
},
{
    "id": "spyfamily-2022",
    "tipo": "tv",
    "titulo": "SPY×FAMILY",
    "portada": "https://image.tmdb.org/t/p/w500/vaIREdPGZOnW9Jrs86mheVVlIQQ.jpg",
    "banner": "https://image.tmdb.org/t/p/original/lysUnU6V0VfcthDbviuVlIqgHOR.jpg",
    "categorias": [
        "Acción",
        "Comedia",
        "Animación"
    ],
    "descripcion": "Un espía, una asesina y una telépata se juntan, fingen ser una familia, cada cual por sus razones, y esconden sus verdaderas identidades el uno del otro.",
    "año": "2022",
    "calificacion": 8.5,
    "temporadas": [
        {
            "nombre": "Temporada 1",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/1/1"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/1/2"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/1/3"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/1/4"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/1/5"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/1/6"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/1/7"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/1/8"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/1/9"
                },
                {
                    "titulo": "Capítulo 10:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/1/10"
                },
                {
                    "titulo": "Capítulo 11:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/1/11"
                },
                {
                    "titulo": "Capítulo 12:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/1/12"
                },
                {
                    "titulo": "Capítulo 13:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/1/13"
                },
                {
                    "titulo": "Capítulo 14:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/1/14"
                },
                {
                    "titulo": "Capítulo 15:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/1/15"
                },
                {
                    "titulo": "Capítulo 16:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/1/16"
                },
                {
                    "titulo": "Capítulo 17:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/1/17"
                },
                {
                    "titulo": "Capítulo 18:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/1/18"
                },
                {
                    "titulo": "Capítulo 19:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/1/19"
                },
                {
                    "titulo": "Capítulo 20:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/1/20"
                },
                {
                    "titulo": "Capítulo 21:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/1/21"
                },
                {
                    "titulo": "Capítulo 22:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/1/22"
                },
                {
                    "titulo": "Capítulo 23:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/1/23"
                },
                {
                    "titulo": "Capítulo 24:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/1/24"
                },
                {
                    "titulo": "Capítulo 25:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/1/25"
                }
            ]
        },
        {
            "nombre": "Temporada 2",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/2/1"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/2/2"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/2/3"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/2/4"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/2/5"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/2/6"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/2/7"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/2/8"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/2/9"
                },
                {
                    "titulo": "Capítulo 10:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/2/10"
                },
                {
                    "titulo": "Capítulo 11:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/2/11"
                },
                {
                    "titulo": "Capítulo 12:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/2/12"
                }
            ]
        },
        {
            "nombre": "Temporada 3",
            "capitulos": [
                {
                    "titulo": "Capítulo 1:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/3/1"
                },
                {
                    "titulo": "Capítulo 2:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/3/2"
                },
                {
                    "titulo": "Capítulo 3:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/3/3"
                },
                {
                    "titulo": "Capítulo 4:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/3/4"
                },
                {
                    "titulo": "Capítulo 5:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/3/5"
                },
                {
                    "titulo": "Capítulo 6:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/3/6"
                },
                {
                    "titulo": "Capítulo 7:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/3/7"
                },
                {
                    "titulo": "Capítulo 8:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/3/8"
                },
                {
                    "titulo": "Capítulo 9:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/3/9"
                },
                {
                    "titulo": "Capítulo 10:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/3/10"
                },
                {
                    "titulo": "Capítulo 11:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/3/11"
                },
                {
                    "titulo": "Capítulo 12:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/3/12"
                },
                {
                    "titulo": "Capítulo 13:",
                    "video": "https://unlimplay.com/play/embed/tv/120089/3/13"
                }
            ]
        }
    ]
},SS
        ];

        const upcomingData = [
            {"id":"Scary-Movie-Terroríficamente-incorrecta","tipo":"proximamente","titulo":"Scary Movie: Terroríficamente incorrecta","portada":"https://media.themoviedb.org/t/p/w300_and_h450_face/iYQnvP1DrgSaoSbYPuNCPr3TRqk.jpg","banner":"https://media.themoviedb.org/t/p/w500_and_h282_face/pO7XVtgA6t5JbxY1S8Y4cQEFarR.jpg","categorias":["Comedia"],"descripcion":"Dos amigos se ven envueltos otra vez en el caos con asesinos, monstruos y criaturas sobrenaturales.","año":"2026","calificacion":6.4,"fechaEstreno":"June 6, 2026 00:00:00"},
            {
    "id": "Avengers-Doomsday",
    "tipo": "proximamente",
    "titulo": "Avengers: Doomsday",
    "portada": "https://media.themoviedb.org/t/p/w300_and_h450_face/rQKabpeIewLLNStFr3anEXI0xqu.jpg",
    "banner": "https://media.themoviedb.org/t/p/w533_and_h300_face/4OZznMYFmQPP4orKgbLaWRyYmBb.jpg",
    "categorias": [
        "Acción",
        "Ciencia Ficción"
    ],
    "descripcion": "Cuando Tony Stark y Bruce Banner intentan poner en marcha un inactivo programa de mantenimiento de la paz llamado Ultrón, las cosas van terriblemente mal y depende de los héroes más poderosos de la Tierra evitar que el villano Ultrón lleve a cabo su terrible plan.",
    "año": "2016",
    "calificacion": 10,
    "fechaEstreno": "December 17, 2026 00:00:00"
},
        ]; 