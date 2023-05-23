import React, { useState } from "react";
import CartModal from "./components/Cart/CartModal";
import Header from "./components/Layout/Header";
import Main from "./components/Meals/Main";
import CartProvider from "./store/CartProvider";
import "./App.css";

function App () {
  const [modalDisplay, setModalDisplay] = useState(false);
  const [backdropDisplay, setBackdropDisplay] = useState(false);

  const modalCloseHandler = () => {
      setModalDisplay(false);
      setBackdropDisplay(false);
  }

  const modalOpenHandler = () => {
      setModalDisplay(true);
      setBackdropDisplay(true);
  }

  return (
    <CartProvider>
      <CartModal onModalClose={modalCloseHandler} valueModal={modalDisplay} valueBackdrop={backdropDisplay} />
      <Header onModalOpen={modalOpenHandler} valueModal={modalDisplay} valueBackdrop={backdropDisplay} />
      <Main />
    </CartProvider>
  );
}

export default App;
