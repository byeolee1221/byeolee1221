import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { LoginActions } from "../../store/LoginSlice";
import { contactActions } from "../../store/ContactSlice";

import classes from "./Header.module.css";
import logo from "../../assets/logo.jpg";

const Header = (props) => {
    const dispatch = useDispatch();

    const loginToggleHandler = () => {
        dispatch(LoginActions.toggle());
        dispatch(LoginActions.backdrop());
    }

    const contactToggleHandler = () => {
        dispatch(contactActions.toggle());
        dispatch(contactActions.backdrop());
    }

    return (
        <Fragment>
            <header className={classes.header_section}>
                <div className={classes.header_container}>
                    <div className={classes.header_logo}>
                        <a href="/">
                            <img src={logo} alt="header logo"></img>PAN'S PM
                        </a>
                    </div>
                    <div className={classes.header_nav}>
                        <nav className={classes.header_nav_left}>
                            <ul className={classes.nav_left_list}>
                                <li className={classes.nav_left_item}>
                                    <a href="/">동아리 소개</a>
                                </li>
                                <li className={classes.nav_left_item}>
                                    <a href="/">동아리 가입</a>
                                </li>
                                <li className={classes.nav_left_item}>
                                    <a href="/">동아리 기록</a>
                                </li>
                            </ul>
                        </nav>
                        <nav className={classes.header_nav_right}>
                            <ul className={classes.nav_right_list}>
                                <li className={classes.nav_right_item}>
                                    <a href="/">회원가입</a>
                                </li>
                                <li className={classes.nav_right_item}>
                                    <button id={classes.login_btn} type="button" onClick={loginToggleHandler}>로그인</button>
                                </li>
                                <li className={classes.nav_right_item}>
                                    <button id={classes.contact_btn} type="button" onClick={contactToggleHandler}>💡 동아리 문의</button>
                                </li>                          
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </Fragment>
    );
}

export default Header;