import React from "react";

import Backdrop from "../Overlay/Backdrop";
import Overlay from "../Overlay/Overlay";
import MainTitle from "./MainTitle";
import MainInfo from "./MainInfo";
import classes from "./Main.module.css";
import MainInfo2 from "./MainInfo2";

const Main = (props) => {
    return (
        <main>
            <div className={classes.main_container}>
                <Backdrop onOverlayClose={props.onOverlayClose} valueOverlay={props.valueOverlay} valueBackdrop={props.valueBackdrop} />
                <Overlay onOverlayClose={props.onOverlayClose} valueOverlay={props.valueOverlay} valueBackdrop={props.valueBackdrop} />
                <MainTitle />
                <MainInfo />
                <MainInfo2 />
            </div>
        </main>
    );
}

export default Main;