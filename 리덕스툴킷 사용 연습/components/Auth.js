import React from "react";
import { useDispatch } from "react-redux";
import { AuthActions } from "../store/AuthSlice";

import classes from "./Auth.module.css";

const Auth = () => {
    const dispatch = useDispatch();

    const loginHandler = (event) => {
        event.preventDefault();

        dispatch(AuthActions.login());
    }

    return (
        <div className={classes.auth_container}>
            <form onSubmit={loginHandler}>
                <div className={classes.auth_form_box}>
                    <label htmlFor="email">E-MAIL</label>
                    <input id="email" name="user_email" />
                </div>
                <div className={classes.auth_form_box}>
                    <label htmlFor="password">PASSWORD</label>
                    <input id="password" name="user_password" />
                </div>
                <button>로그인</button>
            </form>
        </div>
    );
}

export default Auth;