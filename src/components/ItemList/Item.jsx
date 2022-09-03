const Item = ({product}) => {
    
    const {id, name, price, stock, image} = product;
    return (
        <div className="card_product" id={id}>
            <img className="img_card" src={image.src} alt={image.alt}/>
            <div>
                <p>{name}</p>
                <p>price: {price}</p>
                <p>Stock: {stock}</p>
                <button>VIEW DETAILS</button>
            </div>  
        </div> 
    );
}

export default Item;
