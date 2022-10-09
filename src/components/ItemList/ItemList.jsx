import './ItemList.css'
import Item from './Item';


const ItemList = ({prodList}) => {
    //Este componente le pasa productos a Item.jsx para que los imprima
    return (
        <div id="productsBox">
            {prodList.map(item => <Item key={item.id} product={item} />)}
        </div>
    )      
}

export default ItemList;
