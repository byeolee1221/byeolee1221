import React from "react";

import classes from "./HeaderNav.module.css";

const HeaderNav = (props) => {
    return (
        <nav className={classes.header_nav}>
            <div className={classes.nav_container}>
                <ul className={classes.nav_list}>
                    <li><a href="/">얌얌커피 소개</a></li>
                    <li><a href="/">우리가 쓰는 원두</a></li>
                    <li><a href="/">배달문의</a></li>
                    <li><a href="/">매장찾기</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default HeaderNav;