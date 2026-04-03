import React from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer';
import Header from './Header';

const Root = () => {
  return (
    <div>
      <h1>Welcome to React Router</h1>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default Root