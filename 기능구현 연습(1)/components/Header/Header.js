import React from "react";

import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <header className={classes.header_section}>
            <div className={classes.header_container}>
                <HeaderLogo />
                <HeaderNav />
            </div>
        </header>
    );
}

export default Header;