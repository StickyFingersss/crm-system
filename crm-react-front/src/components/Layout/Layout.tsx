import axios from 'axios';

import { Outlet } from 'react-router-dom';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';

const Layout = ():JSX.Element => {

  const logoutHandler = async () => {
    try {
      await axios('http://localhost:3000/user/logout');
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="wrapper">
      <div className="something">OIJOINININ</div>
      <button type='button' onClick={logoutHandler}>Logout</button>
      <Register/>
      <Login/>

      <Outlet />
    </div>
  );
};

export default Layout;
