import React from "react";

import classes from "./MainTitle.module.css";

const MainTitle = () => {
    return (
        <div className={classes.main_container}>
            <div className={classes.main_title}>
                <h1>배달메뉴</h1>
                <p>결제시 배달료 1,200원이 포함되어 결제됩니다.</p>
            </div>
        </div>
    );
}

export default React.memo(MainTitle);