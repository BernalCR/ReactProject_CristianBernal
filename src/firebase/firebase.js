
import { initializeApp } from "firebase/app";
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, getFirestore, query, where } from "firebase/firestore";
import Products from "../Products";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "proyecto-react-8bb5f.firebaseapp.com",
  projectId: "proyecto-react-8bb5f",
  storageBucket: "proyecto-react-8bb5f.appspot.com",
  messagingSenderId: "208085987785",
  appId: "1:208085987785:web:9ac518e2dc536492eab818",
  measurementId: "G-LCEZMTC44K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

//Funcion para la primera vez que se cargan los productos a la base de datos
async function cargarBaseDeDatos  () {
  new Promise ((res,rej) => {res(Products)})
  .then(data => {
    data.forEach( async product => {
         await addDoc(collection(db, "products"), {
            name: product.name,
            category: product.category,
            price: product.price,
            stock: product.stock,
            image: {
              src: product.image.src,
              alt: product.image.alt,
            },
            description: product.description,
          });
    })
  })
  .catch(error => console.error(error))
}

//Obtener un grupo de productos de la base de datos
const getProducts = async (category) => {
  try {
    const document = category ? query(collection(db, "products"), where("category", "==", category))
      : collection(db, "products")
    const col = await getDocs(document)
    const result = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
    return result

  } catch (error) {
    console.log(error)
  }
}

//Obtener un producto de la base de datos
const getProduct = async (idItem) => {
  try {
      const document = doc(db, "products", idItem)
      const response = await getDoc(document)
      const result = { id: response.id, ...response.data() }
      return result
  } catch (error) {
      console.log(error)
  }
}

//Actualizar al stock en la base de datos
const updateStock = async (item) => {
  const product = doc(db, 'products', item.id);

  await updateDoc(product, {
    stock: item.stock - item.cant,
  });
};



export {db,app, cargarBaseDeDatos, getProducts, getProduct, updateStock}






