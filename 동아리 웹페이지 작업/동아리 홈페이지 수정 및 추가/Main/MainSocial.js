import React from "react";

import classes from "./MainSocial.module.css";

import insta from "../../assets/insta.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";

const MainSocial = () => {
    return (
        <div className={classes.main_social_container}>
            <h2>놀러오세요!</h2>
            <div className={classes.social_link}>
                <ul>
                    <li className={classes.social_item}>
                        <a href="https://www.instagram.com/pans_pm/">
                            <img src={insta} alt="insta" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/people/PANS-PM/100040875442457/">
                            <img src={facebook} alt="facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/@pans_pm">
                            <img src={youtube} alt="youtube" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MainSocial;