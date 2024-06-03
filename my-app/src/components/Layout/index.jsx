import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default Layout;
