import { Outlet, Link } from "react-router-dom";
import '../index.css';

const Layout = () => {
  return (
    <>
      <div class="w-full h-10 bg-gray-800 items-center justify-start text-white flex space-x-4 px-8">
        <Link to="/" className="hover:bg-gray-700 h-10 flex px-2 items-center">Home</Link>
        <Link to="/c3" className="hover:bg-gray-700 h-10 flex px-2 items-center">C3.js</Link>
        <Link to="/chartjs" className="hover:bg-gray-700 h-10 flex px-2 items-center">Chart.js</Link>
        <Link to="/dygraph" className="hover:bg-gray-700 h-10 flex px-2 items-center">DyGraph.js</Link>
      </div>

      <Outlet />
    </>
  )
};

export default Layout;
