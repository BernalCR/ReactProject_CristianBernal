import './ItemCount.css'
import UseCount from './useCount';

const ItemCount = ({stock}) => {
    const {add, remove, count} = UseCount(stock);
    console.log("paso")
    return (
        <div className='boxBtns'>
            <button className="addBtn" onClick={add}>+</button>
            <p>{count}</p>
            <button className="removeBtn" onClick={remove}>-</button>
        </div>
    );
}

export default ItemCount;
