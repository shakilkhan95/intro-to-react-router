import React from 'react'
import { Outlet, useNavigation } from 'react-router'
import Footer from './Footer';
import Header from './Header';

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div>
      <h1>Welcome to React Router</h1>
      <Header></Header>
      {isNavigating && <span style={{fontSize: '72px', color:'red'}}>Loading...</span>}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default Root