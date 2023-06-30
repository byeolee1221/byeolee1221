import React from "react";

import MainTitle from "./MainTitle";
import MainInfo from "./MainInfo";
import classes from "./Main.module.css";
import MainInfo2 from "./MainInfo2";
import MainSocial from "./MainSocial";

const Main = (props) => {
    return (
        <main>
            <div className={classes.main_container}>
                <MainTitle />
                <MainInfo />
                <MainInfo2 />
                <MainSocial />
            </div>
        </main>
    );
}

export default Main;