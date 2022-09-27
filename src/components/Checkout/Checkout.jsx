import './Checkout.css'
import React, { useRef } from 'react';
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { useState } from 'react';
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../firebase/firebase"


const Checkout = () => {
    const { cart, getTotal, clear } = useContext(CartContext);
    const dataFormulario = useRef();
    const [orderId, setOrderId] = useState();
    const [buyer, setBuyer] = useState({
        Nombre: '',
        Email: '',
        Telefono: ''
    })

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

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(dataFormulario.current)
        setBuyer(Object.fromEntries(formData));
        const items = cart.map(e => { return { id: e.id, title: e.name, price: e.price, quantity: e.cant } })
        const dia = new Date()
        const total = getTotal()
        const data = { buyer, items, dia, total }
        generateOrder(data);
    }

    return (
        (!orderId) ? (
        <form id='checkoutForm' onSubmit={handleSubmit} ref={dataFormulario}>

            <input type="text" name="Name" placeholder='Name'/>

            <input type="email" name='Email' placeholder='Email'/>

            <input type="text" name='Phone' placeholder='Phone number'/>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        ) : <h2>Su orden de compra es: {orderId}</h2>
    );
}

export default Checkout;
