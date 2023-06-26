import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import Auth from './components/Auth';
import Userfile from './components/Userfile';
import Counter from './components/Counter';
import './App.css';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <Userfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
