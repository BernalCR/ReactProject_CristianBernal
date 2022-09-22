
import { initializeApp } from "firebase/app";
import { collection, addDoc, getDocs, doc, getDoc, getFirestore, query, where } from "firebase/firestore";
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

export {db,app, cargarBaseDeDatos, getProducts, getProduct}