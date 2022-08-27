import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = () => {    
    
    return (
        <div id='pageBody'>
            <ItemCount stock={10} name="Pinarello Prince Fx" price="5000$"/>
        </div>
    );
}

export default ItemListContainer;
