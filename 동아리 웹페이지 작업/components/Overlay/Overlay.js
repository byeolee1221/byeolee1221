import React from "react";
import ReactDOM from "react-dom";

import classes from "./Overlay.module.css";

const Overlay = (props) => {
    const overlayClasses = `${classes.overlay_box} ${!props.valueOverlay ? 'close' : ''}`;

    const btnClickHandler = () => {
        props.onOverlayClose();
    };

    return ReactDOM.createPortal (
        (props.valueOverlay && 
        <aside className={overlayClasses}>
            <div className={classes.overlay_container}>
                <div className={classes.overlay_title}>
                    <h2>
                        문의사항 있으시면<br />
                        아래 번호로 편하게 연락주세요.
                    </h2>
                </div>
                <div className={classes.overlay_paragraph}>
                    <p>
                        회장: 010-0000-0000<br />
                        부회장: 010-0000-0000
                    </p>
                    <p id={classes.overlay_para2}>
                        동아리 관련 문의 외 사항은 받지 않습니다.
                    </p>
                </div>
                <button onClick={btnClickHandler} type="button" className={classes.overlay_btn}>확인</button>
            </div>
        </aside>
        ), document.getElementById('overlay')
    ) 
}

export default Overlay;