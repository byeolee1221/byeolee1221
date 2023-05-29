import React from "react";

import classes from "./HeaderLogo.module.css";
import Logo from "../../Assets/coffee.svg";

const HeaderLogo = () => {
    return (
        <div className={classes.header_logo}>
            <a href="/" className={classes.header_logo_link}>
                <img src={Logo} alt="logo"/>Yamyam Coffee
            </a>
        </div>
    );
}

export default React.memo(HeaderLogo);