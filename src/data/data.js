const products = [
  {
    id: "Grt223",
    name: "Cartera",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
    price: 400,
    stock: 10,
    image: "/img/cartera.webp",
    category: "carteras"
  },
  {
    id: "Grt224",
    name: "Ropa Interior",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
    price: 420,
    stock: 4,
    image: "/img/ropa-interior.webp",
    category: "ropa-interior"
  },
  {
    id: "Hff556",
    name: "Accesorio",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
    price: 720,
    stock: 5,
    image: "/img/accesorios.webp",
    category: "accesorios"
  },
  {
    id: "Hff557",
    name: "Vestido",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
    price: 620,
    stock: 17,
    image: "/img/vestidoL.webp",
    category: "vestidos"
  }
]

const getProducts = () => {
  return new Promise( (resolve, reject) => {
    //simulamos un retraso de red de 2segundos
    setTimeout(()=>{
      resolve(products)
    }, 2000)
  })
}

export { getProducts }