import React, { Fragment, useState } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [overlayDisplay, setOverlayDisplay] = useState(false);
  const [backdropdisplay, setBackdropDisplay] = useState(false);

  const overlayOpenHandler = () => {
    setOverlayDisplay(true);
    setBackdropDisplay(true);
  }

  const overlayCloseHandler = () => {
    setOverlayDisplay(false);
    setBackdropDisplay(false);
  }

  return (
    <Fragment>
      <Header onOverlayOpen={overlayOpenHandler} valueOverlay={overlayDisplay} valueBackdrop={backdropdisplay} />
      <Main onOverlayClose={overlayCloseHandler} valueOverlay={overlayDisplay} valueBackdrop={backdropdisplay} />
      <Footer />
    </Fragment>
  );
}

export default App;
