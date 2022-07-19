const productCard = (props) => {
    return (
        <div className="product-card">
            <img className="product-image" src={props.image} alt={props.name} />
            <div className="product-info">
                <h3 className="product-name">{props.name}</h3>
                <p className="product-price">{props.price}</p>
                <button className="product-button">Add to cart</button>
            </div>
        </div>
    );
}

export default productCard;