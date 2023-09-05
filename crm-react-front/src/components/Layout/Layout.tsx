import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div className="wrapper">
      <div className="something">OIJOINININ</div>

      <Outlet />
    </div>
  );
};

export default Layout;
