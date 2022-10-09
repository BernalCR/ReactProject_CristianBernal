import './Checkout.css'
import React, { useRef } from 'react';
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { useState } from 'react';
import { addDoc, collection } from "firebase/firestore"
import { db, updateStock } from "../../firebase/firebase"


const Checkout = () => {
    const { cart, getTotal, clear } = useContext(CartContext);
    const dataFormulario = useRef();
    const submitBtn = useRef();
    const [orderId, setOrderId] = useState();
    /*const [buyer, setBuyer] = useState({
        Nombre: '',
        Email: '',
        Telefono: ''
    })*/

    //Funcion para generar la coleccion de las ordenes orden
    const generateOrder = async (data) => {
        try {
            const col = collection(db, "Orders")
            const order = await addDoc(col, data)
            setOrderId(order.id)
            clear();

        } catch (error) {
            console.log(error)
        }
    }

    //Al finalizar compra guarda toda la informacion de la orden
    const handleSubmit = (e) => {
        e.preventDefault()
        submitBtn.current.classList.add("wait");
        const formData = new FormData(dataFormulario.current)
        //setBuyer(Object.fromEntries(formData));
        const items = cart.map(e => { return { id: e.id, title: e.name, price: e.price, quantity: e.cant } });
        const dia = new Date();
        const total = getTotal();
        const buyer = Object.fromEntries(formData);
        const data = { buyer, items, dia, total };

        generateOrder(data);
        

        cart.forEach(product => {
            updateStock(product);
        });
    }

    // El return condicional establece que si ya se creo una orden muestre el numero de la orden, de lo contrario pide los datos del cliente para terminar la compra
    return (
        (!orderId) ? (
        <div id='CheckoutContainer'>
            <p>Ingrese sus datos para terminar la compra</p>
            <form id='checkoutForm' onSubmit={handleSubmit} ref={dataFormulario}>

                <input type="text" name="Name" placeholder='Name'/>

                <input type="email" name='Email' placeholder='Email'/>

                <input type="text" name='Phone' placeholder='Phone number'/>

                <button type="submit" ref={submitBtn} className="btn btn-primary">Submit</button>
            </form>
        </div>
        ) : <h2>Su orden de compra es: {orderId}</h2>
    );
}

export default Checkout;
