import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Fragment>
            <h1>My home page!</h1>
            <p>Go to <Link to="products">the list of products.</Link></p>
        </Fragment>
    );
}

export default Home;