import './ItemList.css'
import Item from './Item';


const ItemList = ({prodList}) => {
    
    return (
        <div id="productsBox">
            {prodList.map(item => <Item key={item.id} product={item} />)}
        </div>
    )      
}

export default ItemList;
