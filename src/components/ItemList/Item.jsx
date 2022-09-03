import ItemCount from '../ItemCount/ItemCount';
const Item = ({product}) => {
    const {id, name, price, image, stock} = product;
    return (
        <div className="card_product" id={id}>
            <img className="img_card" src={image.src} alt={image.alt}/>
            <div>
                <p>{name}</p>
                <p>price: {price}</p>
                <p>Stock: {stock}</p>
        
                <ItemCount stock={stock}/>
            </div>  
        </div> 
    );
}

export default Item;
