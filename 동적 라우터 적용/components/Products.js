import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const PRODUCT = [
    { id: 'p1', title: 'product-1' },
    { id: 'p2', title: 'product-2' },
    { id: 'p3', title: 'product-3' }
];

const Products = () => {
    return (
        <Fragment>
            <h1>Products page!</h1>
            <ul>
                {PRODUCT.map((product) => (
                    <li key={product.id}><Link to={product.id}>{product.title}</Link></li>
                ))}
            </ul>
        </Fragment>
    );
}

export default Products;