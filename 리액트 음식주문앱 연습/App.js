import React, { Fragment } from "react";
import Header from "./components/Layout/Header";
import Main from "./components/Meals/Main";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  );
}

export default App;
