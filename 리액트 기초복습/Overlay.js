import React, {useState} from "react";
import ReactDOM from "react-dom";
// import Wrapper from "./Helper/Wrapper";
import "./Overlay.css";

const Overlay = (props) => {
    const [overlayDisplay, setOverlayDisplay] = useState(false);

    const closeOverlayHandler = () => {
        setOverlayDisplay(true);
    };

    if (overlayDisplay) {
        return null;
    }

    return ReactDOM.createPortal (
        <React.Fragment>
            {!overlayDisplay && <div className={`backdrop ${overlayDisplay ? 'close' : ''}`} onClick={closeOverlayHandler} />}
        <aside className="overlay_box">
            {!overlayDisplay && <div className="overlay_container">
                <h2>{props.onErrorDisplay.msg}</h2>
                <button type="button" onClick={closeOverlayHandler}>확인</button>
            </div>}
        </aside>
        </React.Fragment>,
        document.getElementById('aside_root')
    );
}

export default Overlay;