import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { LoginActions } from "../../store/LoginSlice";

import Backdrop from "./Backdrop";
import classes from "./Login.module.css";
import logo from "../../assets/logo.jpg";

const Login = () => {
    const dispatch = useDispatch();

    const loginCloseHandler = () => {
        dispatch(LoginActions.toggle());
        dispatch(LoginActions.backdrop());
    }
    
    const showBackdrop = useSelector((state) => state.login.backdropIsVisible);

    return ReactDOM.createPortal (
        <Fragment>
            {showBackdrop && <Backdrop />}
            <aside className={classes.login_overlay}>
                <div className={classes.login_container}>
                    <div className={classes.login_logo}>
                        <img src={logo} alt="login logo"></img>
                        <h2>Pan's PM</h2>
                    </div>
                    <form className={classes.login_form}>
                        <div className={classes.form_element}>
                            <label htmlFor="user_id">아이디</label>
                            <input type="text" id="user_id" name="id" />
                        </div>
                        <div className={classes.form_element}>
                            <label htmlFor="user_password">비밀번호</label>
                            <input type="password" id="user_password" name="password" min="8" />
                        </div>
                        <button>로그인</button>
                        <button type="button" onClick={loginCloseHandler}>돌아가기</button>
                    </form>
                </div>
            </aside>
        </Fragment>, document.getElementById('overlay')
        );
}

export default Login;