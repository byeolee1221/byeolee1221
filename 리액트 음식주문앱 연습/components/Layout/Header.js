import React from "react";
import classes from "./Header.module.css";
import HeaderCartBtn from "./HeaderCartBtn";
import headerImg from "../../assets/meals.jpg";

const Header = (props) => {
    return (
        <header className={classes.header_section}>
            <div className={classes.header_container}>
                <h1>React Meals</h1>
                <HeaderCartBtn onModal={props.onModalOpen} valueModal={props.valueModal} valueBackdrop={props.valueBackdrop}/>
            </div>
            <div className={classes.header_img}>
                <img src={headerImg} alt="header"/>
            </div>
        </header>
    );
}

export default Header;