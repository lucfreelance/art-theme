const { MODE } = import.meta.env;

export const isDev = MODE === "development";
export const isProd = MODE === "production";

export const pageSize = 10;

export const siteInfo = {
    siteName: "Colombiartesanías",
    siteDesc: "Arte y artesanías de Colombia para el mundo !",
    lang: "en-us",
    icon: "https://picsum.photos/96",
    avatar: "https://picsum.photos/96",
    github: "https://github.com/npmrun/art-theme",
    get hero() {
        return (
            "https://picsum.photos/1280/780?random=" +
            Math.random() * 1000
        );
    },
    heroPosition: "center",
    startTime: "6/8/2022 10:28:00",
};

export const nav = [
    {
        title: "Acerca de",
        slug: "/acerca",
        children: [],
    },
    {
        title: "Buscar",
        slug: "/buscar",
        children: [],
    },
    {
        title: "Categorías",
        slug: "/categorias",
        children: [],
    },
    {
        title: "Didácticos",
        slug: "/didacticos",
        children: [],
    },
    {
        title: "Entre nos",
        slug: "/contacto",
        children: [],
    },
];

export const settings = {
    showTOC: false,
    articleTheme: "github",
    postPicture: "first",
    categorias: [
        {
            name: "Bolsos",
            desc: "Bolsos de Ceci hechos artesanalmente",
            image:
                "/assets/didacticos.jpg",
        },
        {
            name: "Zandalias",
            desc: "Zandalias juveniles hechas para durar y siempre a la moda",
            image:
                "/assets/didacticos.jpg",
        },
        {
            name: "Accesorios para mujer",
            desc: "Los accesorios que no pueden faltar para un buen look, desde anillos, aretes, collares, pulseras y más",
            image:
                "/assets/didacticos.jpg",
        },
        {
            name: "Sopa de letras",
            desc: "Un reto que te encantará! Llena un librillo semanal de sopas de letras temáticas. Tenemos las sopas de letras mejor hechas porque las hacemos en base a temas de importancia cultural e interés general",
            image:
                "/assets/didacticos.jpg",
        },
        {
            name: "Libro para colorear",
            desc: "Un reto que te encantará! Libro para colorear",
            image:
                "/assets/didacticos.jpg",
        },
        {
            name: "Crucigramas",
            desc: "Un reto que te encantará! Crucigramas",
            image:
                "/assets/didacticos.jpg",
        },
        {
            name: "Encuentra la diferencia",
            desc: "Un reto que te encantará! Encuentra la diferencia",
            image:
                "/assets/didacticos.jpg",
        },
        {
            name: "Sudoku",
            desc: "Un reto que te encantará! Sudoku",
            image:
                "/assets/didacticos.jpg",
        },
        {
            name: "Patrones de colores",
            desc: "Un reto que te encantará! Patrones de colores",
            image:
                "/assets/didacticos.jpg",
        },
        {
            name: "Origami",
            desc: "Un reto que te encantará! Origami",
            image:
                "/assets/didacticos.jpg",
        },
    ],
    categorySettings: {
        order: "count",
    },
};