import {useState} from 'react'
import './ItemCount.css'

const ItemCount = ({stock, name, price}) => {
    const [count, setCount] = useState(0)

    const addProduct = () =>{
        if(count < stock){
            setCount(count + 1 )
        }
    }

    const removeProduct = () =>{
        if(count > 0){
            setCount(count - 1 )
        }
    }

    return (
        <div className="card_product">
            <img className="img_card" src="images/PinarelloPrinceFx_ecomm.jpg" />
            <div>
                <p>{name}</p>
                <p>price: {price}</p>
                <p>Stock: {stock}</p>

                <div className='boxBtns'>
                    <button className="addBtn" onClick={addProduct}>+</button>
                    <p>{count}</p>
                    <button className="removeBtn" onClick={removeProduct}>-</button>
                </div>
            </div>  
        </div>  
    );
}

export default ItemCount;
