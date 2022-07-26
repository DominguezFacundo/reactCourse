const ItemCounter = (props) => {
    return (
        <div className="item-counter">
            <button className="decrementBtn" onClick={props.decrement}>-</button>
            <div className="inner-counter" >
            <p className="count-number" >{props.count}</p>
            <p className="count-text">{props.text}</p>
            </div>
            <button className="incrementBtn" onClick={props.increment}>+</button>           
        </div>
    );
}

export default ItemCounter;