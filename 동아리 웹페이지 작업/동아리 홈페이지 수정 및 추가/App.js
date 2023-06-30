import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import Login from "./components/Overlay/Login";
import ContactOverlay from "./components/Overlay/ContactOverlay";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const showLogin = useSelector((state) => state.login.loginIsVisible);
  const showContact = useSelector((state) => state.contact.contactIsVisible);

  return (
    <Fragment>
      {showLogin && <Login />}
      {showContact && <ContactOverlay />}
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
