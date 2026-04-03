import React from 'react'
import { Outlet } from 'react-router'

const Root = () => {
  return (
    <div>
      <h1>Welcome to React Router</h1>
      <Outlet />
    </div>
  );
}

export default Root