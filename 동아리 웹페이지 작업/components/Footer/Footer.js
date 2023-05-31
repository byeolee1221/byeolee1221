import React from "react";

import classes from "./Footer.module.css";
import logo from "../../assets/logo.jpg";

const Footer = () => {
    return (
        <footer className={classes.footer_section}>
            <div className={classes.footer_container}>
                <div className={classes.footer_logo}>
                    <img src={logo}></img>
                    <p>PAN'S PM</p>
                </div>
                <div className={classes.footer_info}>
                    <h3>조선대학교 밴드동아리 PAN'S PM</h3>
                    <span>오시는 길 : 광주광역시 동구 조선대길 87 (서석동, 조선대학교 학생회관 6층 6121호)</span>
                    <span>사이트 관리자 : 16기 드럼 문창기</span>
                    <span id={classes.footer_info_copyright}>© 조선대학교 밴드동아리 PAN'S PM. All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
}

export default React.memo(Footer);