import React from "react";

import classes from "./MainTitle.module.css";
import music from "../../assets/music_icon.png";

const MainTitle = () => {
    return (
        <div className={classes.main_upper_title}>
            <h1>
                조선대학교 밴드동아리<br />
                Pan's PM에 오신 것을 환영합니다. 
            </h1>
            <img src={music} alt="title sub 1"></img>
            <img src={music} id={classes.music_icon_bottom} alt="title sub 2"></img>
        </div>
    );
}

export default MainTitle;