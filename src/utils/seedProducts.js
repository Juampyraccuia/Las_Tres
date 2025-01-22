import db from "../db/db.js";
import { collection, addDoc } from "firebase/firestore"
import data from "../data/data.json" assert { type: "json" }

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
  },
]

const seedProducts = async() => {
  try{
    const productsRef = collection(db, "products")
    products.map( async( { id, ...dataProduct } ) => {
      await addDoc(productsRef, dataProduct)
    })

    console.log("Productos subidos correctamente!")
  }catch(error){
    console.log(error)
  }
}

seedProducts()