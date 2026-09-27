import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer>Catálogo de Filmes - 2026</footer>
    </div>
  );
}

export default Layout;
