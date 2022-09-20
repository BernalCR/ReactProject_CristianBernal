import { Link } from "react-router-dom";
const Item = ({product}) => {
    
    const {id, name, category, price, stock, image} = product;
    return (
        <div className="card_product" id={id}>
            <img className="img_card" src={`../images/${image.src}`} alt={image.alt}/>
            <div>
                <p>{name}</p>
                <p>{category}</p>
                <p>price: {price}$</p>
                <Link to={`/item/${id}`} className="detailsBtn">VIEW DETAILS</Link>
            </div>  
        </div> 
    );
}

export default Item;
