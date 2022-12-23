/*
const productos = [
    {
        id: 1,
        name: "Terrario1",
        type: "abierto",
        plants: "suculentas",
        pot: "cilindro",
        potSize: "grande",
        price: 8000,
        dues: 3,
        offer: false,
        stock: 0,
        category: "terrarios",
        detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
        img: '/assets/images/products/terrarios/terrarios001.jpg',
        // en el url de img tengo que poner una barra ( / ) siosi
    },
    {
        id: 2,
        name: "Terrario2",
        type: "abierto",
        plants: "suculentas",
        pot: "pecera",
        potSize: "grande",
        price: 8000,
        dues: 3,
        offer: false,
        stock: 3,
        category: "terrarios",
        detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
        img: '/assets/images/products/terrarios/terrarios002.jpg',
    },
    {
        id: 3,
        name: "Terrario3",
        type: "abierto",
        plants: "suculentas",
        pot: "cilindro",
        potSize: "mediano",
        price: 6000,
        dues: 3,
        offer: true,
        stock: 3,
        category: "cilindro",
        detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
        img: '/assets/images/products/terrarios/terrarios003.jpg',
    },
    {
        id: 4,
        name: "Terrario4",
        type: "abierto",
        plants: "suculentas",
        pot: "cilindro",
        potSize: "grande",
        price: 8000,
        dues: 3,
        offer: false,
        stock: 3,
        category: "terrarios",
        detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
        img: '/assets/images/products/terrarios/terrarios004.jpg',
    },
    {
        id: 5,
        name: "Terrario5",
        type: "abierto",
        plants: "suculentas",
        pot: "cilindro",
        potSize: "chico",
        price: 4000,
        dues: 3,
        offer: false,
        stock: 3,
        category: "terrarios",
        detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
        img: '/assets/images/products/terrarios/terrarios005.jpg',
    },
    {
        id: 6,
        name: "Terrario6",
        type: "abierto",
        plants: "suculentas",
        pot: "cilindro",
        potSize: "grande",
        price: 8000,
        dues: 3,
        offer: false,
        stock: 3,
        category: "terrarios",
        detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
        img: '/assets/images/products/terrarios/terrarios006.jpg',
    },
    {
        id: 7,
        name: "Terrario7",
        type: "abierto",
        plants: "suculentas",
        pot: "pecera",
        potSize: "grande",
        price: 8000,
        dues: 3,
        offer: false,
        stock: 3,
        category: "terrarios",
        detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
        img: '/assets/images/products/terrarios/terrarios007.jpg',
    },
    {
        id: 8,
        name: "Terrario8",
        type: "abierto",
        plants: "suculentas",
        pot: "pecera",
        potSize: "mediano",
        price: 6000,
        dues: 3,
        offer: false,
        stock: 3,
        category: "terrarios",
        detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
        img: '/assets/images/products/terrarios/terrarios008.jpg',
    },
    {
        id: 9,
        name: "Terrario9",
        type: "abierto",
        plants: "suculentas",
        pot: "pecera",
        potSize: "grande",
        price: 8000,
        dues: 3,
        offer: false,
        stock: 3,
        category: "terrarios",
        detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
        img: '/assets/images/products/terrarios/terrarios009.jpg',
    },
    {
        id: 10,
        name: "Aeonium Hierrense",
        price: 500,
        dues: 3,
        offer: false,
        stock: 3,
        category: "plantas",
        detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
        img: '/assets/images/products/plantas/aeoniumHierrense.png',
    },
    {
        id: 11,
        name: "Aeonium Kiwi",
        price: 500,
        dues: 3,
        offer: false,
        stock: 3,
        category: "plantas",
        detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
        img: '/assets/images/products/plantas/aeoniumKiwi.png',
    },
    {
        id: 12,
        name: "Aloe Vera Aristata",
        price: 500,
        dues: 3,
        offer: false,
        stock: 3,
        category: "plantas",
        detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
        img: '/assets/images/products/plantas/aloeVeraAristata.png',
    },
    {
        id: 13,
        name: "Aloe Vera Juvenna",
        price: 500,
        dues: 3,
        offer: false,
        stock: 3,
        category: "plantas",
        detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
        img: '/assets/images/products/plantas/aloeVeraJuvenna.png',
    },
    {
        id: 14,
        name: "Cotyledon Tomentosa",
        price: 500,
        dues: 3,
        offer: false,
        stock: 3,
        category: "plantas",
        detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
        img: '/assets/images/products/plantas/cotyledonTomentosa.png',
    },
    {
        id: 15,
        name: "Cotyledon Pendens",
        price: 500,
        dues: 3,
        offer: false,
        stock: 3,
        category: "plantas",
        detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
        img: '/assets/images/products/plantas/cotyledonPendens.png',
    },
    {
        id: 16,
        name: "Echeveria Amoena",
        price: 500,
        dues: 3,
        offer: false,
        stock: 3,
        category: "plantas",
        detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
        img: '/assets/images/products/plantas/echeveriaAmoena.png',
    },
    {
        id: 17,
        name: "Echeveria Elegans",
        price: 500,
        dues: 3,
        offer: false,
        stock: 3,
        category: "plantas",
        detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
        img: '/assets/images/products/plantas/echeveriaElegans.png',
    },
    {
        id: 18,
        name: "Haworthia Attenuata",
        price: 500,
        dues: 3,
        offer: false,
        stock: 3,
        category: "plantas",
        detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
        img: '/assets/images/products/plantas/haworthiaAttenuata.png',
    },
    {
        id: 19,
        name: "Haworthia Coarctata",
        price: 500,
        dues: 3,
        offer: false,
        stock: 3,
        category: "plantas",
        detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
        img: '/assets/images/products/plantas/haworthiaCoarctata.png',
    },
    {
        id: 20,
        name: "Haworthia Cymbiformis",
        price: 500,
        dues: 3,
        offer: false,
        stock: 3,
        category: "plantas",
        detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
        img: '/assets/images/products/plantas/haworthiaCymbiformis.png',
    },
    {
        id: 21,
        name: "Haworthia Turgida",
        price: 500,
        dues: 3,
        offer: false,
        stock: 3,
        category: "plantas",
        detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
        img: '/assets/images/products/plantas/haworthiaTurgida.png',
    },
    {
        id: 22,
        name: "Haworthia Cuspidata",
        price: 500,
        dues: 3,
        offer: false,
        stock: 3,
        category: "plantas",
        detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
        img: '/assets/images/products/plantas/haworthiaCuspidata.png',
    },
    {
        id: 23,
        name: "Sedum Morganianum",
        price: 500,
        dues: 3,
        offer: false,
        stock: 3,
        category: "plantas",
        detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
        img: '/assets/images/products/plantas/sedumMorganianum.png',
    },
]
//datos harcodeados puro y estatico. Quiero que sean dinamicos

// PRODUCTOS: me retorna todos los productos
export function getItems() {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                resolve(productos)
            }, 1500)
    })
}

//PRODUCTO: me retorna el producto seleccionado
export function getSingleItem(idItem) {
    return new Promise((resolve, reject) => {
        let itemFind = productos.find((item) => {
            return item.id === parseInt(idItem)
        })
        setTimeout(() => {
            if (itemFind) resolve(itemFind)
            else reject(new Error("item no encontrado"))
        }, 1500)
    });
}


//CATEGORIA: me retorna la ctaegoria seleccionada
export function getItemsByCategory(cat) {
    return new Promise((resolve, reject) => {
        let itemFind = productos.filter((item) => {
            return item.category === cat
        })
        setTimeout(() => {
            if (itemFind) resolve(itemFind)
            else reject(new Error("item no encontrado"))
        }, 1500)
    });
}
*/