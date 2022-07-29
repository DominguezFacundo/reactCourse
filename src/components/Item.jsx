const Item = ({ product }) => {
    return (
        <div className="product-card">
            <img className="product-image" src={product.image} alt={product.name} />
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <button className="product-button">Add to cart</button>
            </div>
        </div>
    );
}

export default Item;