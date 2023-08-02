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
        title: "Categoría",
        slug: "/categorias",
        children: [],
    },
    {
        title: "Demo",
        slug: "/demo",
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
    categories: [
        {
            name: "Demo",
            desc: "Demostración",
            image:
                "https://picsum.photos/290/80?random=" +
                Math.random() * 1000,
            order: 1,
        },
        {
            name: "Astro",
            desc: "Astro Art",
            image:
                "https://picsum.photos/290/80?random=" +
                Math.random() * 1000,
            order: 2,
        },
    ],
    categorySettings: {
        order: "count",
    },
};
