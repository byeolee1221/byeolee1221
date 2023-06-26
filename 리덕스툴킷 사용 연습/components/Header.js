import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AuthActions } from "../store/AuthSlice";

import classes from "./Header.module.css";

const Header = () => {
    const dispatch = useDispatch();

    const isAuth = useSelector((state) => state.auth.isAuthenticated);

    const logoutHandler = () => {
        dispatch(AuthActions.logout());
    }

    return (
        <header className={classes.header_section}>
            <div className={classes.header_container}>
                <div className={classes.header_logo}>
                    <a href="/">리덕스 인증</a>
                </div>
                {isAuth && <nav className={classes.header_nav}>
                    <ul className={classes.header_nav_list}>
                        <li className={classes.nav_item}>
                            <a href="/">내 제품</a>
                        </li>
                        <li className={classes.nav_item}>
                            <a href="/">내 판매내역</a>
                        </li>
                        <li className={classes.nav_item}>
                            <button onClick={logoutHandler} type="button">로그아웃</button>
                        </li>
                    </ul>
                </nav>}
            </div>
        </header>
    );
}

export default Header;