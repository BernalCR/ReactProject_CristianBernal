import './ItemCount.css'
import UseCount from './useCount';

const ItemCount = ({stock}) => {
    const {addProduct, removeProduct, count} = UseCount(stock);
    return (
        <div className='boxBtns'>
            <button className="addBtn" onClick={addProduct}>+</button>
            <p>{count}</p>
            <button className="removeBtn" onClick={removeProduct}>-</button>
        </div>
    );
}

export default ItemCount;
