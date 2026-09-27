import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Detalhes from "./pages/Detalhes";
import Busca from "./pages/Busca";
import Favoritos from "./pages/Favoritos";
import NaoEncontrada from "./pages/NaoEncontrada";

function App() {
  return (
    <BrowserRouter basename="/Avaliacao04-web">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="detalhes/:id" element={<Detalhes />} />

          <Route path="filme/:id" element={<Detalhes />} />
          <Route path="busca" element={<Busca />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
