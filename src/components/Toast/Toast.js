import Toastify from 'toastify-js'
import './Toast.css'

//Toast que sale cuando se agrega un producto
export const pAddedToast = () =>{
    Toastify({
      text: "Product added",
      duration: 2000,
      close: false,
      position: "right",
      offset: { 
          y: 65 
        },
      stopOnFocus: true, 
      style: {
          background: "#fff",
          color: "#000",
          boxShadow: "1px 0px 4px 1px #0000009e",
          borderLeft: "4px solid #16c60c",
          padding: "10px 15px 12px 15px",
      }
    }).showToast();
  }
