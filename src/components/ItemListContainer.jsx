import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        let allProducts = [{
            id: 1,
            name: "Producto 1",
            image: "./assets/headsets/g432-headset.png",
            price: "$100"
        }, {
            id: 2,
            name: "Producto 2",
            image: "./assets/headsets/g432-headset.png",
            price: "$100"
        }, {
            id: 3,
            name: "Producto 3",
            image: "./assets/headsets/g432-headset.png",
            price: "$100"
        }, {
            id: 4,
            name: "Producto 4",
            image: "./assets/headsets/g432-headset.png",
            price: "$100"
        }, {
            id: 5,
            name: "Producto 5",
            image: "./assets/headsets/g432-headset.png",
            price: "$100"
        },
        {
            id: 6,
            name: "Producto 6",
            image: "./assets/headsets/g432-headset.png",
            price: "$100"
        }];

        const productsPromise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(allProducts);
            }, 2000);
        });

        productsPromise.then((response) => {
            setProducts(response);
        });
    }, []);

    return (
        <ItemList products={products} />
    );
}

export default ItemListContainer;